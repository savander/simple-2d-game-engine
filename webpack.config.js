const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    entry: {
        app: "./src/App.ts",
    },

    devtool: "inline-source-map",

    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};