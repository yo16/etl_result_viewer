`use strict`
/*
背景部分の描画
*/

const bg = require('./background');
const job = require('./jobs');

module.exports = {
    draw_background: bg.draw_background,
    draw_jobs: job.draw_jobs,
}
