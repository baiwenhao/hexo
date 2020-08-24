---
title: centos
abbrlink: cd183338
date: 2020-03-29 14:17:30
tags:
---


## start
```js
yum -y install wget // 纯粹的命令行工具
yum install -y zip unzip // centos 不支持 apt-get

```

## install V2ray
```
wget https://install.direct/go.sh // 下载脚本
bash go.sh // 执行
systemctl status v2ray
systemctl start v2ray
systemctl stop v2ray
systemctl restart v2ray
systemctl enable v2ray

cat /etc/v2ray/config.json
{
  "inbounds": [{
    "port": 36710, // 自定义端口号
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
          "id": "472b34f4-e918-4e1c-9caf-842c50a6dfef",
          "level": 1,
          "alterId": 2
        }
      ]
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "settings": {}
  },{
    "protocol": "blackhole",
    "settings": {},
    "tag": "blocked"
  }],
  "routing": {
    "rules": [
      {
        "type": "field",
        "ip": ["geoip:private"],
        "outboundTag": "blocked"
      }
    ]
  }
}

```
更新 V2Ray 的方法是再次执行安装脚本

## install shadowsockes
```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py // 安装 pip 管理工具
python get-pip.py
pip install shadowsocks // 安装 shadowsocks

vi /etc/shadowsocks.json // 配置文件
{
  "server": "0.0.0.0",
  "server_port": 36800,
  "local_port": 1080,
  "password": "wenhao.works",
  "timeout": 300,
  "method": "aes-256-cfb"
}
systemctl enable shadowsocks // 开机自启命令
systemctl start shadowsocks // 启动命令
systemctl status shadowsocks // 查看状态命令
systemctl stop shadowsocks // 关闭服务
pip uninstall shadowsocks // 卸载
```

## install git
```js
yum install git
```

## nginx
```js
nginx status
nginx -t           #测试配置文件
nginx -s stop      #强制停止Nginx服务
nginx -s quit      #处理完请求后再停止服务
nginx -s reload    #重启命令
ps -ef |grep nginx #查看进程命令
nginx -v           #查看Nginx的版本号
```

## 查看开放的端口
```
firewall-cmd --zone=public --list-ports
```

## 添加开放的端口
```
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

switchyOmega