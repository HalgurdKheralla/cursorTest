// @ts-check
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
	{
		ignores: ['node_modules/**', 'dist/**', 'build/**']
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsparser,
			parserOptions: { ecmaFeatures: { jsx: true } },
			sourceType: 'module',
			ecmaVersion: 2022,
		},
		plugins: {
			'@typescript-eslint': /** @type any */ (tseslint),
			react: /** @type any */ (react),
			'react-hooks': /** @type any */ (reactHooks),
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		},
	}
];

export default config;