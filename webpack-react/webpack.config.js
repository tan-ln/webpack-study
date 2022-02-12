const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'webpack - react'
    })
  ]
}