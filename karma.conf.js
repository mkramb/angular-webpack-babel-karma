module.exports = function(config) {

  config.set({

    frameworks: [
      'mocha',
      'chai',
      'sinon'
    ],
    plugins: [
      'karma-chai',
      'karma-sinon',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ],

    files: [
      'src/test.js'
    ],
    preprocessors: {
      'src/test.js': ['webpack', 'sourcemap']
    },

    reporters: ['mocha'],
    browsers: ['Chrome'],
    singleRun: true,

    webpack: {
      entry: {},
      output: {},
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.css$/,
          loader: 'null'
        },{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },{
          test: /\.html$/,
          loader: 'raw'
        }]
      }
    },
    webpackServer: {
      noInfo: true
    }

  });

};
