const path = require('path');
const webpack = require('webpack');
const glob = require("glob");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  devtool: 'source-map',
  entry: {
      vendor: [
        "babel-polyfill",
        "react",
        "react-dom",
        "react-redux",
        "react-router",
        "redux",
        "redux-form",
        "redux-logger",
        "redux-saga",
        "redux-thunk",
        "whatwg-fetch"
      ],
      main: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './client/src/js/entry',
      ]
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, 'assets/bundles'),
    publicPath: 'http://localhost:3000/assets/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },
  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel?cacheDirectory=true,presets[]=es2015,presets[]=stage-2,presets[]=react'],
        exclude: /node_modules/,
        test: /\.js[x]?$/
      },
      {
        loaders: [ 'json' ],
        exclude: /node_modules/,
        test: /\.json/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        },
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[hash].js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //tells webpack where to store data about your bundles.
    new BundleTracker({filename: './webpack-stats.json'}), 
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },

};
