const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const terserWebpackPlugin = require("terser-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), new terserWebpackPlugin(), new htmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].[contentHash].css'
    }), new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    // style-loader
                    MiniCssExtractPlugin.loader,
                    // css-loader
                    {
                        loader: 'css-loader'
                    },
                    { loader: 'sass-loader' }
                    // // sass-loader
                    // { loader: 'sass-loader' }
                ]
            }
        ]
    }
})