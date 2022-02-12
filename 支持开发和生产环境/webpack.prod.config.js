const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const WebpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const dist_dir = 'dist_prod'

module.exports = WebpackMerge(baseConfig, {
  output: {
    path: path.resolve(__dirname, dist_dir)
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'prod_env'
    })
  ]
})