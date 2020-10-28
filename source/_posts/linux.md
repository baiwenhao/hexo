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

## zip压缩解压
```
zip -r 1 2 new 压12
unzip new.zip 解压
unzip -v new.zip 查看
unzip -t new.zip 完整
```

## centOS install
```
yum install git
```

## 解决 nvm command not found问题
安装地址 https://github.com/nvm-sh/nvm

进入.nvm文件夹，新建.bash_profile：
```js
touch .bash_profile // 新建文件
open .bash_profile // 打开文件
```

copy 一下内容
```js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

属性
```js
source .bash_profile
```

卸载
```js
nvm use system
$ npm uninstall -g a_module
```

## centOS安装yarn
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

本地拷贝远程文件,本地拷远程顺序颠倒一下
scp -P 26800 root@104.225.233.208:/root/gradle-2.4-all.zip ./
scp -P 26800 ./vuejs_note.zip root@104.225.233.208:/root/

ubuntu 安装
apt-get install git
apt-get install curl

```

## v2ray
```
systemctl start v2ray
systemctl stop v2ray
service v2ray status

server
ExecStart=/usr/local/bin/v2ray -config /usr/local/etc/v2ray/config.json
```
https://github.com/v2fly/fhs-install-v2ray/blob/master/README.md
```
{
    "log": {
        "access": "/var/log/v2ray/access.log",
        "error": "/var/log/v2ray/error.log",
        "loglevel": "warning"
    },
    "inbound": {
        "port": 12345,
        "protocol": "vmess",
        "settings": {
            "clients": [
                {
                    "id": "d75015f7-c5ca-6992-349e-f04345ccc95f",
                    "level": 1,
                    "alterId": 100
                }
            ]
        },
        "streamSettings": {
            "network": "tcp"
        },
        "detour": {
            "to": "vmess-detour-276786"
        }
    },
    "outbound": {
        "protocol": "freedom",
        "settings": {}
    },
    "inboundDetour": [
        {
            "protocol": "vmess",
            "port": "10000-10010",
            "tag": "vmess-detour-276786",
            "settings": {},
            "allocate": {
                "strategy": "random",
                "concurrency": 5,
                "refresh": 5
            },
            "streamSettings": {
                "network": "kcp"
            }
        }
    ],
    "outboundDetour": [
        {
            "protocol": "blackhole",
            "settings": {},
            "tag": "blocked"
        }
    ],
    "routing": {
        "strategy": "rules",
        "settings": {
            "rules": [
                {
                    "type": "field",
                    "ip": [
                        "0.0.0.0/8",
                        "10.0.0.0/8",
                        "100.64.0.0/10",
                        "127.0.0.0/8",
                        "169.254.0.0/16",
                        "172.16.0.0/12",
                        "192.0.0.0/24",
                        "192.0.2.0/24",
                        "192.168.0.0/16",
                        "198.18.0.0/15",
                        "198.51.100.0/24",
                        "203.0.113.0/24",
                        "::1/128",
                        "fc00::/7",
                        "fe80::/10"
                    ],
                    "outboundTag": "blocked"
                }
            ]
        }
    }
}
```

