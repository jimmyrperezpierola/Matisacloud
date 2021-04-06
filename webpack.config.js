const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
/** @type {import('webpack').Configuration} */ 
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:"[name].[contenthash].js",
    publicPath:""
  },  
  mode: "production",
  module: {
    rules:[
      {
        use: "babel-loader",
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
      },
      {
        use: ["style-loader","css-loader","sass-loader"],
        test: /.(css|sass\scss)$/
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i
      },  
      {
        test: /favicon\.ico$/,
        use: 'file-loader?name=[name].[ext]',
      }            
    ]
  },
  resolve: {
      extensions:[".js",".jsx",".json"],
  },
  devServer: {
    progress: true,  
    // esto para que todas las URLs que fallen (404) devuelvan nuestro index.html
    historyApiFallback: true,

    contentBase:  path.resolve(__dirname, 'dist'),
    open: true,
    // compress: true,
    // para que los errores en consola aparescan en un overlay en el BROWSER
    overlay: false,
    hot: true, 
    port: 5000,        
    inline: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: "./public/index.html", //source html
        favicon: './public/favicon.ico',
        minify: {
          minifyCSS: true,
          minifyJS: true,          
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }      
    })
  ], 
  devtool:'source-map',//para ver en que linea hay errores  
  stats: 'verbose'
};