/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		// 'eslint:recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		// "prettier",
		'react',
		'jsx-a11y',
		// "react-refresh",
		'simple-import-sort',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	rules: {
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_' },
		],
		'@typescript-eslint/no-misused-promises': [
			2,
			{
				checksVoidReturn: { attributes: false },
			},
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				tabWidth: 4,
				useTabs: true,
				semi: true,
				singleQuote: true,
				jsxSingleQuote: true,
				quoteProps: 'as-needed',
				trailingComma: 'all',
				bracketSpacing: true,
				bracketSameLine: true,
				arrowParens: 'always',
				endOfLine: 'lf',
				singleAttributePerLine: false,
			},
		],
		'react/self-closing-comp': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/no-unknown-property': 'error',
		'jsx-a11y/alt-text': [
			'warn',
			{
				elements: ['img'],
				img: ['Image'],
			},
		],
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: [
				'.ts',
				'.tsx',
				'.d.ts',
			],
		},
	},
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'node_modules',
		'src/components/ui/*.ts',
		'src/components/ui/*.tsx',
	],
};
