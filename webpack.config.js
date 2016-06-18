var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss = require('precss');
var calc = require('postcss-calc');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'app.js'
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },

  devtool: 'source-map',
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    }),
    precss,
    calc()
  ],

  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/app.html',
      inject: 'body'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],

  devServer: {
    contentBase: './dist',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }

};
