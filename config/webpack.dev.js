const {merge} = require("webpack-merge");
const common = require("./webpack.common");
var path = require('path');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        port: 3007,
        contentBase: "../dist",
        open:"firefox",
        // HACK para permitir ver la APP desde otros dispositivos
        //host: '0.0.0.0'        
    },
    target: "web"
};

module.exports = merge(common, devConfig);