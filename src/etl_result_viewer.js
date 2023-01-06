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
const PROCESS_NAME_COLUMN_WIDTH = 200;

// 日時関連
// ヘッダー
const TIME_LINE_HEIGHT = 50;
// １時間の幅
const HOUR_WIDTH = 100;
// 0時以外の開始位置
const HOUR_BAR_START = 35;

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

        // 日時関連のものを描く
        this.draw_time_line(svg, original_data);
    }

    draw_time_line(top_svg, data)
    {
        // ここでのsvg
        let svg = top_svg
            .append('svg')
            .attr('id', 'svg_date')
            .attr('x', PADDING[3]+PROCESS_NAME_COLUMN_WIDTH)
            .attr('y', PADDING[0])
            .attr('width', SVG_WIDTH-(PADDING[1]+PROCESS_NAME_COLUMN_WIDTH+PADDING[3]))
            .attr('height', SVG_HEIGHT-(PADDING[0]+PADDING[2]))
        ;
        
        // データの期間を取得
        let min_dt = null, max_dt = null;
        for (let i=0; i<data.length; i++) {
            let s = new Date(data[i].start);
            let e = new Date(data[i].end);
            if (i===0) {
                min_dt = s;
                max_dt = e;
                continue;
            }
            if (s < min_dt) {min_dt = s;}
            if (max_dt < e) {max_dt = e;}
        }
        // 時に丸める
        min_dt.setMinutes(0);min_dt.setSeconds(0);min_dt.setMilliseconds(0);
        max_dt.setMinutes(0);max_dt.setSeconds(0);max_dt.setMilliseconds(0);
        max_dt.setHours(max_dt.getHours()+1);
        // 時間の差
        let diff_hours = (max_dt.getTime() - min_dt.getTime())/(60*60*1000);

        let cur_dt = min_dt;
        console.log(cur_dt);
        let dts = [];
        for (let i=0; i<diff_hours; i++) {
            cur_dt.setHours(cur_dt.getHours()+1)
            dts.push(new Date(cur_dt));
        }

        // 縦線
        const timeline_bar_g = svg
            .append('g')
            .attr('class', 'timeline_bar')
            .attr('stroke-width', 1)
            .attr('stroke', '#CCCCCC')
        ;
        for (let i=0; i<dts.length; i++) {
            const x = HOUR_WIDTH*i;
            timeline_bar_g
                .append('line')
                .attr('x1', x+0.5)
                .attr('x2', x+0.5)
                .attr('y1', (dts[i].getHours()===0)?0:HOUR_BAR_START)
                .attr('y2', SVG_HEIGHT-(PADDING[0]+PADDING[2]))
            ;
        }

        // rect
        svg
            .append('rect')
            .attr('class', 'rect_top')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', SVG_WIDTH - (PADDING[3]+PROCESS_NAME_COLUMN_WIDTH+PADDING[1]))
            .attr('height', TIME_LINE_HEIGHT)
            .attr('fill', '#EEE')
            .attr('opacity', '70%')
        ;

        // 文字
        const timeline_text_g = svg
            .append('g')
            .attr('class', 'timeline_text')
            .attr('stroke-width', 1)
            .attr('fill', '#999999')
        ;
        for (let i=0; i<dts.length; i++) {
            const x = HOUR_WIDTH*i;
            if ( dts[i].getHours() === 0 ) {
                // y/m/d
                timeline_text_g
                    .append('text')
                    .text(dts[i].getFullYear()+'/'+(dts[i].getMonth()+1)+'/'+dts[i].getDay())
                    .attr('x', x+5)
                    .attr('y', 18)
                    .attr('font-size', 10)
                ;
            }
            // h
            timeline_text_g
                .append('text')
                .text(dts[i].getHours())
                .attr('x', x+5)
                .attr('y', TIME_LINE_HEIGHT-7)
                .attr('font-size', 10)
            ;
        }

    }


}
