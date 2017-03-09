---
title: fe-interview
toc: true
abbrlink: 8b672d54
date: 2017-02-16 18:36:16
tags:
---

## seo
1.合理的title,description,keywords
2.语义化html标签,符合w3c规范
3.重要内容放前面，非重要的内容用js输出
4.搜索引擎不抓iframe内容
5.非装饰性图片加alt
6.提高网站加载速度

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
  if (null == obj || "object" != typeof obj) return obj
  // Handle Date
  if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  // Handle Array
  if (obj instanceof Array) {
      var copy = []
      for (var i = 0, var len = obj.length; i < len; ++i) {
        copy[i] = clone(obj[i])
      }
      return copy
  }
  // Handle Object
  if (obj instanceof Object) {
    var copy = {}
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr])
    }
    return copy
  }
  throw new Error("Unable to copy obj! Its type isn't supported.")
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
for(var i = 0;i<arr.length;i++) {
  (function (arg) {
    // onclick函数实例的 function scope 的 closure 对象属性有一个引用 arg
    arr[i].onclick = function () {
      // 只要 外部空间的 arg 不变,这里的引用值当然不会改变
      alert(arg)
    }
  })(i) // 立刻执行该匿名函数,传递下标 i(实参)
}
```

```js
for(var i = 0;i<arr.length;i++) {
  arr[i].i = i
  arr[i].onclick = function () {
    alert(this.i)
  }
}
```

```js
for(var i = 0; i<arr.length;i++) {
  arr[i].onclick = (function(arg) {
    return function () {
      alert(arg)
    }
  })(i)
}
```

```js
for(var i = 0; i<arr.length;i++) {
  (function() {
    var temp = i
    arr[i].onclick = function () {
      alert(temp)
    }
  })()
}
```

```js
for(var i = 0;i<arr.length;i++) {
  arr[i].onclick = (function () {
    var temp = i
    return function () {
      alert(temp)
    }
  })()
}
```

```js
for(var i = 0;i<arr.length;i++) {
  (arr[i].onclick = function () {
    alert(arguments.callee.i) // arguments 参数对象  arguments.callee 参数对象所属函数
  }).i = i
}
```

```js
for(var i = 0;i<arr.length;i++) {
  arr[i].onclick = new Function("alert("+i+");")
  // 每 new 一个 Function 得到一个 Function 对象(一个函数),有自己的闭包域
}
```

```js
for(var i = 0;i<arr.length;i++) {
    arr[i].onclick = Function("alert("+i+");")
}
```

```js
for(var i = 0;i<arr.length;i++){
  let j = i; // 创建一个块级变量
  arr[i].onclick = function () {
      alert(j)
  }
}

// 自执行的匿名函数
+function(){}()
(function(){}())
```




## typeof
通常同来检测一个对象是否已经定义或者是否已经赋值
```js
Value               Class      Type
-------------------------------------
"foo"               String     string
new String("foo")   String     object
1.2                 Number     number
new Number(1.2)     Number     object
true                Boolean    boolean
new Boolean(true)   Boolean    object
new Date()          Date       object
new Error()         Error      object
[1,2,3]             Array      object
new Array(1, 2, 3)  Array      object
new Function("")    Function   function
/abc/g              RegExp     object (function in Nitro/V8)
new RegExp("meow")  RegExp     object (function in Nitro/V8)
{}                  Object     object
new Object()        Object     object
```
Class 一列表示对象的内部属性 [[Class]] 的值,只可能是下面字符串中的一个
Arguments, Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String.

强烈推荐使用 Object.prototype.toString
```js
function is(type, obj) {
  var clas = Object.prototype.toString.call(obj).slice(8, -1)
  return obj !== undefined && obj !== null && clas === type
}
is('String', 'test') // true
is('String', new String('test')) // true

Object.prototype.toString.call([])    // "[object Array]"
Object.prototype.toString.call({})    // "[object Object]"
Object.prototype.toString.call(2)    // "[object Number]"
```




## instanceof
##### 比较自定义的对象时才有意义，如果用来比较内置类型，将会和 typeof 操作符 一样用处不大。
比较自定义对象
```js
function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

