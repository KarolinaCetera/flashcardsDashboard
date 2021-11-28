// import path from "path";
// const { Configuration } = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin") ;
// const ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } =  require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//

import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: Configuration = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
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
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader",
                    {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }],
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
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
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
    ],
};

export default config;
