---
title: http
abbrlink: 97780db2
date: 2017-02-17 13:25:21
tags:
---

## MIME 类型
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types

## http header
1. Content Type
  application/x-www-form-urlencode
  multipart/form-data
  text/plan

## Content-Security-Polic
CSP 值缺失或不当会导致 Web 应用程序容易受到 XSS、点击劫持等的攻击
```js
csp: {
  enable: true,
  policy: {
      'default-src'：'self'
  },
}
```