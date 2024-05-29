import Webpack from 'webpack'
import config from './webpack.config.js'
import { rimraf } from 'rimraf'
import path from 'path'
import * as cp from 'child_process'

if (process.argv[2] === '--help') {
	console.log(`usage: node build.js [--help | --dev]
--help: prints this help message
--dev: builds the project in development mode (with source maps)
    `)
	process.exit(0)
} else {
	await rimraf(path.join(process.cwd(), 'dist'))
	// Defines the compiler. Defaults to production
	const buildSys =
		process.argv[2] === '--dev'
			? Webpack({
					mode: 'development',
					devtool: 'hidden-source-map',
					...config
				})
			: Webpack({ mode: 'production', ...config })

	buildSys.run(async (err, stats) => {
		if (err) {
			console.error(`An error occurred during the build: ${err}`)
			return
		}

		console.log('Build completed successfully.')
		console.log(
			stats.toString({
				chunks: true, // Makes the build much quieter
				colors: true // Shows colors in the console
			})
		)
	})
	await cp.spawn('npx', ['prettier', '--write', '.'], {
		stdio: 'inherit',
		shell: true,
		cwd: process.cwd()
	})
}
