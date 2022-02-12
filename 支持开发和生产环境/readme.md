开发环境：dev_env: webpack.dev.config.js

生产环境：prod_env: weback.prod.config.js

```json
  "scripts": {
    "dev": "webpack --config webpack.dev.config.js",
    "build": "webpack --config webpack.prod.config.js"
  },
```

```js
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const dist_dir = 'dist_dev'
const dist_dir = 'dist_prod'

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, dist_dir)
  },
  mode: 'production',
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
```

## 重复内容过多，提出 webpack.base.config.js
`webpack-merge`

```js
module.exports = WebpackMerge(baseConfig, {
  mode: '',
  plugins: []
  ...
})
```