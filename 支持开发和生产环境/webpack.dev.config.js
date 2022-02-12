const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const WebpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const dist_dir = 'dist_dev'

module.exports = WebpackMerge(baseConfig, {
  output: {
    path: path.resolve(__dirname, dist_dir)
  },
  mode: 'development',
  plugins: [
    // 清理 dist 目录
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'dev_env'
    })
  ]
})
