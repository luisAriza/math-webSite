const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "js/bundle.js",
  },
  devServer: {
    port: 5000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/views/index.pug"),
      filename: "../index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style/main.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /.pug$/i,
        loader: "@webdiscus/pug-loader",
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/",
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
};
