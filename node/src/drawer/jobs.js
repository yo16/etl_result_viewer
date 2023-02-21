`use strict`
/*
ジョブと関連要素の描画
*/
const cv = require('../common_value');

// ジョブを描画
function _draw_jobs(results) {
    draw_on_datetime(d3.select('#'+cv.id.DATETIME_AREA), results);
    draw_on_jobname(d3.select('#'+cv.id.JOBNAME_AREA), results);
    draw_on_result(d3.select('#'+cv.id.RESULT_AREA), results);
}

// datetimeの部分の描画
function draw_on_datetime(parent_svg, results) {
    // resultsのmin/maxを"時"で丸めた日時を取得
    let scale_min_dt = new Date(
        results.scale.min_dt.getFullYear(),
        results.scale.min_dt.getMonth(),
        results.scale.min_dt.getDate(),
        results.scale.min_dt.getHours()
    );
    let scale_max_dt = new Date(
        results.scale.max_dt.getFullYear(),
        results.scale.max_dt.getMonth(),
        results.scale.max_dt.getDate(),
        results.scale.max_dt.getHours()+1
    );
    
    // x=0から、size.DATETIME_HOUR_BAR_DISTANCEごとに縦線を引く
    // hour=0のときはy=0から、それ以外のときはy=size.DATETIME_HOUR_BAR_STARTから
    for (
        let cur_dt = scale_min_dt, i = 0;
        cur_dt <= scale_max_dt;
        cur_dt.setHours(cur_dt.getHours()+1), i++
    ) {
        // 裏に描きたいため、insertする
        // 時刻の過去から並べたかったが、描画に影響がないのでスルーする。
        let x_pos = i * cv.size.DATETIME_HOUR_BAR_DISTANCE;
        parent_svg
            .insert('line', ':first-child')
            .attr('x1', x_pos)
            .attr('x2', x_pos)
            .attr('y1', (cur_dt.getHours()==0) ? 0: cv.size.DATETIME_HOUR_BAR_START)
            .attr('y2', cv.pos.datetime_area.HEIGHT)
            .attr('class', 'datetime_bar')
        ;
        
        // 年月日
        if (cur_dt.getHours() == 0) {
            parent_svg
                .append('text')
                .text(
                    cur_dt.getFullYear() + '/' +
                    (cur_dt.getMonth()+1) + '/' +
                    cur_dt.getDate()
                )
                .attr('x', x_pos + cv.size.DATETIME_TEXT_PADDING_LEFT)
                .attr('y', cv.size.DATETIME_YMD_POS_Y)
                .attr('class', 'datetime_text')
            ;
        }
        // 時刻
        parent_svg
            .append('text')
            .text(cur_dt.getHours())
            .attr('x', x_pos + cv.size.DATETIME_TEXT_PADDING_LEFT)
            .attr('y', cv.size.DATETIME_HOUR_POS_Y)
            .attr('class', 'datetime_text')
        ;
    }
}

// ジョブ名の部分の描画
function draw_on_jobname(parent_svg, results) {
}

// 結果の部分の描画
function draw_on_result(parent_svg, results) {
}


module.exports.draw_jobs = _draw_jobs;
