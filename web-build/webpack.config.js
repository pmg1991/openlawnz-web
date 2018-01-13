var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');

var src = path.resolve(__dirname, 'src');
var out = path.resolve(__dirname, 'public');

var config = {
	entry: src + '/jsx/index.jsx',
	output: {
		path: out + '/js',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test : /\.jsx?/,
				loader : 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react", "react-hmre"]
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=1024'
			},
			{
				test: /\.(png|jpg)$/, 
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: src + '/templates/index.html'
		})
	],
	devServer: {
		contentBase: out,
		compress: true,
		port: 9000,
		historyApiFallback: true
	}
};

module.exports = config;
