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
        test: /\.css$/,
        use: [{ loader: 'style-loader' },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            importLoaders: 1,
            modules: false,
          }
        }, {
          loader: "postcss-loader",
          options: {
            plugins: [require('postcss-flexbugs-fixes'), require('autoprefixer')({
              flexbox: 'no-2009',
            })],
            sourceMap: true
          }
        }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            importLoaders: 1,
            modules: false,
          }
        }, {
          loader: "postcss-loader",
          options: {
            plugins: [require('postcss-flexbugs-fixes'), require('autoprefixer')({
              flexbox: 'no-2009',
            })],
            sourceMap: true
          }
        }
        ]
      }, {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }
          ,
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            importLoaders: 3,
          }
        }, {
          loader: 'resolve-url-loader',
          options: {
            keepQuery: true,
            root: path.resolve()
          }
        }, {
          loader: "postcss-loader",
          options: {
            plugins: [require('postcss-flexbugs-fixes'), require('autoprefixer')({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9',
              ],
              flexbox: 'no-2009',
            })],
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          }
        }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'fonts'
          }
        }]
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
