`use strict`
/*
背景部分の描画
*/
const date_area = require('./date_area.js');

function _draw_background(svg) {
    // 全体を描画

    // 日時エリア を描画
    date_area.draw_date_area(svg, 1, 2);

    // ジョブ名エリア を描画

    // 結果エリア を描画
}

module.exports.draw_background = _draw_background;
