const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 从后往前读
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader', 'less-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'prod_env'
    }),
    new ExtractTextPlugin('style.css')
  ]
}