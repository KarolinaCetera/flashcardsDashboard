const path = require("path");
const { Configuration, HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const config: typeof Configuration = {
	mode: "development",
	output: {
		publicPath: "/",
	},
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},
			{
				test: /\.css$/,
				include: /(src|node_modules)/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[name]__[local]___[hash:base64:6]",
							},
						},
					},
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: "url-loader",
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
		new HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new ESLintPlugin({
			extensions: ["js", "jsx", "ts", "tsx"],
			emitWarning: false,
			failOnError: false,
		}),
	],
	devtool: "inline-source-map",
	devServer: {
		static: path.join(__dirname, "build"),
		historyApiFallback: true,
		port: 4000,
		open: true,
		hot: true,
	},
};

export default config;
