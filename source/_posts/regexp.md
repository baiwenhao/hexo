---
title: regexp
abbrlink: fe58b4d1
date: 2017-02-07 15:19:23
---

待拷贝
https://gist.github.com/lbj96347/1715416
http://114.xixik.com/character/

## 字符
```
.除了换行和回车之外的任意字符[^\n\r]
\d 数字字符[0-9]
\D 非数字[^0-9]
\s 空白字符[\t\n\x0B\f\r]
\S 非空白字符[^\t\n\x0B\f\r]
\w 单词字符所有字母[a-zA-Z_0-9]
\W 非单词字符[^a-zA-Z_0-9]
```

## 量词
```
?出现零次或一次
*出现零次或多次（任意次）
+出现一次或多次（至少一次）
{n}对应零次或者n次
{n,m}至少出现n次但不超过m次
{n,}至少出现n次（+的升级版）
```

## 预定义的特殊字符
```
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
```

## search
```
字符串搜索返回的位置（浏览器类型）
''.search(/\d/)匹配第一个数字的位置\d就是0-9的意思
''.search(/a/i)匹配字符a第一次出现的位置,忽略大小写
```

## match
```
获取匹配的项目-匹配的东西挑出来放在数组里面
''.match(/\d/g)匹配所有数字单个单个返回
'’.match(/\d\d/g)匹配数字两个一组的返回
量词变化\d, \d\d, \d+
'a1b12 c9'.match(/\d+/g);匹配若干个数字
```

## replace
```
* replace返回替换过后的字符,不匹配就返回原来的字符

替换所有匹配,返回替换过后的字符串（敏感词过滤）
t2.value = t1.value.replace( /北京|上海/g,'oo’);
全局替换字符串（上海和北京为’00’）
var a = 'apc bpc kpc mpc wpc 1pc 22pc'
var b = /[abc]pc/g;//匹配a或b开头的pc
log( a.match(b) );
/<[^<>]+>/g; || /<[a-z/]+>/gi过滤html标签
尽量不使用＊和.(任意字符)
```

## string
```
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
.trim()
'a'.charCodeAt(0)返回Unicode编码  | String.fromCharCode(a)
String.fromCharCode(104,101,108,108,111);hello
"hello".charCodeAt(0);104

数字转字符
1..toString()
1 .toSting()
(1).toString()
```

## 实例
```
var re=/^\w+@[a-zA-Z0-9]+\.[a-zA-Z]+$/i 邮箱匹配
var re = /^\d{2}$/g 匹配2位字符必须是数字
var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[a-z0-9]{6,10}$/ig 至少6到10位数必须包含数字和字母
var re = /[^\w\.\/]/ig;提取特殊字符
过滤大于等于6的数字
var a = '1234567890'
var b = a.replace(/[0-9]{6}/ig,'')
var re = /^(?![\d\-]+$)[a-z\d\-+*/_]{4}$/ 匹配英文数字加减乘除至少4位 (不能都是数字)

房源宝过滤价格 保留一个小数点，后的两位数字,
/\.\d{2}$/g.test('1.11')

http://www.cnblogs.com/rubylouvre/archive/2010/03/09/1681222.html
http://www.cnblogs.com/52XF/p/3740280.html

'2017-05-01-2017-05-15'.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$2.$3')

```

## 正则变量
```js
// 方法1
var v = "bl"
var re =new RegExp("^\\d+" + v + "$","gim"); // re为/^\d+bl$/gim

// 方法2
var re = eval("/^\\d+" + v + "$/gim")
```

## 实例
```js
var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
file.replace(/([^\s]*)( - )([^\s.]*)(.\S*$)/, '$3$2$1$4') // 替换文件名称顺序
```

