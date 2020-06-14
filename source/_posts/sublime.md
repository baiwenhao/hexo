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
```

## 编译nodejs
自定制的文件保存在Preferences/Browse Packages/User
Tools > Build System > new build system
/Users/baiwenhao/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/javascript.sublime-build

```json
{
  "cmd": ["node", "$file"],"selector": "source.js"
}
```

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
SyncedSideBar 支持当前文件在左侧面板中定位
autofilename 标签匹配提示路径
DocBlockr 代码注释 
SideBarFolders 管理文件夹 
javascript Next ES6 语法高亮
caniuse 扩展右键菜单css
Terminal 右键使用终端
allAutocomplete  匹配的提示词 
html-css-js Prettify 格式化代码 
auto-save  保存
bracketHighlighter 标签闭合提示
sideBarEnhancements 增强右键菜单 
{ "keys": ["ctrl+shift+c"], "command": "copy_path" } // 保存当前文件路径

// 配置文件 Preferences > Package Setting
{
  "bootstrapped": true,
  "in_process_packages": [],
  "installed_packages": [
    "AutoFileName",
    "HTML-CSS-JS Prettify",
    "JavaScriptNext - ES6 Syntax",
    "SideBarEnhancements",
    "SideBarFolders",
    "SyncedSideBar",
    "Terminal",
    "Vue Syntax Highlight"
  ]
}
```

参考:
https://segmentfault.com/a/1190000004025334
https://www.kancloud.cn/digest/sublime-text-complete-guide/61433
https://www.bbsmax.com/A/6pdDZrkJw3/