import prettier from 'prettier'

/**@type{prettier.Config} */
export default {
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	useTabs: true,
	tabWidth: 4,
	endOfLine: 'lf',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-packagejson'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	]
}
