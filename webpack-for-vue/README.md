# Webpack 搭建一个 Vue2.6 环境

使用 webpack 手动搭建 vue 环境

## 准备
- 全局安装 `webpack webpack-cli`
- 项目安装 `yarn add webpack webpack-cli webpack-dev-server -D`
- `yarn add vue@2.6 -S`
- 文件创建

  - `webpack.config.js` webpack 配置文件

  - `index.html` 模板挂载页面

      ```html
      <div id="app"></div>
      ```

  - `src/index.js` 入口文件
  
      ```js
      import Vue from 'vue'
      import App from './App.js'

      new Vue({
        el: '#app',
        render: h => h(App)
      })
      ```

  - `src/App.vue` 根组件

## webpack.config.js

1. 安装 `vue-loader` (必须)、 `html-webpack-plugin` (必须) 、 `vue-template-compiler`
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'product',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    port: 3000
  }
}
```

## 配置 package.json -> script
```json
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack"
  },
```

## yarn start 启动项目自动打开浏览器

## 配置 webpack.config.js

```js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 出口 打包文件
  output: {
    filename: '[name]__bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: 'development',  // production | development | none
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
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(gif|png|)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false               // vue中图片引入为[object Module] 问题
          }
        }]
      }
    ]
  },
  plugins: [
    // 必须
    new VueLoaderPlugin(),
    // 必须
    // html 打包 入口文件
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  // 配置 webpack 服务，默认 http://localhost:8080/
  devServer: {
    port: 3000
  }
}
```

## 其他功能

### sass
- sass-loader node-sass css-loader style-loader vue-style-loader
- webpack.config.js

  ```js
  module: {
    rules: [
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
      }
    ]
  }
  ```

可以使用 sass 语法了
```scss
@import './valiable.scss';
.app {
  &__content {
    background-color: $bg__color;
    &__p {
      font-size: $font__size;
    }
  }
}
```

### 引入图片 file-loader / url-loader
```js
{
  test: /\.(gif|png|ico)$/,
  use: [{
    loader: 'file-loader',
    options: {
      esModule: false               // vue中图片引入为[object Module] 问题
    }
  }]
}
```

## 报错问题

### [webpack-cli] Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.... configuration.module.rules[1].loader should be a non-empty string.

**loader 改为 use**
```js
  module: {
    rules: [
      {
        test: /\.vue$/,
        // loader 改为 use
        // loader: 'vue-loader'
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        // loader 改为 use
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        // loader 改为 use
        use: 'babel-loader'
      }
    ]
  }
```

### [webpack-cli] Error: Cannot find module 'webpack/lib/RuleSet'
** 可能是版本问题，node 版本、vue-cli 版本、webpack 版本 。。。

<!-- 可以直接安装以下包 -->
```json
  "devDependencies": {
    "@babel/core": "^7.17.8",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "vue-loader": "^15.7.2",
    "vue-style-loader": "^4.1.3",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  },
  "dependencies": {
    "vue": "2.6"
  }
```

### vue中图片引入为[object Module]

> `vue` 使用的是 `commonjs` 语法规范，而 `file-loader/url-loader` 使用的 `es module` 语法规范，解决方法是处理图片时不适用 `es module` 的语法

```js
{
  test: /\.(gif|png|)$/,
  use: [{
    loader: 'file-loader',
    options: {
      esModule: false               // vue中图片引入为[object Module] 问题
    }
  }]
}
```
