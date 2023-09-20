---
title: koa
abbrlink: 6313db75
date: 2017-03-02 10:41:30
tags:
---

##### koa_blog
正在搭建中...

## app.js
```js
const cors = require('koa-cors'); // 跨域
const mount = require('koa-mount')
const serve = require('koa-static')

app.use(mount('/assets', serve(path.join(__dirname, '../assets'))))
app.use(mount('/dist', serve(path.join(__dirname, '../dist'))))
```

##### 参考资料
https://github.com/guo-yu/koa-guide
https://github.com/koajs/koa/wiki
https://www.versioneye.com/nodejs/koa2-demo/0.1.0

## EGG
https://juejin.cn/post/7042163871364153357