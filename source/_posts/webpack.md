---
title: webpack
abbrlink: b9f20a20
date: 2017-04-06 14:57:30
tags:
---

## proxy
const httpProxyMiddleware = require('http-proxy-middleware')

https://github.com/Klathmon/imagemin-webpack-plugin // 压缩图片
https://github.com/eyasliu/blog/issues/8

笔记
http://www.css88.com/doc/webpack/concepts/entry-points/

## 文件指纹
hash 和整个项目的构建相关，只要项目文件有修改，整个项目的构建的 hash 值就会更改

chunkhash 和wekpack 打包的 chunk 有关，不同的 entry 会生成不同的chunkhash 值（js）

contenthash 根据文件内容来定义 hash，文件内容不变，则 contenthash 不变（css）


## 动态配置 publicPath
入口引入即可，一步js文件就修改了
```js
window.static_url = 'https://www.a.com/project/' // 不要缺少斜杠
console.log('--- publicPath url ---')
console.log(window.static_url)
if (window.static_url) __webpack_public_path__ = window.static_url // eslint-disable-line
```

## Copy tempalte for debug
```js
const CopyPlugin = require('copy-webpack-plugin')
// "@vue/cli-service": "4.4.4", 下依赖了 copy-webpack-plugin
configureWebpack: {
  // provide the app's title in webpack's name field, so that
  // it can be accessed in index.html to inject the correct title.
  name: name,
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [new CopyPlugin([{ from: resolve('build/main.html') }])]
},

<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
    <meta name=viewport content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <link rel=icon href=/favicon.ico> <title>debug</title>
  </head>

  <body>
    <div id=app></div>
    <script src=//localhost:9528/static/js/chunk-vendors.js></script>
    <script src=//localhost:9528/static/js/app.js></script>
  </body>
</html>
```
