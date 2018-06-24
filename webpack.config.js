const path = require("path");
 var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",

  devServer: {
    disableHostCheck: true,
    historyApiFallback: true
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {loader: "babel-loader", options: { presets: ['react'] }}
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 100000000
            },
        }, ]
      }
    ]
  }
};
