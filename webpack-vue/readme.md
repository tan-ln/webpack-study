# webpack 构建 vue

## vue-loader
```js
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      }
    ]
  },
```
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
    
plugins:    
    new VueLoaderPlugin()

```
