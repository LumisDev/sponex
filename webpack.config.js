import webpack from 'webpack'
import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

/** @type{webpack.Configuration} */
export default {
	entry: path.join(process.cwd(), 'src/app.js'),
	output: {
		path: path.join(process.cwd(), 'dist'),
		filename: 'app.js',
		iife: false
	},
	optimization: {
		minimize: false
	},
	resolve: {
		alias: {
			svelte: path.join(process.cwd(), 'node_modules/svelte/src/runtime')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
		conditionNames: ['svelte', 'browser', 'import']
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: 'svelte-loader'
			},
			{
				test: /\.js$/,
				use: 'swc-loader'
			},
			{
				// required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
				test: /node_modules\/svelte\/.*\.mjs$/,
				use: 'swc-loader',
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.pcss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(process.cwd(), 'index.html'),
			minify: false
		}),
		new MiniCssExtractPlugin({
			filename: 'app.css',
			ignoreOrder: false
		})
	]
}
