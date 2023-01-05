`use strict`
/*
etl_result_viewer
Copyright (c) 2023 yo16
Released under the MIT license.
*/

const SVG_WIDTH = 700;
const SVG_HEIGHT = 400;
const PADDING = [10, 10, 10, 10];   // top, right, bottom, left
const TIME_LINE_HEIGHT = 100;
const PROCESS_NAME_COLUMN_WIDTH = 200;

class EtlResult {
    constructor(dom_id)
    {
        this.dom_id = dom_id;
    }

    // データを元に描画
    data(original_data)
    {
        let svg = d3.select(this.dom_id)
            .append('svg')
            .attr('width', SVG_WIDTH)
            .attr('height', SVG_HEIGHT)
        ;

        // 背景を描画
        this.draw_background(svg);
    }

    // 背景を描画
    draw_background(svg)
    {
        // プロセス名列
        svg
            .append('rect')
            .attr('class', 'rect_side')
            .attr('x', PADDING[3])
            .attr('y', PADDING[0] + TIME_LINE_HEIGHT)
            .attr('width', PROCESS_NAME_COLUMN_WIDTH)
            .attr('height', SVG_HEIGHT - (PADDING[0]+TIME_LINE_HEIGHT+PADDING[2]))
            .attr('fill', '#EEEEEE');
        // タイムライン
        svg
            .append('rect')
            .attr('class', 'rect_top')
            .attr('x', PADDING[3]+PROCESS_NAME_COLUMN_WIDTH)
            .attr('y', PADDING[0])
            .attr('width', SVG_WIDTH - (PADDING[3]+PROCESS_NAME_COLUMN_WIDTH+PADDING[1]))
            .attr('height', TIME_LINE_HEIGHT)
            .attr('fill', '#EEEEEE');
        // メインキャンバス
        let svg_filter_shadow = svg
            .append('defs')
            .append('filter')
            .attr('id', 'inbox_shadow')
            .attr('x', '-20%')
            .attr('y', '-20%')
            .attr('width', '140%')
            .attr('height', '140%');
        svg_filter_shadow
            .append('feOffset')
            .attr('dx', '0')
            .attr('dy', '0');
        svg_filter_shadow
            .append('feGaussianBlur')
            .attr('stdDeviation', '5')
            .attr('result', 'offset-blur');
        svg_filter_shadow
            .append('feComposite')
            .attr('operator', 'out')
            .attr('in', 'SourceGraphic');
        svg
            .append('rect')
            .attr('class', 'rect_main_canvas')
            .attr('x', PADDING[3]+PROCESS_NAME_COLUMN_WIDTH)
            .attr('y', PADDING[0]+TIME_LINE_HEIGHT)
            .attr('width', SVG_WIDTH - (PADDING[3]+PROCESS_NAME_COLUMN_WIDTH+PADDING[1]))
            .attr('height', SVG_HEIGHT - (PADDING[0]+TIME_LINE_HEIGHT+PADDING[2]))
            .attr('fill', '#aaa')
            .attr('filter', 'url(#inbox_shadow)');
    }
}
