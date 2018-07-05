---
title: linux
toc: true
abbrlink: 53d0684b
date: 2017-02-07 11:44:11
---

## telnet
```
netstat -nat | grep 3306
nslookup nodejs.org 查看域名地址
telnet 192.168.1.1 80 链接地址
GET /api/http.html HTTP/1.1 发起请求 
Host: nodejs.org 两个回车发送请求 
```

## 杀端口
```
lsof -i tcp:3888 //查看
kill -9 26019 //杀端口
```

## 搬瓦工
```
ssh root@45.78.53.253 -p 28254

本地拷贝远程文件,本地拷远程顺序颠倒一下
scp -P 28254 root@45.78.53.253:/root/gradle-2.4-all.zip ./
scp -P 28254 ./vuejs_note.zip root@45.78.53.253:/root/

ubuntu 安装 apt-get install git
```

## shadowsocks go
查看状态
```js

```

可以设置多端口
```js
{
    "server":"0.0.0.0",
    "server_port":"10586",
    "local_port":1080,
    "password":"teddysun.com",
    "method":"aes-256-cfb",
    "timeout":300
}
vi /etc/shadowsocks/config.json
/etc/init.d/shadowsocks restart
```

卸载
```js
./shadowsocks-go.sh uninstall
启动：/etc/init.d/shadowsocks start
停止：/etc/init.d/shadowsocks stop
重启：/etc/init.d/shadowsocks restart
状态：/etc/init.d/shadowsocks status
```

https://teddysun.com/392.html
https://www.jianshu.com/p/1128ddc5a90f

## zip压缩解压
```
zip -r 1 2 new 压12
unzip new.zip 解压
unzip -v new.zip 查看
unzip -t new.zip 完整
```

## nvm
https://github.com/creationix/nvm

## 移动文件
```
mv file1 file2
将文件file1改名为file2,

mv file dir
将文件file移动到目录dir中,

mv file1 file2 file3 dir
mv -t dir file1 file2 file3
将文件file1,file2和file3移动到目录dir中,

mv -i file1 file2
将文件file1改名为file2，如果file2已经存在，则询问是否覆盖,i=interactive, prompt before overwrite,
一般情况下，我们使用的mv是一个别名：alias mv='mv -i'

mv -f file1 file2
将文件file1改名为file2，即使file2存在，也是直接覆盖掉,f=force, do not prompt before overwriting,这是个危险的选项，最好不用加上它,

mv dir1 dir2
如果目录dir2不存在，将目录dir1改名为dir2；否则，将dir1移动到dir2中
```

## 上传代码
```js
wf-53
sudo su -
rz -y | rz -be
unzip a.zip
mv dist/* ROOT
```

## tomcat
```js
/usr/local/tomcat/bin
./shutdown.sh
./startup.sh
/usr/local/tomcat/logs 日志目录
tail -f catalina.out 查看日志
ps -ef|grep tomcat 查看服务是否启动
kill -9 15559 关闭端口
```

命令
https://yarnpkg.com/en/docs/cli/add
安装
https://github.com/yarnpkg/yarn/issues/1139