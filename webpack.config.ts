const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");

module.exports = {
	mode: "development",
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	devtool: "eval-cheap-source-map",
	entry: {
		index: path.join(__dirname, "src/index.tsx"),
	},
	output: {
		publicPath: "",
		path: path.resolve(__dirname, "prod"),
		filename: "[name].[hash].bundle.js", //
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].scss",
			chunkFilename: "[id].[contenthash].scss",
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
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: "@teamsupercell/typings-for-css-modules-loader",
						options: {
							formatter: "prettier",
							verifyOnly: process.env.NODE_ENV === "production",
						},
					},
					{
						loader: "style-loader",
						options: {
							attributes: { id: "oaStyles" },
							injectType: "singletonStyleTag",
						},
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[name]__[local]___[hash:base64:6]",
							},
						},
					},
					"sass-loader",
				],
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
	devServer: {
		contentBase: path.join(__dirname, "prod"),
		port: 3000,
		hot: true,
		historyApiFallback: true,
	},
};
