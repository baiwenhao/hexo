---
title: subline
date: 2017-02-07 11:43:58
---

Command+p
当前js文件显示fn 
搜索文件css文件定位类 main@.banner

## 搜索排除
"folder_exclude_patterns":
[
  "node_modules"
]

## 快捷键
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
control + g 行跳转
control + r 函数跳转
control + option + F 格式化js  ( alignment)

sublimeTPL
[ {
        "keys": ["ctrl+alt+v"], "command": "sublime_tmpl",
        "args": {"type": "vue"}, "context": [{"key": "sublime_tmpl.vue"}]
}]

SyncedSideBar 支持当前文件在左侧面板中定位
autofilename 标签匹配提示路径
DocBlockr 代码注释 
SideBarFolders 管理文件夹 
javascript Next ES6 语法高亮
caniuse 扩展右键菜单css
Terminal 直接使用终端
allAutocomplete  匹配的提示词 
html-css-js Prettify 格式化代码 
auto-save  保存
bracketHighlighter 标签闭合提示
sideBarEnhancements 增强右键菜单 
{ "keys": ["ctrl+shift+c"], "command": "copy_path" }


## 模版 - File​Header 
http://shiyanhui.github.io/FileHeader/
{
    "Default": {
        "author":"baiwenhao",
        "last_modified_by":"baiwenhao",
        "email":"baiwenhao.sh.sh@superjia.com"
    }
}

## 保存当前文件路径
[
    { "keys": ["ctrl+shift+c"], "command": "copy_path" }
]


## 编译nodejs
自定制的文件保存在Preferences/Browse Packages/User
新建build system ...
{
        "cmd": ["/usr/local/bin/node", "$file"],
        "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
        "selector": "source.javascript"
}

## 编译es6
npm install -g babel 全局安装babel
添加新的build
{
    "path": "/usr/local/bin",
    "working_dir": "${project_path:${folder}}",
    "selector": "source.js",
    "encoding": "utf-8",
    "shell": true,
    "windows": {
        "cmd": ["taskkill /f /im node.exe >nul 2>nul & babel-node $file"]
    },
    "osx": {
        "cmd": ["killall node >/dev/null 2>&1; babel-node $file"]
    },
    "linux": {
        "cmd": ["killall node >/dev/null 2>&1; babel-node $file"]
    }
}

"always_show_minimap_viewport": true,//小地图加背景
"bold_folder_labels": true,//加粗文件夹名称
"trim_trailing_white_space_on_save": true,//保存去掉取用空格
"save_on_focus_lost": true, //失去焦点自动保存
"font_size": 12,
"highlight_line": true,//高亮行
"fade_fold_buttons": false,//折叠标签显示
"highlight_modified_tabs": true,//高亮未保存文件
"ignored_packages"://不想用的package
[
    "Vintage"
],
    "tree_animation_enabled": false,//左侧菜单动画
"open_files_in_new_window": false,//打开文件不启用新窗口
"show_encoding": true,//编码
"auto_match_enabled": false,//关闭括号自动补全
"tab_size": 4,
"translate_tabs_to_spaces": true,
"line_padding_bottom": 2,
    "line_padding_top": 2,
"rulers": [80], //宽度指导线
"draw_white_space": "all"//显示Tab、空格
"scroll_past_end": true, //要不要滚过头
"word_wrap": false, //关闭自动换行
// 热推出功能！退出时不会提示是否保存文件，而是直接退出 
// 下次打开软件时，文件保持退出前的状态，没来得及保存的内容都在，但并没有真实的写在原文件里
"hot_exit": true
"word_separators": "./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?",
"scroll_past_end": true,//可以滚动到底部
"caret_extra_width": 2,//光标宽度
"indent_guide_options”://标签闭合垂直竖线
[
"draw_normal",
"draw_active"
]


## 配置文件
```
{
"always_show_minimap_viewport": true,
"bold_folder_labels": true,
"fade_fold_buttons": false,
"font_face": "Monaco",
"font_options":
[
"no_bold",
"no_italic",
"no_round"
],
"font_size": 13,
"highlight_line": true,
"highlight_modified_tabs": true,
"hot_exit": true,
"ignored_packages":
[
"Vintage"
],
"line_padding_bottom": 2,
"line_padding_top": 2,
"open_files_in_new_window": false,
"show_encoding": true,
"tab_size": 4,
"translate_tabs_to_spaces": true,
"tree_animation_enabled": false,
"trim_trailing_white_space_on_save": true
}
```

## 插件
```
{
"bootstrapped": true,
"in_process_packages":
[
],
"installed_packages":
[
"AutoFileName",
"HTML-CSS-JS Prettify",
"JavaScriptNext - ES6 Syntax",
"SideBarEnhancements",
"SideBarFolders",
"SyncedSideBar",
"Vue Syntax Highlight"
]
}
```