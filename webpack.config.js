const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.join(__dirname, 'dist/'),
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
  ],
  module: {
    rules: [
      {
        test: /.pug$/,
        loader: "@webdiscus/pug-loader",
      },
    ],
  },
};
