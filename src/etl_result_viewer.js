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
        // フォルダ
        svg
            .append('defs')
            .append('path')
            .attr('id', 'folder')
            .attr('d', 'M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z')
            .attr('transform', 'scale(0.025)')
            .attr('fill', '#999')
        ;
        // フォルダオープン
        svg
            .append('defs')
            .append('path')
            .attr('id', 'folder-open')
            .attr('d', 'M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H64c-35.35 0-64-28.66-64-64V96c0-35.34 28.65-64 64-64h117.5c16.97 0 33.25 6.742 45.26 18.75L275.9 96H416c35.35 0 64 28.66 64 64v32h-48V160c0-8.824-7.178-16-16-16H256L192.8 84.69C189.8 81.66 185.8 80 181.5 80H64C55.18 80 48 87.18 48 96v288l71.16-142.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z')
            .attr('transform', 'scale(0.025)')
            .attr('fill', '#999')
        ;
        // 歯車
        svg
            .append('defs')
            .append('path')
            .attr('id', 'gear')
            .attr('d', 'M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z')
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
        // 自分のプロパティに親である旨を設定
        let set_depth = (d) => {
            Object.keys(data).forEach( k => {
                if (data[k].parent_id === d.id ) {
                    d['is_parent'] = 1;
                    data[k]['depth'] = d.depth + 1;
                    set_depth(data[k]);
                }
            })
        };
        for ( let i=0; i<top_key.length; i++ ) {
            set_depth(data[top_key[i]]);
        }

        // 線

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
            let icon_id = d.is_parent ? '#folder': '#gear';
            cur_g
                .append('use')
                .attr('xlink:href', icon_id)
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
