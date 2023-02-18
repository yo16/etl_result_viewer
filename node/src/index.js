`use strict`
/*
etl_result_viewer
Copyright (c) 2023 yo16
Released under the MIT license.
*/

const bg = require('./background');
const cv = require('./common_value.js');


// 描画メイン
function main(dom_id, data) {
    console.log({dom_id});
    console.log({data});

    // パース

    // 背景を描画
    const svg = d3.select(dom_id)
        .append('svg')
        .attr('width', cv.SVG_WIDTH)
        .attr('height', cv.SVG_HEIGHT)
    ;
    bg.draw_background(svg);

    // エンティティを描画

}

module.exports.etl_result_viewer = main;

