`use strict`
/*
共有値・固定値

位置について
    svg要素のx,yは絶対座標だが、
    svg内のrectなどは、svgに対する相対座標。
    （svg要素に座標値を持たない場合はrectの値が絶対座標になるが
    　このシステムでは、トップを除きsvg要素に座標値を持つこととする）
*/
// 全体のsize
const svg_area_size = [700, 400];

// whole_areaのpadding
const whole_padding = [10, 10, 10, 10];

// whole_area
const whole_width = svg_area_size[0] - whole_padding[1] - whole_padding[3];
const whole_height = svg_area_size[1] - whole_padding[0] - whole_padding[2];

// datetime_area
// jobname_area
const jobname_width = 200;
const datetime_width = whole_width - jobname_width;
const datetime_height = 50;
const jobname_height = whole_height - datetime_height;


module.exports = {
    pos: {
        svg: {
            WIDTH: svg_area_size[0],
            HEIGHT: svg_area_size[1],
        },
        whole_area: {
            X: whole_padding[3],
            Y: whole_padding[0],
            WIDTH: whole_width,
            HEIGHT: whole_height,
        },
        datetime_area: {
            X: jobname_width,
            Y: 0,
            WIDTH: datetime_width,
            HEIGHT: datetime_height,
        },
        jobname_area: {
            X: 0,
            Y: datetime_height,
            WIDTH: jobname_width,
            HEIGHT: jobname_height,
        },
        result_area: {
            X: jobname_width,
            Y: datetime_height,
            WIDTH: datetime_width,
            HEIGHT: jobname_height,
        },
    },
    id: {
        WHOLE_AREA: "etl_result_wholearea",
        DATETIME_AREA: "etl_result_datearea",
        DATETIME_AREA_RECT: "etl_result_datearea_rect",
        JOBNAME_AREA: "etl_result_jobname",
        JOBNAME_AREA_RECT: "etl_result_job_name_rect",
        RESULT_AREA: "etl_result_result",
        RESULT_AREA_RECT: "etl_result_result_rect",
        RESULT_AREA_FILTER: "etl_result_result_filter",
    },
};
