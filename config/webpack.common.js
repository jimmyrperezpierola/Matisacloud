const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const { DefinePlugin } = require("webpack");

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/assets/images';
/** @type {import('webpack').Configuration} */

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename:"[name].[contenthash].js",
        assetModuleFilename: 'assets/images/[hash][ext][query]',
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
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
              test: /\.css$/,
          },                   
          {
            test: /\.svg$/, 
            use: 'file-loader?name=[name].[ext]',        
          },          
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'url-loader',
            },
          },          
        //   {
        //       type: "asset",
        //       test: /\.(png|svg|jpg|jpeg|gif)$/i
        //   },
        //   {        
        //       test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,        
        //       type: 'asset/inline',      
        //   },
        ]
    },
    // optimization: {
    //     splitChunks: { chunks: "all" }
    // },    
    resolve: {
        extensions:[".js",".jsx",".json"],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
          }        
    },
    plugins: [ 
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Matisa Cloud Account System",
            template: "./public/index.html",
            //template: path.resolve(__dirname, './src/template.html'),
            //filename: 'index.html',            
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/bundle.[name].[contenthash:8].css',
            chunkFilename: 'static/css/chunk.[name].[contenthash:8].css',            
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //           from: path.resolve(__dirname, "src", "../../src/assets/images"),
        //           to: "../public/assets/images"
        //         }
        //       ]
        // }),
    ],
};