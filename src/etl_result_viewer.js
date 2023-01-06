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

// 日時関連
// ヘッダー
const TIME_LINE_HEIGHT = 50;
// １時間の幅
const HOUR_WIDTH = 100;
// 0時以外の開始位置
const HOUR_BAR_START = 35;

// プロセス関連
// ヘッダー
const PROCESS_NAME_COLUMN_WIDTH = 200;

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

        // プロセス定義関連のものを描く
        this.draw_process_info(svg, original_data);
    }

    // 日時関連の描画
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
            .attr('stroke', '#CCC')
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
            .attr('fill', '#999')
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

    // プロセス定義関連のものを描く
    draw_process_info(top_svg, original_data)
    {
        // ここでのsvg
        let svg = top_svg
            .append('svg')
            .attr('id', 'svg_process')
            .attr('x', PADDING[3])
            .attr('y', PADDING[0]+TIME_LINE_HEIGHT)
            .attr('width', SVG_WIDTH-(PADDING[1]+PADDING[3]))
            .attr('height', SVG_HEIGHT-(PADDING[0]+TIME_LINE_HEIGHT+PADDING[2]))
        ;
        
        // アイコン
        svg
            .append('defs')
            .append('path')
            .attr('id', 'folder')
            .attr('d', 'M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z')
            .attr('transform', 'scale(0.025)')
            .attr('fill', '#999')
        ;

        // データに階層番号(depth, 0, 1, ...)を付ける
        let data = {};   // idをキーに取り出せるようにする
        for (let i=0; i<original_data.length; i++) {
            console.assert('id' in original_data[i], '"id" is not defined.');
            data[original_data[i].id] = original_data[i];
            if (!('parent_id' in original_data[i])) {
                data[original_data[i].id]['parent_id'] = null;
            }
        }
        let top_key = [];
        Object.keys(data).forEach( k => {
            if (data[k].parent_id === null) {
                data[k]['depth'] = 0;
                top_key.push(data[k].id);
            }
        });
        // 自分が親になっている子に、自分のdepth+1を設定
        let set_depth = (d) => {
            Object.keys(data).forEach( k => {
                if (data[k].parent_id === d.id ) {
                    data[k]['depth'] = d.depth + 1;
                    set_depth(data[k]);
                }
            })
        };
        for ( let i=0; i<top_key.length; i++ ) {
            set_depth(data[top_key[i]]);
        }


        // rect
        svg
            .append('rect')
            .attr('class', 'rect_top')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', PROCESS_NAME_COLUMN_WIDTH)
            .attr('height', SVG_HEIGHT-(PADDING[0]+TIME_LINE_HEIGHT+PADDING[2]))
            .attr('fill', '#EEE')
            .attr('opacity', '70%')
        ;
        // プロセスを描く
        function draw_one_process(svg, d, i)
        {
            let cur_g = svg
                .append('g')
                .attr('class', 'one_process')
            ;
            cur_g
                .append('use')
                .attr('xlink:href', '#folder')
                .attr('x', 25 + d.depth * 20)
                .attr('y', 38 + i * 33)
            ;
            cur_g
                .append('text')
                .text(d.title)
                .attr('x', 45 + d.depth * 20)
                .attr('y', 50 + i * 33)
                .attr('font-size', 12)
                .attr('fill', '#333')
            ;

        }
        Object.keys(data).forEach( (k,i) => {
            draw_one_process(svg, data[k], i)
        });
    }
}
