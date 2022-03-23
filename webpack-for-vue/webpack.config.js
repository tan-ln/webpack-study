const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]__bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: 'development',   // production | development | none
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(gif|png|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: 'favicon.ico'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    port: 3000
  }
}
