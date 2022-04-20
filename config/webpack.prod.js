'use strict';

const path = require("path");
const { merge } = require('webpack-merge')
const webpack = require("webpack");
const baseConfig = require('./webpack.config.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 速度分析 -- 分析loader和plugin
// const swp = new SpeedMeasureWebpackPlugin()
// swp.wrap()

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',
  optimization: {
    // 代码分割
    splitChunks: {
      automaticNameDelimiter: '~', // 分隔符
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2
        },
        varletUI: {
          name: 'varletUI',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@varlet)[\\/]/,
          priority: 30 // 优先级
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        // 开启多进程并行压缩
        parallel: true,
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 3
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 体积分析
    new BundleAnalyzerPlugin(),
    // 打包错误抛出
    function() {
      // webpack 3.x 写法
      // this.plugins.tap("done")
      this.hooks.done.tap('done', (stats) => {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('-watch') === -1) {
          console.log('build error')
          process.exit(1)
        }
      })
    },
    // 预加载部分模块资源
    new webpack.DllReferencePlugin({
      manifest: require('../build/library/library.json')
    }),
    // 二次构建缓存（webpack5.x 不支持）
    // new HardSourceWebpackPlugin()
    // 提取css
    new MiniCssExtractPlugin({
      filename: '[name]_[contentHash].css'
    })
  ],
  // stats: 'errors-only'
})