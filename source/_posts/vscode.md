---
title: vscode
abbrlink: 849a3ae4
date: 2017-02-17 17:22:10
tags:
---

#### 最爱的编辑器没有之一

## 命令行启动
command + shift + p 键入 shell command

## 快捷键
Ctrl+Shift+N 打开一个新窗口
Ctrl+Shift+W 关闭窗口

## 光标
选中当前行 Ctrl+i
删除光标右侧的所有字 Ctrl+Delete
同时选中所有匹配的 Ctrl+Shift+L
回退上一个光标操作 Ctrl+U

##显示
command + b 侧边栏显/隐
侧边栏显/隐：Ctrl+B
侧边栏4大功能显示：
Show Explorer Ctrl+Shift+E
Show Search Ctrl+Shift+F
Show Git Ctrl+Shift+G
Show Debug Ctrl+Shift+D
Show Output Ctrl+Shift+U
预览markdown Ctrl+Shift+V


## 查找
查找 Ctrl+F
查找替换 Ctrl+H
整个文件夹中查找 Ctrl+Shift+F


## 插件
vscode-icon 图标
Path Intellisense csshtml路径
Npm Intellisense require路径
guides 垂直闭合线
indenticator 高亮当前编辑行


## 调试node
继续 / 暂停 F5
跳过 F10
进入 F11
退出 Shift+F11
重新开始 unassigned
停止调试 Shift + F5
显隐终端 ctrl + `


## 配置
```js
// vue文件支持tab补全
"emmet.syntaxProfiles": {
  "vue-html": "html",
  "vue": "html"
},
// 保存时删除末尾空格
"files.trimTrailingWhitespace": true,
```

参考：
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
https://zhuanlan.zhihu.com/p/22880087


