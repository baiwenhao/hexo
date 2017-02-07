---
title: Regexp
date: 2017-02-07 15:19:23
categories: javascript
---

待拷贝
https://gist.github.com/lbj96347/1715416
http://114.xixik.com/character/

字符
.除了换行和回车之外的任意字符[^\n\r]
\d数字字符[0-9]
\D非数字[^0-9]
\s空白字符[\t\n\x0B\f\r]
\S非空白字符[^\t\n\x0B\f\r]
\w单词字符所有字母[a-zA-Z_0-9]
\W非单词字符[^a-zA-Z_0-9]

量词
?出现零次或一次
*出现零次或多次（任意次）
+出现一次或多次（至少一次）
{n}对应零次或者n次
{n,m}至少出现n次但不超过m次
{n,}至少出现n次（+的升级版）

预定义的特殊字符
\t制表符
\n换行
\r回车符
\b空格
\r 回车
\\ 斜杠
\a字符alert
\0空字符
\' 单引号 'he said,\’hey.\''
\" 双引号 “he said,\”hey.\""

search 字符串搜索返回的位置（浏览器类型）
''.search(/\d/)匹配第一个数字的位置\d就是0-9的意思
''.search(/a/i)匹配字符a第一次出现的位置,忽略大小写

match 获取匹配的项目-匹配的东西挑出来放在数组里面
''.match(/\d/g)匹配所有数字单个单个返回
'’.match(/\d\d/g)匹配数字两个一组的返回
量词变化\d, \d\d, \d+
'a1b12 c9'.match(/\d+/g);匹配若干个数字

replace 替换所有匹配,返回替换过后的字符串（敏感词过滤）
t2.value=t1.value.replace( /北京|上海/g,'oo’);全局替换字符串（上海和北京为’00’）
var a = 'apc bpc kpc mpc wpc 1pc 22pc'
var b = /[abc]pc/g;//匹配a或b开头的pc
log( a.match(b) );
/<[^<>]+>/g; || /<[a-z/]+>/gi过滤html标签
尽量不使用＊和.(任意字符)

实例：
var re=/^\w+@[a-zA-Z0-9]+\.[a-zA-Z]+$/i 邮箱匹配
var re = /^\d{2}$/g 匹配2位字符必须是数字
var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[a-z0-9]{6,10}$/ig 至少6到10位数必须包含数字和字母
var re = /[^\w\.\/]/ig;提取特殊字符
过滤大于等于6的数字
var a = '1234567890'
var b = a.replace(/[0-9]{6}/ig,'')
var re = /^(?![\d\-]+$)[a-z\d\-+*/_]{4}$/ 匹配英文数字加减乘除至少4位 (不能都是数字)

string
.search(‘a’)
.indexOf(‘;’,2)第二个字符开始检索;
.charAt(2)
.slice(0)
.substring(1,2)
.substr(1,2)
.split()
.toFixed(2)
.replace()
.toUpperCase() 小写
.toLowerCase() 大写
'a'.charCodeAt(0)返回Unicode编码  | String.fromCharCode(a)
String.fromCharCode(104,101,108,108,111);hello
"hello".charCodeAt(0);104

房源宝过滤价格 保留一个小数点，后的两位数字,
/\.\d{2}$/g.test('1.11')

连续相同的字符判断

http://www.cnblogs.com/rubylouvre/archive/2010/03/09/1681222.html
http://www.cnblogs.com/52XF/p/3740280.html
