`use strict`
/*
etl_result_viewer
Copyright (c) 2023 yo16
Released under the MIT license.
*/

// SVG全体
const SVG_WIDTH = 700;
const SVG_HEIGHT = 400;
const PADDING = [10, 10, 10, 10];   // top, right, bottom, left
const TIME_LINE_HEIGHT = 100;
const PROCESS_NAME_COLUMN_WIDTH = 200;

// ジョブ
// １時間の幅
const HOUR_WIDTH = 100;
// 0時以外の開始位置
const HOUR_BAR_START = TIME_LINE_HEIGHT-60;

class EtlResult {
    constructor(dom_id)
    {
        this.dom_id = dom_id;
    }

    // データを元に描画
    data(original_data)
    {
        // トップのSVG
        let svg = d3.select(this.dom_id)
            .append('svg')
            .attr('width', SVG_WIDTH)
            .attr('height', SVG_HEIGHT)
        ;

        // 背景を描画
        let layer_frame = svg.append('g').attr('id', 'g_frame');
        this.draw_background(layer_frame);

        // データを描画
        let layer_time_bar = svg.append('g').attr('id', 'g_time_bar');
        let layer_date_text = svg.append('g').attr('id', 'g_date_text');
        this.draw_data(layer_time_bar, layer_date_text, original_data);

        // 位置の入れ替え
        let move_to_top = (e) => e.node().parentNode.insertBefore(e.node(), null);
        move_to_top(layer_frame);
        move_to_top(layer_date_text);
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
            .attr('fill', '#EEEEEE')
            .attr('opacity', '70%')
        ;
        // タイムライン
        svg
            .append('rect')
            .attr('class', 'rect_top')
            .attr('x', PADDING[3]+PROCESS_NAME_COLUMN_WIDTH)
            .attr('y', PADDING[0])
            .attr('width', SVG_WIDTH - (PADDING[3]+PROCESS_NAME_COLUMN_WIDTH+PADDING[1]))
            .attr('height', TIME_LINE_HEIGHT)
            .attr('fill', '#EEEEEE')
            .attr('opacity', '70%')
        ;
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

    // データを描画
    draw_data(svg_bar, svg_text, original_data)
    {
        // データの期間を取得
        let min_dt = null, max_dt = null;
        for (let i=0; i<original_data.length; i++) {
            let s = new Date(original_data[i].start);
            let e = new Date(original_data[i].end);
            if (i===0) {
                min_dt = s;
                max_dt = e;
                continue;
            }

            if (s < min_dt) {min_dt = s;}
            if (max_dt < e) {max_dt = e;}
        }
        // 
        this.draw_time_line(svg_bar, svg_text, min_dt, max_dt);
    }

    // タイムラインを描画
    draw_time_line(svg_bar, svg_text, min_dt, max_dt)
    {
        function draw_time_bar1(svg, x, y)
        {
            svg
                .append('line')
                .attr('x1', x)
                .attr('x2', x)
                .attr('y1', y)
                .attr('y2', SVG_HEIGHT) // はみ出る分はどうせ見えなくなるから計算しない
                .attr('stroke-width', 1)
                .attr('stroke', '#666')
            ;
        }

        // 時に丸める
        min_dt.setMinutes(0);min_dt.setSeconds(0);min_dt.setMilliseconds(0);
        max_dt.setMinutes(0);max_dt.setSeconds(0);max_dt.setMilliseconds(0);
        max_dt.setHours(max_dt.getHours()+1);
        // 時間の差
        let diff_hours = (max_dt.getTime() - min_dt.getTime())/(60*60*1000);

        // 縦線を描画
        let tf = svg_bar
            .append('g')
            .attr(
                'transform',
                'translate('+(PADDING[3]+PROCESS_NAME_COLUMN_WIDTH)+','+PADDING[0]+')'
            )
        ;
        for (let i=0; i<diff_hours; i++) {
            draw_time_bar1(tf, HOUR_WIDTH*i)
        }

    }
}
