const path = require('path')
const webpack = require('webpack')

// 预编译部分资源模块
module.exports = {
  entry: {
    library: [
      "vue",
      "vue-router"
    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, "../build/library"),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, "../build/library/[name].json")
    })
  ]
}