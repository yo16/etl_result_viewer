`use strict`
/*
背景を描画する
数字等は描かない
*/
const cv = require('../common_value');

function _draw_background(svg_top) {
    let isDevelopment = process.env.NODE_ENV === 'development';

    // background全体を描画
    let svg_whole = svg_top
        .append('svg')
        .attr('id', cv.id.WHOLE_AREA)
        .attr('x', cv.pos.whole_area.X)
        .attr('y', cv.pos.whole_area.Y)
        .attr('width', cv.pos.whole_area.WIDTH)
        .attr('height', cv.pos.whole_area.HEIGHT)
    ;
    if (isDevelopment) {
        svg_whole
            .append('rect')
            .attr('id', 'debug_whole_rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', cv.pos.whole_area.WIDTH)
            .attr('height', cv.pos.whole_area.HEIGHT)
            .attr('stroke-width', 5)
            .attr('stroke', '#333')
            .attr('fill', 'none')
        ;
    }

    // 日時エリア を描画
    svg_date = svg_whole
        .append('svg')
        .attr('id', cv.id.DATETIME_AREA)
        .attr('x', cv.pos.datetime_area.X)
        .attr('y', cv.pos.datetime_area.Y)
        .attr('width', cv.pos.datetime_area.WIDTH)
        .attr('height', cv.pos.datetime_area.HEIGHT)
    ;
    svg_date
        .append('rect')
        .attr('id', cv.id.DATETIME_AREA_RECT)
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', cv.pos.datetime_area.WIDTH)
        .attr('height', cv.pos.datetime_area.HEIGHT)
    ;
    if (isDevelopment) {
        svg_date
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', cv.pos.datetime_area.WIDTH)
            .attr('height', cv.pos.datetime_area.HEIGHT)
            .attr('stroke-width', 5)
            .attr('stroke', '#f00')
            .attr('fill', 'none')
        ;
    }

    // ジョブ名エリア を描画
    svg_date = svg_whole
        .append('svg')
        .attr('id', cv.id.JOBNAME_AREA)
        .attr('x', cv.pos.jobname_area.X)
        .attr('y', cv.pos.jobname_area.Y)
        .attr('width', cv.pos.jobname_area.WIDTH)
        .attr('height', cv.pos.jobname_area.HEIGHT)
    ;
    if (isDevelopment) {
        svg_date
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', cv.pos.jobname_area.WIDTH)
            .attr('height', cv.pos.jobname_area.HEIGHT)
            .attr('stroke-width', 5)
            .attr('stroke', '#0f0')
            .attr('fill', 'none')
        ;
    }

    // 結果エリア を描画
    svg_date = svg_whole
        .append('svg')
        .attr('id', cv.id.RESULT_AREA)
        .attr('x', cv.pos.result_area.X)
        .attr('y', cv.pos.result_area.Y)
        .attr('width', cv.pos.result_area.WIDTH)
        .attr('height', cv.pos.result_area.HEIGHT)
    ;
    if (isDevelopment) {
        svg_date
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', cv.pos.result_area.WIDTH)
            .attr('height', cv.pos.result_area.HEIGHT)
            .attr('stroke-width', 5)
            .attr('stroke', '#00f')
            .attr('fill', 'none')
        ;
    }


    return svg_whole;
}

module.exports.draw_background = _draw_background
