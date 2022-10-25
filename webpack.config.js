const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/i,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  watch: true,
  watchOptions: {
    ignored: '**/node_modules/',
  },
  target: 'web',
  node: {
    global: true,
},
  plugins: [
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        proxy: 'http://climate.test'
      })
  ]
};

module.exports = config;