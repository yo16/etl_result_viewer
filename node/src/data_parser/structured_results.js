`use strict`
/*
構造化した処理結果
*/
const cv = require('../common_value');

// 処理結果群
class StructuredResults {
    constructor() {
        this.results = [];
        this.id_map = {};   // idからindexを得るためのマップ
    }

    add(d) {
        let rslt = new OneResult(d);
        this.id_map[rslt.id] = this.results.length;

        // 自分を登録
        this.results.push(rslt);

        // 親要素を更新、親要素の情報から自分も更新
        if (rslt.parent_id) {
            // parent_idが登録されてなかったらエラー
            // 順番的に後にあるかもしれないけど、エラーにする！
            if (!Object.keys(this.id_map).includes(rslt.parent_id)) {
                throw new Error('Parent('+rslt.parent_id+') is not registered');
            }
            // 親に自分を登録
            let parent_index = this.id_map[rslt.parent_id];
            this.results[parent_index].add_child(rslt.id);
            // depthを設定
            this.depth = this.results[parent_index].depth + 1;
        } else {
            // depthを設定
            this.depth = 0;
        }
    }

    // idからresultを返す
    result(id) {
        return this.results[this.id_map[id]];
    }

    // 開始時刻のminを取得して返す
    get min_dt() {
        let cur_min_dt = this.results[0].start_dt;
        for (let i=1; i<this.results.length; i++) {
            if (this.results[i].start_dt < cur_min_dt) {
                cur_min_dt = this.results[i].start_dt;
            }
        }
        return cur_min_dt;
    }

    // 開始時刻、終了時刻のmaxを取得して返す
    // 終了していないジョブもありうるため、開始時刻も見る
    get max_dt() {
        let cur_max_dt = this.results[0].start_dt;
        for (let i=0; i<this.results.length; i++) {
            if (cur_max_dt < this.results[i].start_dt) {
                cur_max_dt = this.results[i].start_dt;
            }
            if (
                (this.results[i].end_dt) &&
                (cur_max_dt < this.results[i].end_dt)
            ) {
                cur_max_dt = this.results[i].end_dt;
            }
        }
        return cur_max_dt;
    }

    // top_idのイテレータ
    *top_ids_iter() {
        for (let i=0; i<this.results.length; i++) {
            // parent_idがnullのidがtop_id
            if (!this.results[i].parent_id) {
                yield this.results[i].id;
            }
        }
    }

    // 子idのイテレータ
    *children_ids_itr(parent_id) {
        for (let i=0; i<this.results[this.id_map[parent_id]].children.length; i++) {
            yield this.results[this.id_map[parent_id]].children[i];
        }
    }
}

// １つの処理結果
class OneResult {
    constructor(input_result) {
        // id
        this.id = input_result.id;
        // 親id
        this.parent_id = input_result.parent_id || null;
        // タイトル
        this.title = input_result.title || null;
        // 開始時刻
        this.start_dt_str = input_result.start;
        // 終了時刻
        this.end_dt_str = input_result.end || null;
        // ステータス
        this.status_str = input_result.status;
        // depth
        this.depth = -1;    // まだ計算していない
        // 子id群
        this.children = [];

        // 必須項目が未登録
        if (
            (this.id === undefined) ||
            (this.start_dt_str === undefined) ||
            (this.status_str === undefined)
        ) {
            throw new Error('Mandatory item not entered.');
        }
        // statusが想定外
        if (!Object.keys(cv.exec_status).includes(this.status_str)) {
            throw new Error('Invalid Status value.');
        }
        
        // 変換
        this.status = cv.exec_status[this.status_str];
        this.start_dt = new Date(this.start_dt_str);
        this.end_dt = this.end_dt_str ? new Date(this.end_dt_str) : null;
    }

    add_child(child_id) {
        this.children.push(child_id);
    }

    get children_num() {
        return this.children.length;
    }

    // 自分自身をほしい形のObject型にして返す
    to_object() {
        return {
            id: this.id,
            title: this.title,
            status_str: this.status_str,
            status: this.status,
            parent_id: this.parent_id,
            start_dt: this.start_dt,
            start_dt_str: this.start_dt_str,
            end_dt: this.end_dt,
            end_dt_str: this.end_dt_str,
            depth: this.depth,
            chidlren_num: this.children_num,
        };
    }
}

module.exports.Results = StructuredResults;
