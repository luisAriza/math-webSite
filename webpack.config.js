const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.join(__dirname, "build/"),
    filename: "bundle.js",
  },
  devServer: {
    port: 5000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/views/index.pug"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "stylesheet.main.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /.pug$/,
        loader: "@webdiscus/pug-loader",
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg)$/i,
      },
    ],
  },
};
