// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool:'source-map', 
  entry: {
    bundle: './src/main.js',
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/public/'),
    filename: 'app.js',
  },
  devServer: {
    host: '127.0.0.1',
    port: 8000,
    contentBase: path.join(__dirname, 'public/'),
    compress: true,
    historyApiFallback: true,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: 'all',
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: { warnings: false },
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: { comments: false },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { modudules: false }]],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),
      verbrose: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
