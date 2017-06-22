---
title: webpack
abbrlink: b9f20a20
date: 2017-04-06 14:57:30
tags:
---

## 3.0
...

## hot module replacement
主要是依赖两个中间件
```js
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
```

#### 第一个中间件
webpackDevMiddleware 需要设置output下的publicPath的相对路径，表示从内存中哪个路径去存放和检索静态路径
其余的output可以不写，因为走的是纯内存

服务端：
```js
const compiler = webpack(conf)
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: compiler.options.output.publicPath,
  noInfo: true,
  quiet: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    children: false
  }
})
app.use(devMiddleware)
```

#### 第二个中间件
webpackHotMiddleware 会在那个路劲生成热更新的事件流服务，且访问的页面会自动与这个路径通过EventSource进行通讯
在entry文件里添加：

```js
entry: {
  app : ['webpack-hot-middleware/client', path.join(url, 'app.js')]
}
```

添加插件项：
```js
plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(), // 出错只打印错误信息，不重新加载页面
]
```

服务端：
```js
const hotMiddleware = webpackHotMiddleware(compiler, {
  log: () => {},
  path: '/__webpack_hmr'
})
app.use(hotMiddleware)
```

## proxy
const httpProxyMiddleware = require('http-proxy-middleware')


https://github.com/eyasliu/blog/issues/8
