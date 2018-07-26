const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.join(__dirname, '/src/client/');
const BUILD_DIR = path.join(__dirname, '/src/client/dist');

const config = {
  entry: path.join(APP_DIR, '/index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:3005',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },
};

module.exports = config;
