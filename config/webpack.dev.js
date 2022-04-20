'use strict';

const webpack = require('webpack');
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'static'),
    // },
    publicPath: '/',
    open: true,
    port: '3000',
  },
})