---
title: nginx
toc: true
abbrlink: 65b69107
date: 2017-02-07 11:19:16
---

## mac
```
安装
brew install nginx 安装
brew uninstall nginx卸载
brew update nginx 更新
brew cleanup 清理
brew info nginx 依赖

2. location
/usr/local/etc/nginx/nginx.conf
/usr/local/Cellar/nginx/1.8.0/html

3. 命令
nginx -s reload 重载
nginx -s reopen 重启
nginx -s stop 停止
nginx -s quit 退出
nginx -t 测配
ps -ef | grep nginx 查看nginx进程

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

5. 本地代理
设置host
127.0.0.1        resource.iwjw.com
127.0.0.1        house-test-water.oss.aliyuncs.com
配置nginx 代理到本地静态路径
启动nginx
```

```js
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
```

## Gzip 压缩
```js
gzip on;
gzip_min_length 1k;
gzip_buffers 4 16k;
#gzip_http_version 1.0;
gzip_comp_level 2;
gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
gzip_vary off;
gzip_disable "MSIE [1-6]\.";
```

第1行：开启Gzip
第2行：不压缩临界值，大于1K的才压缩，一般不用改
第3行：buffer，就是，嗯，算了不解释了，不用改
第4行：用了反向代理的话，末端通信是HTTP/1.0，有需求的应该也不用看我这科普文了；有这句的话注释了就行了，默认是HTTP/1.1
第5行：压缩级别，1-10，数字越大压缩的越好，时间也越长，看心情随便改吧
第6行：进行压缩的文件类型，缺啥补啥就行了，JavaScript有两种写法，最好都写上吧，总有人抱怨js文件没有压缩，其实多写一种格式就行了
第7行：跟Squid等缓存服务有关，on的话会在Header里增加"Vary: Accept-Encoding"，我不需要这玩意，自己对照情况看着办吧
第8行：IE6对Gzip不怎么友好，不给它Gzip了

测试
curl -I -H "Accept-Encoding: gzip, deflate" "http://www.slyar.com/blog/"

## 静态


## 参考
https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms

## 处理跨域
```js
location /api {
    proxy_pass https://www.hahah.com;  #代理的域名
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Credentials' 'true';
}
location ~* \.(eot|otf|ttf|woff|woff2)$ {
    add_header Access-Control-Allow-Origin *;
}
location ~* \.(ttf|ttc|otf|eot|woff|font.css)$ {
    add_header Access-Control-Allow-Origin "http://localhost:7001";
}
```
或者字体 to base64 https://transfonter.org
