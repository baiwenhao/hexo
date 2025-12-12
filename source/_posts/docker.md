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
docker rmi id
docker rm name
docker search name
docker pull name

## mongodb
Status: Downloaded newer image for mongo:latest (下载成功)
docker run -d -v /var/lib/mongo:/data/db -v /home/user/mongo.conf:/etc/mongo.conf -p port:port image_name

docker run -p 27017:27017 -v /Users/baiwenhao/workSpace/mongodb/data:/data -d mongo 
docker run -p 27017:27017 -v /c/Users/Administrator/Desktop/mongodb/data:/data -d mongo 

-p 27017:27017 将容器的27017 端口映射到主机的27017 端口
-v $PWD/db:/data/db 将主机中当前目录下的db挂载到容器的/data/db，作为mongo数据存储目录

## 镜像加速
容器镜像服务 => 镜像加速器 （我的加速地址） https://k454h3he.mirror.aliyuncs.com
docker的配置中找到daemon => registry mirrors (添加地址) => apply

参考
https://docs.docker.com/samples/library/mongo/#shared-tags

## Podman
由于公司禁止使用docker，于是使用podman替代
```js
// Basic commands
podman machine init    // 初始化 --cpus 4 --memory 8192 --disk-size 50
podman machine info    // 查看虚拟机信息
podman machine status  
podman machine start    
podman machine logs
podman machine restart
podman machine stop    // 停止
podman machine rm      // 删除所有容器和镜像
podman machine list    // 虚拟机列表
podman machine ssh -- echo "Hello from inside the VM"
podman machine ssh -- ip addr show dev eth0

podman images          // 查看镜像
podman image ls        
podman ps              // 查看容器
podman run             // 运行容器

// del
rm -rf ~/.config/containers
rm -rf ~/.local/share/containers
brew uninstall podman podman-compose
```