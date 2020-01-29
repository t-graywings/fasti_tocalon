const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader'
      }]
    }]
  }
}