const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const distFolder = path.resolve(__dirname, "dist");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./script.js",
    output: {
        filename: "[name].[contenthash].js",
        path: distFolder,
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public/favicon.png"),
                    to: distFolder,
                },
                {
                    from: path.resolve(__dirname, "src/assets"),
                    to: distFolder + "/assets",
                },
            ],
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plagins: [require("postcss-preset-env")],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(jpe?g|png|webp|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/icons/[name][ext]",
                },
            },
            {
                test: /\.mp3$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/sounds/[name][ext]",
                },
            },
        ],
    },
};
