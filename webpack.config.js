module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  devServer: {
    port: 5000,
  },
  
};
