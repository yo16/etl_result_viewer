var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "etl_result_viewer.js",
        libraryTarget: "umd"
    }
}
