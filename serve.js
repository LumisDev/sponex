import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import path from 'path'
import config from './webpack.config.js'
import { rimraf } from 'rimraf'

await rimraf(path.join(process.cwd(), 'dist'))

const compiler = Webpack({
	mode: 'development',
	devtool: 'hidden-source-map',
	...config
})

const server = new WebpackDevServer(
	{
		static: {
			directory: path.join(process.cwd(), 'public')
		},
		compress: true,
		hot: true,
		historyApiFallback: true,
		port: 9000,
		open: true
	},
	compiler
)

await server.start()
