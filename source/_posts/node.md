---
title: node
abbrlink: 254d477b
date: 2017-02-07 15:01:31
---

## form-data
```js
// 前端发送 formData 请求
const postData = () => {
  const fd = new FormData()
  fd.append('buId', '官网')
  fd.append('occurDate', new Date().getTime())
  const x = new XMLHttpRequest()
  x.open('post', '/downCount')
  x.send(fd)
}

// 服务端解析
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
app.post('/downCount', multipartMiddleware, (req, res) => {
  res.send(req.body)
})

// 服务端发送post 解决跨域

//
// https://stackoverflow.com/questions/27190447/pass-json-to-http-post-request/27190736

```

// 看看
// https://blog.csdn.net/yiyanbuhe/article/details/79105287

http://yijiebuyi.com/blog/90c1381bfe0efb94cf9df932147552be.html


## io
1. 斐波那契数列

## path
```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
'/foo/bar/baz/asdf'

path.normalize('/foo/bar//baz/asdf/quux/..')
'/foo/bar/baz/asdf'

path.resolve(__dirname, '../../')

path.posix 返回POSIX(Mac/Linux)系统的path执行
```
path.basename 获取路径的名称（最后一部分）
path.delimiter 返回当前操作系统多个路径的分隔符
path.dirname 获取路径的父文件夹路径
path.extname 返回文件路径的扩展名
path.isAbsolute 判断是否是绝对路径
path.join 连接两个或多个路径
path.normalize 将路径中的'.'和'..'转化成最终的路径
path.relative 返回一个路径针对另一个路径的相对路径
path.resolve 按照多个路径的值返回最终的路径
path.seq 返回操作系统路径文件夹分隔符
path.win32 返回Windows系统的path执行

参考:
http://nodejs.cn/api/path.html#path_path_posix
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

## querystring
```js
var info = {
  appid: 'wx123',
  scope: 'snsapi_base',
  response_type: 'code'
}
querystring.stringify(info)
```

## momentjs
moment().format('YYYY-MM-DD')
http://momentjs.com/docs/

## gd-gif
nodejs 生成验证码

## process 进程对象
```js
// argv // 以数组形式返回nodejs的执行脚本参数
// platform // 运行的操作系统平台
// version/versions // 当前node的版本号/node及相关宝的版本号
// cwd() 当前工作目录
/*
  返回当前进程的所有命令行参数，返回值是数组
  node scripts/build.js dev
  ['node 命令行路径', '执行文件的路径', 'dev']
 */
import { argv } from 'node:process'
process.argv

/*
  包含用户环境的对象，返回值如下
  {
    NVM_INC: '/Users/a6xsfmd/.nvm/versions/node/v14.17.0/include/node',
    npm_package_engines_npm: '>= 3.0.0',
    npm_package_devDependencies_lint_staged: '^8.2.1',
    MANPATH: '/Users/a6xsfmd/.nvm/versions/node/v14.17.0/share/man:/opt/homebrew/share/man::',
    npm_package_devDependencies_stylelint_config_recommended: '^2.2.0',
    npm_package_scripts_mapi_server: 'mapi server -k d7818d78773a7f22ed789e2cb3b25783',
    TERM_PROGRAM: 'Hyper',
    NODE: '/Users/a6xsfmd/.nvm/versions/node/v14.17.0/bin/node',
    INIT_CWD: '/Users/a6xsfmd/ma_workspace/rtg-rtg-dashboard-parent/client',
    npm_package_devDependencies_typescript: '^3.5.2',
    SHELL: '/bin/sh',
    TERM: 'xterm-256color'
  }
 */

import { env } from 'node:process'
env.foo = 'bar' // window 不区分大小写，important 只允许字符串
process.env

```

## 全局对象
1.global // 类似window对象, 别名是GLOBAL，适合较小应用
2.module.export // exports.company = 'Google' 适合大型应用
```js
console.log(Object.getOwnPropertyNames(global)) // 所有属性
```

## egg render

```js
const data = { name: 'egg', appName: 123 };
ctx.body = await ctx.renderString(html, {
    env: 'local',
    maUserName: 'admin',
    permissions: "['role:user', 'user:004']"
},  {
  viewEngine: 'nunjucks',
})
// render(name, locals) 渲染模板文件, 并赋值给 ctx.body
// renderView(name, locals) 渲染模板文件, 仅返回不赋值
// renderString(tpl, locals) 渲染模板字符串, 仅返回不赋值
```

