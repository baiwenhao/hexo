---
title: Mac
date: 2017-02-07 11:19:11
---

创建文件
touch a.txt 
pico a.txt

权限开启
sudo chown -R $USER /usr/local/Cellar/  

sudo nano ~/.bash_profile; 添加全局变量 control+x 保存

管理插件开关
https://chrome.google.com/webstore/detail/%E4%B8%80%E9%94%AE%E7%AE%A1%E7%90%86%E6%89%80%E6%9C%89%E6%89%A9%E5%B1%95/niemebbfnfbjfojajlmnbiikmcpjkkja/related

git插件
https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?utm_source=chrome-ntp-icon
chrome octutree

隐身模式
command + shift + n

清除DNS缓存
dscacheutil -flushcache

host文件
/private/etc/ 

谷歌插件
postman REST client

开启显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -bool YES

关闭显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -bool NO

刷新finder
killall Finder

sourceCRT破解安装
正常打开一次，后断网破解，破解文件放到桌面，app放到应用里面，终端输出命令，
填写终端提示的破解账号信息

权限
chmod 777 catalina.sh
sudo chown 'baiwenhao' /usr/local’;

资料汇总
https://github.com/AutumnsWind/Front-end-tutorial?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io

重置蓝牙
Command+Option+P+R键

mac
显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles Yes && killall Finder 
不显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles No && killall Finder 
.DS_Store