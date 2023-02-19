`use strict`
/*
データをパース
*/

function check_and_parse_main(data) {
    // チェック
    check_data(data)

    // 情報の抽出
    return parse_data(data);
}

// dataの内容を確認する
function check_data(data) {
    // idが一意に設定されていること

    // 
    
    // 
}

// パース
function parse_data(data) {
    // 下記を返す
    // resultsは、親子関係をツリー上に並べた順にする
    let ret_data = {
        results: [
            /*
            {
                id,
                title,
                status_str,     // [ SUCCESS | ERROR | RUNNING ]
                status,         // [ 0(S) | 1(E) | 2(R) ]
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

    
}

function parse_one_data(one_data) {

}


module.exports = {
    parse: check_and_parse_main
}
