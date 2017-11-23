---
title: docker
abbrlink: f255ffad
date: 2017-07-24 15:08:20
tags:
---

## 基本命令

docker info
docker images
docker ps -l || -a
docker version
docker stop id
docker start id

## 安装mongodb
docker search mongo

docker run -d -v /var/lib/mongo:/data/db -v /home/user/mongo.conf:/etc/mongo.conf -p port:port image_name


## 客户端
https://robomongo.org/download 

