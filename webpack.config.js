var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var fs = require("fs");

var src = path.resolve(__dirname, "src");
var out = path.resolve(__dirname, "debug");

var config = {
  entry: ["babel-polyfill", src + "/jsx/index.jsx"],
  output: {
    path: out + "/js",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ["url-loader?limit=1024"]
      },
      {
        test: /\.(png|jpg|ico)$/,
        use: ["url-loader?limit=8192"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: ['svg-react-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: src + "/templates/index.html"
    }),
     new FaviconsWebpackPlugin(src +'/img/logo-small.png')
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: { ecma: 8 }
      })
    ]
  },
  devServer: {
    contentBase: out,
    port: 9000,
    historyApiFallback: true
  }
};

module.exports = config;
