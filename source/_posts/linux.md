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
ssh root@104.224.160.141 -p 27850 连接linux主机
yum install git
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
然后source .bashrc 在用nvm install node

wget https://services.gradle.org/distributions/gradle-2.4-all.zip
本地拷贝远程文件,本地拷远程顺序颠倒一下
scp -P 27850 root@104.224.160.141:/root/gradle-2.4-all.zip ./
scp -P 27850 ./vuejs_note.zip root@104.224.160.141:/root/
```

## zip压缩解压
```
zip -r 1 2 new 压12
unzip new.zip 解压
unzip -v new.zip 查看
unzip -t new.zip 完整
```

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

## kuoruan配置
```
服务器IP:  104.224.160.141
端口:  17899
加速地址: 127.0.0.1:443
crypt:  none
mode:  fast2
当前安装的 Kcptun 版本为: 20170117
请前往 https://github.com/xtaci/kcptun/releases/tag/v20170117 手动下载客户端文件
可使用的客户端配置文件为:
{
    "localaddr": ":443",
    "remoteaddr": "104.224.160.141:17899",
    "key": "it's a secrect",
    "crypt": "none",
    "mode": "fast2",
    "conn": 1,
    "autoexpire": 60,
    "mtu": 1350,
    "sndwnd": 1024,
    "rcvwnd": 1024,
    "datashard": 10,
    "parityshard": 3,
    "dscp": 0,
    "nocomp": false,
    "acknodelay": false,
    "nodelay": 0,
    "interval": 20,
    "resend": 2,
    "nc": 1,
    "sockbuf": 4194304,
    "keepalive": 10
}

手机端参数可以使用:
-autoexpire 60 -crypt "none" -mode "fast2"

各参数详细说明可以查看: https://github.com/xtaci/kcptun
Kcptun 安装目录: /usr/share/kcptun
Kcptun 日志目录: /var/log/kcptun
已将 Supervisor 加入开机自启, Kcptun 服务端会随 Supervisor 的启动而启动

更多使用说明: ./kcptun.sh help
./kcptun.sh reconfig
./kcptun.sh uninstall
./kcptun.sh update
http://www.jianshu.com/p/172c38ba6cee
欢迎访问扩软博客: https://blog.kuoruan.com/
```

## 加速服务端配置
```
wget https://raw.githubusercontent.com/kuoruan/kcptun_installer/master/kcptun.sh
chmod +x ./kcptun.sh
./kcptun.sh
 Kcptun 服务端一键安装脚本                             #
# 该脚本支持 Kcptun 服务端的安装、更新、卸载及配置      #
# 脚本作者: Index <kuoruan@gmail.com>                   #
# 作者博客: https://blog.kuoruan.com/                   #
# Github: https://github.com/kuoruan/kcptun_installer   #
# QQ交流群: 43391448, 68133628
```

## 客户端安装
```
下载地址
https://github.com/xtaci/kcptun/releases/
kcptun-darwin-amd64-20170117.tar.gz
建立目录kcptun 进入
./client_darwin_amd64 -r "104.224.160.141:17899" -l ":8388" -mode fast2 -crypt none
飞机设置
127.0.0.1:8388
```

## pm2
<pre>
pm2 start app.js -i 4
后台运行pm2，启动4个app.js
也可以把'max' 参数传递给 start
正确的进程数目依赖于Cpu的核心数目

pm2 start app.js --name my-api # 命名进程
pm2 list # 显示所有进程状态
pm2 monit # 监视所有进程
pm2 logs # 显示所有进程日志
pm2 stop all # 停止所有进程
pm2 restart all # 重启所有进程
pm2 reload all # 0 秒停机重载进程 (用于 NETWORKED 进程)
pm2 stop 0  # 停止指定的进程
pm2 restart 0  # 重启指定的进程
pm2 startup # 产生 init 脚本 保持进程活着
pm2 delete 0 # 杀死指定的进程
pm2 delete all  # 杀死全部进程
</pre>