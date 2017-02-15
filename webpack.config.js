var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/main.ts'
  },
  output: {
    filename: './dist/[name].min.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [{
          loader: 'awesome-typescript-loader',
          options: { configFileName:  __dirname + '/tsconfig.json' }
        } , 'angular2-template-loader']
      }
    ]
  }
};
