var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app': './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'test',
    filename: '[name].min.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname,
    port: 8080,
    hot: true,
    inline: true,
    stats: 'minimal'
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
]
};
