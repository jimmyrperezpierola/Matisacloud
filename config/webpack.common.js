const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
/** @type {import('webpack').Configuration} */
module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename:"[name].[contenthash].js",
        publicPath:""
    },
    module: {
        rules: [
          {
              use:"babel-loader",
              test: /.(js|jsx)$/,
              exclude:/node_modules/,
          },
          {
              use: ["style-loader","css-loader","sass-loader"],
              test: /.(css|sass\scss)$/
          },
          {
            test: /svg-2\.svg$/, 
            use: 'file-loader?name=[name].[ext]',        
          },          
          {
              type: "asset",
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
          }  
        ]
    },
    resolve: {
        extensions:[".js",".jsx",".json"],
    },
    plugins: [ 
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
};