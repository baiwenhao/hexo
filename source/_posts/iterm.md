---
title: iterm
abbrlink: 178af5b4
date: 2017-02-07 11:19:11
---

### 标签
新建标签：command + t
关闭标签：command + w
切换标签：command + 数字 command + 左右方向键
切换全屏：command + enter
查找：command + f

### 分屏
垂直分屏：command + d
水平分屏：command + shift + d
切换屏幕：command + option + 方向键 command + [ 或 command + ]
查看历史命令：command + ;
查看剪贴板历史：command + shift + h

### 其他
清除当前行：ctrl + u
到行首：ctrl + a
到行尾：ctrl + e
前进后退：ctrl + f/b (相当于左右方向键)
上一条命令：ctrl + p
搜索命令历史：ctrl + r
删除当前光标的字符：ctrl + d
删除光标之前的字符：ctrl + h
删除光标之前的单词：ctrl + w
删除到文本末尾：ctrl + k
交换光标处文本：ctrl + t
清屏1：command + r
清屏2：ctrl + l

### 配色方案
cd ~/
.bash_profile
source .bash_profile
curl -O https://raw.githubusercontent.com/nicolashery/mac-dev-setup/master/.bash_profile
.bash_prompt
.aliases

### 关闭提示音
Profiles -> Terminal -> silence bell

### 新窗口保持当前路径
Profiles -> general -> working directory -> Reuse previous session's directory

### 打开当前窗口
open .

### 终端打开IDE
.zshrc 添加
alias subl='/Applications/SublimeText.app/Contents/SharedSupport/bin/subl'
alias code='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code'
source .zshrc

是否设置
ls -l /usr/local/bin/sublime
rm /usr/local/bin/sublime

如果路径出现问题,执行以下代码看结果正常否
ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime



