---
title: referer
abbrlink: 9a610f19
date: 2017-02-17 17:49:28
tags:
---

### referer 表示来源网页的url
通过检查请求头referer来判断来源网页的域名
用浏览器直接访问图片是没有referer的
http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.36

```js
const log = str => console.log(str)
const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')
const parseUrl = require('url').parse

function stripHostPort(host) {
  if (host) host = host.split(':')[0]
  return host
}

function getHostName(url) {
  return stripHostPort(parseUrl(url).host)
}

function checkReferer(whiteList) {
  return function(req, res, next) {
    const referer = req.headers.referer || req.headers.referrer
      // 如果没有referer,则直接跳过
    if (!referer) return next()
    const refererHost = getHostName(referer)
      // 如果与当前域名相同则跳过
    if (refererHost === stripHostPort(req.headers.host)) return next()
      // 如果存在于白名单则跳过
    log(refererHost)
    if (whiteList.indexOf(refererHost) !== -1) return next()
      // host不同,返回错误信息
    res.sendFile(path.resolve(__dirname, 'public/2.png'))
  }
}

const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/public')
app.use('/img', checkReferer(['localhost'])) // 允许访问图片的域名
app.use('/img', serveStatic(__dirname + '/public'))

app.get('/', function(req, res, next) {
  res.render('img', {
    username: '图片防盗链'
  })
})

app.listen(3001)
```