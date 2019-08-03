const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


const publicDir = path.join(__dirname, '..', 'public');
const assetsDir = path.resolve(__dirname, '..', 'src');

module.exports = {
  mode: 'development',
  entry: path.resolve(assetsDir, 'js/index.js'),
  output: {
    path: publicDir,
    filename: 'js/[name].[hash].js',
    sourceMapFilename: '[file].map',
    chunkFilename: 'js/[name].[hash].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(bmp|gif|jpe?g|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[name].[hash:8].[ext]',
            outputPath: 'images'
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: publicDir,
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(assetsDir, 'index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: false,
        conservativeCollapse: false
      },
      chunksSortMode: 'none'
    }),
    // @ts-ignore
    new ProgressBarPlugin({
      width: 100
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  stats: 'errors-only',
  devtool: 'inline-source-map'
};
