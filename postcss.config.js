import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssImportExtGlob from 'postcss-import-ext-glob'

export default {
	plugins: [
		postcssMixins(),
		postcssSimpleVars(),
		postcssImport(),
		postcssImportExtGlob(),
		postcssPresetEnv({
			stage: 0,
			features: {
				'nesting-rules': true,
				'cascade-layers': true,
				'oklab-function': true,
				'system-ui-font-family': true,
				'custom-selectors': true,
				'is-pseudo-class': true
			}
		})
	]
}
