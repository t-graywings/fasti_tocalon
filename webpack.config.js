const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
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