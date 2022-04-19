const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/app/index.js",
    shapes: "./src/app/modules/shapes.js",
    discounts: "./src/app/modules/discounts.js",
    statistics: "./src/app/modules/statistics.js",
  },
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "js/[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.pug"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/views/shapes.pug"),
      filename: "shapes.html",
      chunks: ["index", "shapes"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/views/discounts.pug"),
      filename: "discounts.html",
      chunks: ["index", "discounts"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/views/statistics.pug"),
      filename: "statistics.html",
      chunks: ["index", "statistics"],
    }),
    new MiniCssExtractPlugin({
      filename: "style/stylesheet.main.css",
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
        type: "asset",
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        generator: {
          filename: "assets/static/[hash][ext][query]",
        },
      },
      {
        type: "asset/resource",
        test: /(-logo.svg)$/i,
        generator: {
          filename: "assets/icons/[name][ext][query]",
        },
      },
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            progressive: true,
          },
          optipng: {
            enabled: true,
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          webp: {
            quality: 75,
          },
        },
      },
    ],
  },
};
