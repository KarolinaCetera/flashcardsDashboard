const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");

module.exports = {
	mode: "production",
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	entry: {
		index: "./src/index.tsx",
	},
	output: {
		publicPath: "",
		path: path.resolve(__dirname, "prod"),
		filename: "[name].[contenthash].bundle.js",
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[name].[contenthash].css",
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "./index.html"),
		}),
		new ImageminPlugin({
			pngquant: { quality: [0.5, 0.5] },
			plugins: [imageminMozjpeg({ quality: 50 })],
		}),
	],
	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],
		moduleIds: "deterministic",
		runtimeChunk: "single",
		splitChunks: {
			name: "runtime",
			chunks: "all",
		},
	},

	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: ["file-loader"],
			},
			{
				test: /\.html$/,
				use: [{ loader: "html-loader" }],
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /(node_modules|bower_components|prod)/,
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
		],
	},
};
