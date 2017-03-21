---
title: node
abbrlink: 254d477b
date: 2017-02-07 15:01:31
---

## fs
fs.readdirSync(path) 同步读取目录下所有文件返回数组
fs.statSync(dir) 返回文本信息 (是否目录.isDirectory())
fs.existsSync(path) 检测文件路径是否存在

## path
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
'/foo/bar/baz/asdf'

path.normalize('/foo/bar//baz/asdf/quux/..')
'/foo/bar/baz/asdf'

提供上述 path 的方法，不过总是以 posix 兼容的方式交互
path.posix()

参考: http://wiki.jikexueyuan.com/project/nodejs/path.html

## process
```
PORT=8888 node app.js // 当前生效
export PORT=8888 // 永久生效
process.env.PORT 获取node进程携带的变量
process.stdout.write('打印')

process.cwd() 路径

```

## package
```
nodejs中的jQuery
https://www.npmjs.com/package/cheerio

request加载一个url源码
https://www.npmjs.com/package/request

异步函数
https://www.npmjs.com/package/async

增删改查json对象
https://www.npmjs.com/package/lei-ns

连接mongoose数据库
https://www.npmjs.com/package/mongoose

处理json对象，可以加密
console.log($.utils.md5('haha'))
https://www.npmjs.com/package/project-core

ProjectCore 
加密字符
加载文件和文件夹
json对象
https://www.npmjs.com/package/project-core

验证码
https://www.npmjs.com/package/captcha.js

webpack 
http://crossingmay.com/2016/05/28/webpackshim/
```
