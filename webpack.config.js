
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'release'),
		filename: '[name].[hash:5].js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: path.resolve(__dirname, 'release/index.html'),
			__APP_NAME__: '我的应用',
			__DESCRIPTION__: '我的应用程序, webpack, es6',
			__KEYWORD__: '我的应用程序 webpack'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './release'), // 根目录
		open: true, // 自动打开浏览器
		port: 9000, // 端口
		proxy: {
			// "/api/*": {
			// 	target: "http://localhost:8880"
			// }
		}
	}
}