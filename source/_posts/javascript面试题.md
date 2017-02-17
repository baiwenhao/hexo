---
title: javascript面试题
abbrlink: 8b672d54
date: 2017-02-16 18:36:16
tags:
---

jQuery中event.preventDefault() 与 return false 的区别
jQuery中return false相当于同时调用e.preventDefault 和 e.stopPropagation。
要注意的是，在原生js中，return false仅仅相当于调用了e.preventDefault。

jQuery中获取设置checkbox选中状态
$("#checkboxID").is(":checked");
//jQuery 1.6+
$("#checkboxID").prop("checked", true);
$("#checkboxID").prop("checked", false);
//jQuery 1.5 and below
$('#checkboxID').attr('checked','checked')
$('#checkboxID').removeAttr('checked')

jQuery中终止ajax请求
xhr.abort()
要注意的是，在ajax请求未响应之前可以用xhr.abort()取消，但如果请求已经到达了服务器端，这样做的结果仅仅是让浏览器不再监听这个请求的响应，但服务器端仍然会进行处理。

JavaScript删除数组中的项 delete vs splice
一个是设置为undefined，一个是真正的删除了。

JavaScript中16进制与10进制相互转换
var sHex=(255).toString(16);//ff
var iNum=parseInt("ff",16);//255

JavaScript字符与ASCII码间的转换
console.log("\n".charCodeAt(0));//10
console.log(String.fromCharCode(65));//A

jQuery中each跟map的区别
each跟map都可以用来遍历Array或Object，区别是each不改变原来的Array或Object，map是操作给定的Array或Object返回一个新Array或Object。
map会占用更多的内存，所以如果只是遍历建议用each。

判断一个对象是否为数组
Object.prototype.toString.call(obj) == "[object Array]";
不能用instanceof 和 constructor来判断

通过原型继承创建一个新对象
function inherit(p){
  if(!p){
    throw TypeError("p is not an object or null");
  }
    if(Object.create){
        return Object.create(p);
    }
    var t=typeof p;
    if(t !== "object" && t !== "function"){
        throw TypeError("p is not an object or null");
    }
    function f(){};
    f.prototype=p;
    return new f();
}

JavaScript中克隆对象
function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;
    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, var len = obj.length; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}

##### 渲染优化
```
1.禁止使用iframe（阻塞父文档onload事件）
2.禁止使用gif图片实现loading效果（降低CPU消耗，提升渲染性能）
使用CSS3代码代替JS动画；
开启GPU加速；
使用base64位编码图片(不小图而言，大图不建议使用)
对于一些小图标，可以使用base64位编码，以减少网络请求。但不建议大图使用，比较耗费CPU。小图标优势在于：
    1.减少HTTP请求；
    2.避免文件跨域；
    3.修改及时生效；
```

##### server状态码
```
301永久重定向
302临时重定向
304未修改，从本地度缓存
404未找到
500服务器
favicon.ico 默认请求ico
response.setHeader(‘Cache-Control’, ‘public, max-age=3600’); //缓存一小时

```