## 阿拉伯数字转换成大写数字
```js
function Arabia_To_SimplifiedChinese(Num) {
  for (i = Num.length - 1; i >= 0; i--) {
    Num = Num.replace(",", "")//替换Num中的“,”
    Num = Num.replace(" ", "")//替换Num中的空格
  }
  if (isNaN(Num)) { //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return;
  }
  //字符处理完毕后开始转换，采用前后两部分分别转换
  part = String(Num).split(".");
  newchar = "";
  //小数点前进行转化
  for (i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      //alert("位数过大，无法计算");
      return "";
    }//若数量超过拾亿单位，提示
    tmpnewchar = ""
    perchar = part[0].charAt(i);
    switch (perchar) {
      case "0":  tmpnewchar = "零" + tmpnewchar;break;
      case "1": tmpnewchar = "一" + tmpnewchar; break;
      case "2": tmpnewchar = "二" + tmpnewchar; break;
      case "3": tmpnewchar = "三" + tmpnewchar; break;
      case "4": tmpnewchar = "四" + tmpnewchar; break;
      case "5": tmpnewchar = "五" + tmpnewchar; break;
      case "6": tmpnewchar = "六" + tmpnewchar; break;
      case "7": tmpnewchar = "七" + tmpnewchar; break;
      case "8": tmpnewchar = "八" + tmpnewchar; break;
      case "9": tmpnewchar = "九" + tmpnewchar; break;
    }
    switch (part[0].length - i - 1) {
      case 0: tmpnewchar = tmpnewchar; break;
      case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
      case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
      case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
      case 4: tmpnewchar = tmpnewchar + "万"; break;
      case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
      case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
      case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
      case 8: tmpnewchar = tmpnewchar + "亿"; break;
      case 9: tmpnewchar = tmpnewchar + "十"; break;
    }
    newchar = tmpnewchar + newchar;
  }
  //替换所有无用汉字，直到没有此类无用的数字为止
  while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零零", "零");
  }
  //替换以“一十”开头的，为“十”
  if (newchar.indexOf("一十") == 0) {
    newchar = newchar.substr(1);
  }
  //替换以“零”结尾的，为“”
  if (newchar.lastIndexOf("零") == newchar.length - 1) {
    newchar = newchar.substr(0, newchar.length - 1);
  }
  return newchar;
}
```

## 阿拉伯数字转换成中文
```js
function intToChinese ( str ) {
 str = str+'';
 var len = str.length-1;
 var idxs = ['','十','百','千','万','十','百','千','亿','十','百','千','万','十','百','千','亿'];
 var num = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
 return str.replace(/([1-9]|0+)/g,function( $, $1, idx, full) {
  var pos = 0;
  if( $1[0] != '0' ){
   pos = len-idx;
   if( idx == 0 && $1[0] == 1 && idxs[len-idx] == '十'){
    return idxs[len-idx];
   }
   return num[$1[0]] + idxs[len-idx];
  } else {
   var left = len - idx;
   var right = len - idx + $1.length;
   if( Math.floor(right/4) - Math.floor(left/4) > 0 ){
    pos = left - left%4;
   }
   if( pos ){
    return idxs[pos] + num[$1[0]];
   } else if( idx + $1.length >= len ){
    return '';
   }else {
    return num[$1[0]]
   }
  }
 });
}

function ToString(n) {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)){
    return "数据非法";  //判断数据是否大于0
  }
  var unit = "千百拾亿千百拾万千百拾元角分", str = "";
  n += "00";
  var indexpoint = n.indexOf('.');  // 如果是小数，截取小数点前面的位数
  if (indexpoint >= 0){
    n = n.substring(0, indexpoint) + n.substr(indexpoint+1, 2);   // 若为小数，截取需要使用的unit单位
  }
  unit = unit.substr(unit.length - n.length);  // 若为整数，截取需要使用的unit单位
  for (var i=0; i < n.length; i++){
    str += "零壹贰叁肆伍陆柒捌玖".charAt(n.charAt(i)) + unit.charAt(i);  //遍历转化为大写的数字
  }
  return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整"); // 替换掉数字里面的零字符，得到结果
}

```

## 转换unicode
```js
getUnicode (theString) {
  let unicodeString = ''
  for (let i = 0; i < theString.length; i++) {
    let theUnicode = theString.charCodeAt(i).toString(16).toUpperCase()
    while (theUnicode.length < 4) {
      theUnicode = '0' + theUnicode
    }
    theUnicode = '\\u' + theUnicode
    unicodeString += theUnicode
  }
  return unicodeString
}
```

## 邮箱
/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/

