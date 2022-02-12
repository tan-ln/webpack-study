# 热更新
```json
  "scripts": {
    "build": "webpack --mode development",
    "start": "webpack-dev-server --mode development"
  },
```
```js
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'hot module replacement'
    })
  ]
```

## 使用 node 启动
// dev-server.js
