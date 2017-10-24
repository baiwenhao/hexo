---
title: node
abbrlink: 254d477b
date: 2017-02-07 15:01:31
---

## io
1. 斐波那契数列

## fs
.statSync 读取文件信息
.openSync 打开文件
.readFileSync('../dist/manifest.json', 'utf8', (err, data)) 读取指定文件
.readdirSync(path) 同步读取目录下所有文件返回数组
.mkdir 创建文件
.rmdir 删除文件
.statSync(dir) 返回文本信息 (是否目录.isDirectory()) (文件是否存在.isFile())
.existsSync(path) 检测文件路径是否存在
.createReadStream(zip) 读取文件
.unlink('bb.txt', callback) 删除文件,必须判断存在existsSync
.rename(old, new, callback) 移动并修改名字
.createWriteStream(fileName) // ?

## path
```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
'/foo/bar/baz/asdf'

path.normalize('/foo/bar//baz/asdf/quux/..')
'/foo/bar/baz/asdf'

path.resolve(__dirname, '../../')
```

参考:
http://wiki.jikexueyuan.com/project/nodejs/path.html
http://www.jianshu.com/p/d2c96d295d48

## url
url.parse()

## process
```
PORT=8888 node app.js // 当前生效
export PORT=8888 // 永久生效
process.env.PORT // 获取node进程携带的变量
process.stdout.write('打印')
process.cwd() 路径

```

## module exports and exports
1) module.exports 初始值为一个空对象 {}
2) exports 是指向的 module.exports 的引用
3) require() 返回的是 module.exports 而不是 exports

![logo](node/1.png)

## package
```
multer ?
https://github.com/pillarjs/multiparty

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

// to do
http://ourjs.com/detail/56162a63e3312b046d27f53e

webpack 
http://crossingmay.com/2016/05/28/webpackshim/
```

## hash
计算文件哈希值，需要使用crypto模块中的Hash类。Hash类是一个可读写的Stream流，要计算文件的哈希值首先要读取文件并创建一个Stream。在Node.js中，操作文件使用的fs模块。以下是一个计算文件MD5值的示例

```js
var crypto = require('crypto')
var fs = require('fs')

//从文件创建一个可读流
var stream = fs.createReadStream('./mindpush.apk')
var fsHash = crypto.createHash('md5')

stream.on('data', function(d) {
    fsHash.update(d)
})

stream.on('end', function() {
    var md5 = fsHash.digest('hex')
    console.log("文件的MD5是：%s", md5)
})
```

在上面的示例中，基于流事件监听创建并更新文件哈希流。hash.update方法，默认传入数据类型为Buffer。使用fs模块的fs.readFile或fs.readFileSync方法，可以从文件读取一个文件的Buffer。因此，以上代码可以简化为

```js
var crypto = require('crypto')
var fs = require('fs')

//读取一个Buffer
var buffer = fs.readFileSync('./mindpush.apk')
var fsHash = crypto.createHash('md5')

fsHash.update(buffer)
var md5 = fsHash.digest('hex')
console.log("文件的MD5是：%s", md5)
```

Hash类除可以计算文件MD5值外，还可用于计算文件的'sha1'、'sha256'、'sha512'等值，使用时修改crypto.createHash('md5')方法的传入参数即可
// https://itbilu.com/nodejs/npm/Nk-6MeQ9.html

## pm2
http://pm2.keymetrics.io/
启动参数
--watch 监听变化自动重启
-i --instances 启动多少个实例，用于负载均衡
-n --name 应用名称
-o --output <path> 标准输出日志文件的路径。
-e --error <path> 错误输出日志文件的路径

重启
pm2 restart appjs

停止
pm2 stop app_name | app_id

查看进程配置信息
pm2 describe 0

配置信息
{
  "name"        : "fis-receiver",  // 应用名称
  "script"      : "./bin/www",  // 实际启动脚本
  "cwd"         : "./",  // 当前工作路径
  "watch": [  // 监控变化的目录，一旦变化，自动重启
    "bin",
    "routers"
  ],
  "ignore_watch" : [  // 从监控目录中排除
    "node_modules",
    "logs",
    "public"
  ],
  "watch_options": {
    "followSymlinks": false
  },
  "error_file" : "./logs/app-err.log",  // 错误日志路径
  "out_file"   : "./logs/app-out.log",  // 普通日志路径
  "env": {
      "NODE_ENV": "production"  // 环境参数，当前指定为生产环境
  }
}

环境配置
"env": {
  "NODE_ENV": "production",
  "REMOTE_ADDR": "http://www.example.com/"
},
"env_dev": {
  "NODE_ENV": "development",
  "REMOTE_ADDR": "http://wdev.example.com/"
},
"env_test": {
  "NODE_ENV": "test",
  "REMOTE_ADDR": "http://wtest.example.com/"
}

启动指明环境
pm2 start app.js --env dev

监控
pm2 monit

内存使用超过上限自动重启
pm2 start app.js --max-memory-restart 20M

pm2编程接口
http://pm2.keymetrics.io/docs/usage/pm2-api/

参考
http://www.cnblogs.com/chyingp/p/pm2-documentation.html


