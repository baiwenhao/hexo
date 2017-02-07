---
title: Linux
date: 2017-02-07 11:44:11
---

搬瓦工vps
ssh root@104.224.160.141 -p 27850 连接linux主机
yum install git
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
然后source .bashrc 在用nvm install node

下载插件
wget https://services.gradle.org/distributions/gradle-2.4-all.zip
本地拷贝远程文件,本地拷远程顺序颠倒一下
scp -P 27850 root@104.224.160.141:/root/gradle-2.4-all.zip ./
scp -P 27850 ./vuejs_note.zip root@104.224.160.141:/root/

zip压缩解压
zip -r 1 2 new 压12
unzip new.zip 解压
unzip -v new.zip 查看
unzip -t new.zip 完整 

mv
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

kuoruan配置
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

服务端配置
wget https://raw.githubusercontent.com/kuoruan/kcptun_installer/master/kcptun.sh
chmod +x ./kcptun.sh
./kcptun.sh
 Kcptun 服务端一键安装脚本                             #
# 该脚本支持 Kcptun 服务端的安装、更新、卸载及配置      #
# 脚本作者: Index <kuoruan@gmail.com>                   #
# 作者博客: https://blog.kuoruan.com/                   #
# Github: https://github.com/kuoruan/kcptun_installer   #
# QQ交流群: 43391448, 68133628

客户端安装
下载地址
https://github.com/xtaci/kcptun/releases/ 
kcptun-darwin-amd64-20170117.tar.gz
建立目录kcptun 进入
./client_darwin_amd64 -r "104.224.160.141:17899" -l ":8388" -mode fast2 -crypt none
飞机设置
127.0.0.1:8388

