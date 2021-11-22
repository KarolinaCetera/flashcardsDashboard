module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"linebreak-style": ["error", "unix"],
		"react/jsx-props-no-spreading": "off",
		"react/prop-types": "off",
		"react/display-name": 0,
		"explicit-module-boundary-types": "off",
		"max-len": [
			"warn",
			{
				code: 120,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreComments: true,
			},
		],
		"sort-imports": "off",
		"@typescript-eslint/no-var-requires": 0,
		"no-undef": "off",
	},
};
