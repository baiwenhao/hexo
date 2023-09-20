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

## kill port
```
lsof -i tcp:3888 //查看
kill -9 26019 //杀端口
```

## zip
```
apt-get install unzip || yum install unzip                 // 安装
zip -q -r electron.zip /root/document/electron-quick-start // 压缩
unzip new.zip                                              // 解压
unzip -v new.zip                                           // 查看
unzip -t new.zip                                           // 完整
```

## centOs install soft
```
yum install -y git // install git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash // https://github.com/nvm-sh/nvm
curl -o- -L https://yarnpkg.com/install.sh | bash // install yarn
// source /root/.bashrc  nvm and yarn 安装目录 刷新 source
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

## centOS install mongodb
```js
yum -y update
touch /etc/yum.repos.d/mongodb-org.repo
vi /etc/yum.repos.d/mongodb-org.repo

[mongodb-org]
name=MongoDB Repository
baseurl=http://mirrors.aliyun.com/mongodb/yum/redhat/7Server/mongodb-org/3.2/x86_64/
gpgcheck=0
enabled=1

yum install -y mongodb-org
```

## 查看历史命令
history |grep yarn

## 开启权限打开app
sudo spctl --master-disable

## 搬瓦工
```
ssh root@104.225.233.200 -p 26800

// 本地拉取远程文件
scp -P 26800 root@104.225.233.208:/root/gradle-2.4-all.zip ./

// 本地上传到远端
scp -P 26800 ./vuejs_note.zip root@104.225.233.208:/root/

ubuntu 安装
apt-get install git
apt-get install curl

```

## v2ray
基础命令
```
systemctl start v2ray
systemctl stop v2ray
systemctl status v2ray
service v2ray status

vi /usr/local/etc/v2ray/config.json
netstat -apn | grep v2ray
```

ExecStart=/usr/local/bin/v2ray -config /usr/local/etc/v2ray/config.json

https://github.com/v2fly/fhs-install-v2ray/blob/master/README.md
```
{
  "log": {
    "loglevel": "warning"
  },
  "inbound": {
    "protocol": "vmess",
    "port": 1234,
    "listen": "104.225.233.200",
    "settings": {
      "clients": [
        {
          "id": "f8e1b20a-e33f-470e-8133-ccad21a83ea",
          "alterId": 2,
          "level": 1
        }
      ]
    },
    "streamSettings": {
      "network": "tcp"
    }
  },
  "inboundDetour": [],
  "outbound": {
    "protocol": "freedom",
   "settings": {}
  }
}
```


