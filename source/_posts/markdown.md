---
title: markdown
toc: true
abbrlink: 3c50d03d
date: 2017-02-07 10:59:01
---

参考地址 https://wizardforcel.gitbooks.io/markdown-simple-world/content/2.html

## 字体
<pre>
#字号 (#~######)
*这是斜体*
_这也是斜体_
**这是粗体**
***这是粗体+斜体***
<!-- 注释 -->
hexo server
hexo deploy
hexo new page "about"

> 类似
> ## This is an H2 in a blockquote
</pre>


## 表格
<pre>
| 项目        | 价格      |  数量    |
| --------   | -----     | ----    |
| 计算机      | $1600     |   5     |
| 手机        |   $12     |   12    |
| 管线        |    $1     |  234    |
</pre>

## 列表
<pre>
- 嵌套列表

* Candy.
* Gum.
* Booze.

+ Candy.
+ Gum.
+ Booze.

- 外层列表项目
 + 内层列表项目
 + 内层无序列表项目
 + 内层列表项目
- 外层列表项目
</pre>

## 超链接
```
// 方法一
![GitHub Mark](图片地址 "GitHub Mark") // 文字超链接
这是一个[链接](http://baiwenhao.github.io, '我是链接') // 图片超链接

// 方法二
[wenhao][1]
![GitHub Octocat][2]
[1]:http://baiwenhao.github.io
[2]:http://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png

也可以这样
![alt text][id]
[id]: /path/to/img.jpg "Title"

```

![GitHub Mark](http://github.global.ssl.fastly.net/images/modules/logos_page/GitHub-Mark.png "GitHub Mark")

[wenhao][1]
![GitHub Octocat][2]
[1]:http://bruce-sha.github.io
[2]:http://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png

<blockquote>
For example.
asdasdasd
</blockquote>

## 转义字符
```
Markdown中的转义字符为\，转义的有：
\\ 反斜杠
\` 反引号
\* 星号
\_ 下划线
\{\} 大括号
\[\] 中括号
\(\) 小括号
\# 井号
\+ 加号
\- 减号
\. 英文句号
\! 感叹号
```

参考：
http://wowubuntu.com/markdown/basic.html
