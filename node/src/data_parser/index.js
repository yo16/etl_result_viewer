`use strict`
/*
データをパース
*/
const sr = require('./structured_results');

function check_and_parse_main(data) {
    // チェックと構造化
    let results = check_and_classify_data(data)

    // 情報の抽出
    return parse_data(results);
}

// dataの内容を確認しながらクラス化する
function check_and_classify_data(data) {
    let results = new sr.Results();
    for (let i=0; i<data.length; i++) {
        results.add(data[i]);
    }
    return results;
}

// パース
function parse_data(structured_data) {
    // 下記を作って返す
    // resultsは、親子関係をツリー上に並べた順にする
    let ret_data = {
        results: [
            /*
            {
                id,
                title,
                status_str,     // [ SUCCESS | RUNNING | ERROR ]
                status,         // [ 0(S) | 1(R) | 9(E) ]
                parent_id,      // null if top job
                start_dt,
                start_dt_str,
                end_dt,
                end_dt_str,
                depth,          // 0 if top job
                children_num
            }*/
        ],
        scale: {
            min_dt: null,
            max_dt: null,
        },
    };

    // result部
    function *get_ret_data(id) {
        // 自分
        yield structured_data.result(id);

        // 子
        let gen_child_id = structured_data.children_ids_itr(id);
        let child_id = gen_child_id.next();
        while (!child_id.done) {
            yield get_ret_data(child_id.value);
    
            child_id = gen_child_id.next();
        }
    }
    let gen_top_id = structured_data.top_ids_iter();
    let top_id = gen_top_id.next();
    while (!top_id.done) {
        // トップとその子たち
        let gen_top_id_sub = get_ret_data(top_id.value);
        let top_id_sub = gen_top_id_sub.next();
        while (!top_id_sub.done) {
            ret_data.results.push(
                get_ret_data(top_id_sub.value)
            );
            top_id_sub = gen_top_id_sub.next();
        }

        top_id = gen_top_id.next();
    }

    // scale部
    ret_data.scale.min_dt = structured_data.min_dt;
    ret_data.scale.max_dt = structured_data.max_dt;

    return ret_data;
}


module.exports = {
    parse: check_and_parse_main
}
