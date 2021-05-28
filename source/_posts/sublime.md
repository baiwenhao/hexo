---
title: sublime
toc: true
abbrlink: 238c95be
date: 2017-02-17 17:21:56
tags:
---

## 快捷键
```js
control＋tab 切换标签
cmd + 数字 标签切换
cmd + option + 2 双屏
cmd + j 合并成一行
cmd + d 选中一个单词 +d ...
cmd ＋［］缩进
cmd ＋L 选中当前行
cmd ＋ 回车 开辟新行
cmd ＋ shift ＋ 回车 开辟上一行
cmd ＋ shift ＋↕️↔️ 选中代码
cmd + p 搜索文件
cmd + shift + t 恢复刚才关闭的窗口
control + g 行跳转
control + r 函数跳转
control + option + F 格式化js  ( alignment)
Ctrl+shift+P组合键 // 安装插件 install package control 或者 remove
```

## build js
自定制的文件保存在Preferences/Browse Packages/User
Tools > Build System > new build system
/Users/baiwenhao/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/javascript.sublime-build

```json
{
  "cmd": ["node", "$file"],
  "selector": "source.js"
}
```

## build es6
全局安装babel
```
npm i -g babel-cli

{
    "working_dir": "${project_path:${folder}}",
    "selector": "source.js",
    "encoding": "utf-8",
    "shell": true,
    "windows": {
        "cmd": ["taskkill", "/f", "/im", "node.exe", ">nul", "2>nul", "&", "babel-node", "$file"]
    },
    "osx": {
        "cmd": ["killall node >/dev/null 2>&1; babel-node \"$file\""]
    },
    "linux": {
        "cmd": ["killall node >/dev/null 2>&1; babel-node \"$file\""]
    }
}

```
ps: https://www.cnblogs.com/52cik/p/sublime-text-run-es6.html


## 配置文件
```js
{
  "folder_exclude_patterns": [ // 搜索排除, 在项目中也看不见
    ".git",
    "node_modules"
  ],
  "always_show_minimap_viewport": true, // 小地图加背景
  "bold_folder_labels": true, // 加粗文件夹名称
  "save_on_focus_lost": true, // 失去焦点自动保存
  "fade_fold_buttons": false, // 折叠标签显示
  "font_face": "Monaco",
  "font_options": [
    "no_bold",
    "no_italic",
    "no_round"
  ],
  "font_size": 13,
  "word_wrap": false, // 关闭自动换行
  "caret_extra_width": 2, // 光标宽度
  "highlight_line": true, // 高亮行
  "highlight_modified_tabs": true, // 高亮未保存文件
  // 热推出功能！退出时不会提示是否保存文件，而是直接退出 
  // 下次打开软件时，文件保持退出前的状态，没来得及保存的内容都在，但并没有真实的写在原文件里
  "hot_exit": true,
  "ignored_packages":["Vintage"], // 不想用的package
  "line_padding_bottom": 2,
  "line_padding_top": 2,
  "rulers": [80], //宽度指导线
  "open_files_in_new_window": false, // 打开文件不启用新窗口
  "show_encoding": true, // 显示编码
  "tab_size": 2,
  "translate_tabs_to_spaces": true, // tab是空格
  "indent_guide_options": true, // 标签闭合垂直竖线
  "tree_animation_enabled": false, // 左侧菜单展开动画
  "trim_trailing_white_space_on_save": true, // 保存去掉取用空格
  "word_separators": "./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?", // 双加选中 -
  "auto_match_enabled": false, // 关闭括号自动补全
  "scroll_past_end": true // 要不要滚过头
}
```


## 插件
```js
// 快捷键
{ "keys": ["ctrl+shift+c"], "command": "copy_path" }

// 配置文件 Preferences > Package Setting
{
  "bootstrapped": true,
  "in_process_packages": [],
  "installed_packages": [
    "allAutocomplete", // 匹配的提示词 
    "caniuse", // 扩展右键菜单css
    "AutoFileName", // 标签匹配提示路径 比如src要引入一个文件
    "HTML-CSS-JS Prettify", // 格式化代码
    "JavaScriptNext - ES6 Syntax", // 语法高亮
    "SideBarEnhancements",
    "SideBarFolders", // 管理文件夹
    "DocBlockr", // 代码注释 
    "SyncedSideBar", // 支持当前文件在左侧面板中定位
    "Terminal", // 右键使用终端
    "Vue Syntax Highlight",
    "auto-save", // 自动保存
    "bracketHighlighter", // 标签闭合提示，高亮显示
    "sideBarEnhancements", // 增强右键菜单
    "fileHeader", // 给文件添加作者时间 FileHeader\template\header 自己配置
  ]
}
```

```
// fileHdader
{
    "Default": {
        "author":"Ding Jianlong",
        "last_modified_by":"Ding Jianlong",
        "email":"123@51015.cn"
    }
}
```

参考:
https://segmentfault.com/a/1190000004025334
https://www.kancloud.cn/digest/sublime-text-complete-guide/61433
https://www.bbsmax.com/A/6pdDZrkJw3/