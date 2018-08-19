var path = require("path");
// var webpack = require("webpack");

var config = {
  mode: 'development',
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'build')],
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

};

module.exports = config;