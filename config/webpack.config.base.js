'use strict'

const path = require("path");
const utils = require('./utils')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');

module.exports = {
  entry: "/src/main.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:8].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'assets': utils.resolve('assets'),
      'pages': utils.resolve('src/pages'),
      'static': utils.resolve('static'),
      'components': utils.resolve('src/components')
    },
    // modules: [
    //   // 减少搜索层级
    //   path.resolve(__dirname, './node_modules')
    // ]
  },
  module: { 
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/,  use: 'babel-loader?cacheDirectory=true' },
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.s[c|a]ss$/,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpeg|jpg|gif|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'img/[name]_[hash].[ext]',
            limit: 1024
          }
        }, {
          loader: 'image-webpack-loader',
          options: {
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    // 构建信息显示
    new FriendlyErrorsWebpackPlugin(),
  ],
}
