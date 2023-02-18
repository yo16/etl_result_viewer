`use strict`
/*
日時エリアの描画
*/
const cv = require('../common_value.js');

// メイン
function draw_main(svg, min_dt, max_dt) {
    draw_static_rect(svg);
}

// 動かない四角
function draw_static_rect(svg_top) {
    svg = svg_top
        .append('svg')
        .attr('id', 'svg_date')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 200)
        .attr('height', 100)
    ;

    svg
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 180)
        .attr('height', 80)
        .attr('fill', '#f00')
    ;
}

module.exports = {
    draw_date_area: draw_main
};

