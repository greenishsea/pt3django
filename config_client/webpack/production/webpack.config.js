const webpack = require('webpack');
const path = require('path');
const glob = require("glob");
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSASS = new ExtractTextPlugin('[name]-[hash].css');

module.exports = {
//   entry: glob.sync("./client/src/js/entry.js"),
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
      main: './client/src/js/entry'
  },
  output: {
    // path: path.resolve('./assets/bundles/'), 
    path: path.resolve('./assets/dist/'), 
    filename: '[name]-[hash].js',
  },
  plugins: [
    ExtractSASS,
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        },
    }),
    //tells webpack where to store data about your bundles.
    // new BundleTracker({filename: './webpack-stats.json'}), 
    new BundleTracker({filename: './webpack-stats-prod.json'}), 
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[hash].js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015',"stage-2"]
        }
      },
      {
        loaders: [ 'json' ],
        exclude: /node_modules/,
        test: /\.json/
      },
      {
        test: /\.scss$/i,
        loader: ExtractSASS.extract(['css', 'sass'])
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'] 
  }
};
