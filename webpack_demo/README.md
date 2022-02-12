# Webpack
> root/ `webpack.config.js`

## 配置 webpack
1. mode
> production | development | none
```json
// package.json
{
  "scripts": {
    "build": "webpack --mode development"
  }
}
```
或
```js
// webpack.config.js
module.exports = {
  mode: 'development'
}
```

## 插件版本问题
手动配置安装：`"extract-text-webpack-plugin": "^4.0.0-beta.0",`
