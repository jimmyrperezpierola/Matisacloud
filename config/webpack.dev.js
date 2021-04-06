const {merge} = require("webpack-merge");
const common = require("./webpack.common");
var path = require('path');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        port: 3007,
        contentBase: "../dist",
        open:"firefox"
    },
    target: "web"
};

module.exports = merge(common, devConfig);