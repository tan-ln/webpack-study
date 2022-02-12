const path = require('path')

// 生成 html
const HtmlWebpackPugin = require('html-webpack-plugin')
// css 抽离 形成单独的 .css
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  // 入口文件
  // entry: "./src/index.js",
  // 多入口
  entry: {
    index: './src/index.js',
    app: './app.js'
  },
  mode: "development",    // production | development | none
  // 输出目录
  output: {
    // 输出文件名 
    // 防止文件缓存，[入口定义的名称]_[哈希后取6位] ：：：：index_11bf53_bundle.js
    filename: '[name]_[hash:6]_bundle.js',
    path: path.resolve(__dirname, 'output')
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin("styles.css")
  ]
}