// 如果仅仅设置 Bar.prototype 为函数 Foo 本身，而不是 Foo 构造函数的一个实例
Bar.prototype = Foo;
new Bar() instanceof Foo; // false
```
比较内置对象
```js
new String('foo') instanceof String; // true
new String('foo') instanceof Object; // true

'foo' instanceof String; // false
'foo' instanceof Object; // false
```
instanceof 操作符应该仅仅用来比较来自同一个 JavaScript 上下文的自定义对象




## 类型转换
javascript是弱类型语言，所以会在可能的情况下应用强制类型转换
```js
// 下面的比较结果是：true
new Number(10) == 10; // Number.toString() 返回的字符串被再次转换为数字

10 == '10';           // 字符串被转换为数字
10 == '+10 ';         // 同上
10 == '010';          // 同上
isNaN(null) == false; // null 被转换为数字 0
                      // 0 当然不是一个 NaN（译者注：否定之否定）

// 下面的比较结果是：false
10 == 010;
10 == '-10';
```
内部类型的构造函数
```js
new Number(10) === 10;     // False, 对象与数字的比较
Number(10) === 10;         // True, 数字与数字的比较
new Number(10) + 0 === 10; // True, 由于隐式的类型转换
```
最好把选择比较的值显示的转换为三中可能的类型之一
```js
'' + 10 === '10'
+ '10' === 10
'+010' === 10
Number('010') === 10
parseInt('010', 10) === 10
```
转换布尔型
```js
!!'foo'   // true
!!''      // false
!!'0'     // true
!!'1'     // true
!!'-1'    // true
!!{}      // true
!!true    // true
```




## eval
##### 为什么不要使用eval
eval 函数会在当前作用域中执行一段 JavaScript 代码字符串
```js
var foo = 1;
function test() {
    var foo = 2
    eval('foo = 3')
    return foo
}
test() // 3
foo // 1
```
但是 eval 只在被直接调用并且调用函数就是 eval 本身时，才在当前作用域中执行
```js
var foo = 1
function test() {
    var foo = 2
    var bar = eval
    bar('foo = 3')
    return foo;
}
test() // 2
foo // 3
```
上面的代码等价于在全局作用域中调用 eval，和下面两种写法效果一样：
```js
// 写法一：直接调用全局作用域下的 foo 变量
var foo = 1;
function test() {
    var foo = 2;
    window.foo = 3;
    return foo;
}
test(); // 2
foo; // 3

// 写法二：使用 call 函数修改 eval 执行的上下文为全局作用域
var foo = 1;
function test() {
    var foo = 2;
    eval.call(window, 'foo = 3');
    return foo;
}
test(); // 2
foo; // 3
```
##### 伪装的eval
定时函数 setTimeout 和 setInterval 都可以接受字符串作为它们的第一个参数。
这个字符串总是在全局作用域中执行，因此 eval 在这种情况下没有被直接调用
```js
function foo() {
  // 将会被调用
}
function bar() {
  function foo() {
    // 不会被调用
  }
  setTimeout('foo()', 1000)
}
bar()
```
不要在调用定时器函数时，为了向回调函数传递参数而使用字符串的形式
```js
function foo(a, b, c) {}

// 不要这样做
setTimeout('foo(1,2, 3)', 1000)

// 可以使用匿名函数完成相同功能
setTimeout(function() {
    foo(1, 2, 3);
}, 1000)
```
应该避免使用 setInterval，因为它的定时执行不会被 JavaScript 阻塞
```js
function foo(){
  // 阻塞执行 1 秒
  setTimeout(foo, 100)
}
foo()
```



## locaion



## Date
```js
// 输出星期几？
var key = ['日', '一', '二', '三', '四', '五', '六']
var date = new Date()
console.log('今天是星期' + key[date.getDay()])


```



## url





## Math
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow




面试题
##### http://javascript-puzzlers.herokuapp.com/
##### https://github.com/qiu-deqing/FE-interview#%E7%BC%96%E5%86%99javascript%E6%B7%B1%E5%BA%A6%E5%85%8B%E9%9A%86%E5%87%BD%E6%95%B0deepclone



