const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        loader: ['vue-style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'webpack - vue'
    }),
    new VueLoaderPlugin()
  ]
}