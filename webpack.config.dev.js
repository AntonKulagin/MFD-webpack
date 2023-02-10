const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 3300,
        hot: true,
        open: true,
    },
});