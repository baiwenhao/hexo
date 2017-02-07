---
title: nginx
date: 2017-02-07 11:19:16
---

#nginx mac
1. 安装
brew install nginx 安装
brew uninstall nginx卸载
brew update nginx 更新
brew cleanup 清理
brew info nginx 依赖

2. 目录
/usr/local/etc/nginx/nginx.conf 
/usr/local/Cellar/nginx/1.8.0/html

3. 命令
nginx -s reload 重载
nginx -s reopen 重启
nginx -s stop 停止
nginx -s quit 退出
nginx -t 测配 

4. 配置
server {
listen 80;
server_name locahost *.iwjw.com;
location ~* /(resource/)?([a-z,-]*)(_.*)?/(.*)_\d.*.(css|js){
add_header Access-Control-Allow-Origin *;
alias /Users/baiwenhao/work/static/$2/dist/$4.$5;
}

location ~* /(resource/)?([a-z,-]*)(_.*)?/(.*){
add_header Access-Control-Allow-Origin *;
alias /Users/baiwenhao/work/static/$2/dist/$4;
}
}

server {
listen 8088;
server_name localhost *.iwjw.com;
location / {
root html;
index index.html index.htm;
}
location ~* /(resource/)?([a-z,-]*)(_.*)?/(.*)_\d.*.(css|js){
add_header Access-Control-Allow-Origin *;
alias /Users/baiwenhao/work/static/$2/dist/$4.$5;
}

location ~* /(resource/)?([a-z,-]*)(_.*)?/(.*){
add_header Access-Control-Allow-Origin *;
alias /Users/baiwenhao/work/static/$2/dist/$4;
}

# location ~* /fbh-(\w*)/(.*)_\d.*.(css|js){
# add_header Access-Control-Allow-Origin *;
# alias /Users/baiwenhao/work/static/fbh-$1/dist/$2.$3;
# proxy_pass http://localhost:5000/$2.$3;
# }

# location ~* /fbh-(\w*)/(.*){
# add_header Access-Control-Allow-Origin *;
# alias /Users/baiwenhao/work/static/fbh-$1/dist/$2;
# proxy_pass http://localhost:5000/$2;
# }
}

cnetOs安装nginx
第一步，在/etc/yum.repos.d/目录下创建一个源配置文件nginx.repo：
cd /etc/yum.repos.d/
vim nginx.repo

填写如下内容：

[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1

保存，则会产生一个/etc/yum.repos.d/nginx.repo文件。

下面直接执行如下指令即可自动安装好Nginx：

yum install nginx -y
安装完成，下面直接就可以启动Nginx了：

/etc/init.d/nginx start

现在Nginx已经启动了，直接访问服务器就能看到Nginx欢迎页面了的。

如果还无法访问，则需配置一下Linux防火墙。
iptables -I INPUT 5 -i eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
service iptables save
service iptables restart

Nginx的命令以及配置文件位置
/etc/init.d/nginx start # 启动Nginx服务
/etc/init.d/nginx stop # 停止Nginx服务
/etc/nginx/nginx.conf # Nginx配置文件位置
chkconfig nginx on #设为开机启动

至此，Nginx已经全部配置安装完成。
一台主机上适应多个服务器：
在你的nginx通过代理的方式转发请求：配置如下
vi /etc/nginx/nginx.conf
在http加入下面的内容，参考：http://wiki.nginx.org/FullExample
http {

server {
listen 80;
server_name www.a.com;
charset utf-8;
access_log /home/a.com.access.log main;
location / {
proxy_pass http://127.0.0.1:80
}
}

server {
listen 80;
server_name www.b.com;
charset utf-8;
access_log /home/b.com.access.log main;
location / {
proxy_pass http://127.0.0.1:81
}
}

设置代理
server{
listen 80;
server_name *.haokebaba.com;
location / {
proxy_pass http://104.224.160.141:8080;
}
}