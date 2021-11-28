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
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			alwaysTryTypes: true,
			project: "tsconfig.json",
		},
	},
	plugins: ["react", "@typescript-eslint", "prettier", "only-warn"],
	rules: {
		"@typescript-eslint/no-var-requires": 0,
		"@typescript-eslint/no-unused-vars": "off",
		"explicit-module-boundary-types": "off",
		"linebreak-style": ["error", "unix"],
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
		"react/display-name": 0,
		"react/jsx-props-no-spreading": "off",
		"react/prop-types": "off",
		"sort-imports": "off",
		"no-undef": "off",
	},
};
