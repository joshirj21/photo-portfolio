const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new htmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [
                // style-loader
                { loader: 'style-loader' },
                // css-loader
                {
                    loader: 'css-loader'
                },
                { loader: 'sass-loader' }
                // // sass-loader
                // { loader: 'sass-loader' }
            ]
        }]
    }
})

