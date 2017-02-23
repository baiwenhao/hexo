---
title: javascript-interview
toc: true
abbrlink: 8b672d54
date: 2017-02-16 18:36:16
tags:
---

## jquery
```js
jq 中event.preventDefault() 与 return false 的区别
jq 中return false相当于同时调用e.preventDefault 和 e.stopPropagation
要注意的是，在原生js中，return false仅仅相当于调用了e.preventDefault

jq中获取设置checkbox选中状态
$("#checkboxID").is(":checked")

// jq 1.6+
$("#checkboxID").prop("checked", true)
$("#checkboxID").prop("checked", false)

// jq 1.5 and below
$('#checkboxID').attr('checked','checked')
$('#checkboxID').removeAttr('checked')

// jq中终止ajax请求
xhr.abort()
要注意的是，在ajax请求未响应之前可以用xhr.abort()取消，
但如果请求已经到达了服务器端，这样做的结果仅仅是让浏览器不再监听这个请求的响应，
但服务器端仍然会进行处理。

```

## 字符转换
>16进制与10进制相互转换
var sHex=(255).toString(16);//ff
var iNum=parseInt("ff",16);//255

>JavaScript字符与ASCII码间的转换
console.log("\n".charCodeAt(0));//10
console.log(String.fromCharCode(65));//A

## 克隆对象
```js
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
```

## 渲染优化
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

## server状态码
>301永久重定向
302临时重定向
304未修改，从本地度缓存
404未找到
500服务器
favicon.ico 默认请求ico
response.setHeader(‘Cache-Control’, ‘public, max-age=3600’); //缓存一小时

## 闭包
###### 闭包域内声明的方法外部无法直接访问，但它可以访问外部的变量或方法，每声明一个函数,就产生一个域(函数栈)，每个域内部有个function scope内默认有个Global全局引用
###### 当一个函数包含另一个函数，子函数生命周期依附于父函数，子函数的function scope会产生一个closure对象属性，它包含子域对父域的所有引用，只要子函数存活其父函数就依旧存活，如果父函数存活期间对私有变量做了改变，那引用的子函数function scope的closure对象属性的内容也会发生变化,因为他们只是引用关系
```js
// 1
for(var i = 0;i<arr.length;i++) {
  /*
    声明一个匿名函数,若传进来的是基本类型则为值传递,故不会对实参产生影响,
    该函数对象有一个本地私有变量arg(形参) ,该函数的 function scope 的 closure 对象属性有两个引用,一个是 arr,一个是 i
    尽管引用 i 的值随外部改变 ,但本地私有变量(形参) arg 不会受影响,其值在一开始被调用的时候就决定了.
  */
  (function (arg) {
    arr[i].onclick = function () {  //onclick函数实例的 function scope 的 closure 对象属性有一个引用 arg,
      alert(arg)                  //只要 外部空间的 arg 不变,这里的引用值当然不会改变
    }
  })(i)                               //立刻执行该匿名函数,传递下标 i(实参)
}

// 2
for(var i = 0;i<arr.length;i++) {
  /*
    为当前数组项即当前 p 对象添加一个名为 i 的属性,值为循环体的 i 变量的值,
    此时当前 p 对象的 i 属性并不是对循环体的 i 变量的引用,而是一个独立p 对象的属性,属性值在声明的时候就确定了
    (基本类型的值都是存在栈中的,当有一个基本类型变量声明其等于另一个基本变量时,此时并不是两个基本类型变量都指向一个值,而是各自有各自的值,但值是相等的)
  */
  arr[i].i = i
  arr[i].onclick = function () {
    alert(this.i)
  }
}

// 3
/*
  与解决办法一有点相似但却有点不太相似.
  相似点:同样是增加若干个对应的闭包域空间用来存储下标
  不同点:解决办法一是在新增的匿名闭包空间内完成事件的绑定,而此例是将事件绑定在新增的匿名函数返回的函数上
  此时绑定的函数中的 function scope 中的 closure 对象的 引用 arg 是指向将其返回的匿名函数的私有变量 arg
 */
for(var i = 0; i<arr.length;i++) {
  arr[i].onclick = (function(arg) {
    return function () {
      alert(arg)
    }
  })(i)
}

// 4 解决思路与解决办法一相同
for(var i = 0; i<arr.length;i++) {
  (function() {
    var temp = i
    arr[i].onclick = function () {
      alert(temp)
    }
  })()
}

// 5 解决思路与解决办法三及四相同
for(var i = 0;i<arr.length;i++) {
  arr[i].onclick = (function () {
    var temp = i
    return function () {
      alert(temp)
    }
  })()
}

// 6 将下标添加为绑定函数的属性
for(var i = 0;i<arr.length;i++) {
  (arr[i].onclick = function () {
    alert(arguments.callee.i) // arguments 参数对象  arguments.callee 参数对象所属函数
  }).i = i
}

/*
7 通过 new 使用 Function 的构造函数 创建 Function 实例实现,由于传入的函数体的内容是字符串,
故 Function 得到的是一个字符串拷贝,而没有得到 i 的引用(这里是先获取 i.toString()然后与前后字符串拼接成一个新的字符串,
Function 对其进行反向解析成 JS 代码)
*/
for(var i = 0;i<arr.length;i++) {
  arr[i].onclick = new Function("alert("+i+");")
  // 每 new 一个 Function 得到一个 Function 对象(一个函数),有自己的闭包域
}

/* 8
直接通过 Function 返回一个函数
与解决办法七的不同之处在于:
  解决办法七使用 new,使用了 new,此时 Function 函数就被当成构造器可以用来构造一个 Function 实例返回
  当前解决办法没有使用 new ,即将 Function 函数当成一个函数,传入参数返回一个新函数;
  其实此处 new 与不 new 只是的区别在于:
    使用了 new 即 Function 函数充当构造器,由 JS 解析器生产一个新的对象,构造器内的 this 指向该新对象;
    不实用 new 即 Function 函数依旧是函数,由函数内部自己生产一个实例返回.
 */
for(var i = 0;i<arr.length;i++) {
    arr[i].onclick = Function("alert("+i+");")
}

// 9 使用严格模式,否则报错
// SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
for(var i = 0;i<arr.length;i++){
  let j = i; // 创建一个块级变量
  arr[i].onclick = function () {
      alert(j)
  }
}
```





