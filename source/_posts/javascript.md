---
title: javascript
abbrlink: aaa991c7
date: 2017-04-11 21:22:05
tags:
---

## LSH RHS
赋值操作的目标是谁LHS
谁是赋值操作的源头RHS

```js
// 对a的引用是RHS引用,这里并没有对a赋值,而是查找取得a的值传递给log
console.log(a)

// 对a是LHS引用,实际并不关心当前值是什么,只是想要为=2这个赋值操作找个目标
a=2
```
查找变量的目的是对变量赋值,那么就会使用LSH查询;
如果目的是获取变量的值,就会使用RHS查询;


## 作用域
根据名称超找变量的一套规则
作用域嵌套:当一个作用域嵌套在另一个作用域中，就发生了作用域的嵌套，在当前作用域无法找到某个变量，引擎就会在外层作用域继续查找，直到找到该变量或抵达全局作用域为止
块 = {}
函数作用域：属于这个函数的全部变量都可以在整个函数的范围内使用及复用

## IIFE
```js
(function IIFE(global) {
  ...
})(window)

(function () {...}())

var a = 2
(function IIFE(def) {
  def(window)
})(function (global) {
  var a = 1
  console.log(a)
  console.log(global.a)
})
```

## 闭包
当函数而已记住并访问所在作用域,函数在当前作用域外执行,就产生了闭包
try{throw 2;}catch(err){console.log(2)}

## defineProperty
```js
// 属性描述符
var obj = { a: 2 }
var conf = Object.getOwnPropertyDescriptor( obj, 'a' ) // 获取
{
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true
}

var o = {};
Object.defineProperty(o, 'age', { // 设置
  value: 24,
  writable: false, // 是否可写
  enumerable: false, // 是否可枚举 (可以出现在对象属性的遍历中)
  configurable: false // 是否可配置
})

扩展vue内置对象
Object.definePrototype(Vue.prototype, '$moment', { value: moment })
// 默认只读,能保护引入的库不被重写
也可以 Vue.prototype.$moment = moment 但是可以被修改啥的
```

## 禁止扩展
```js
var myObj = { a: 2 }
Object.preventExtensions(myObj)
// Object.isExtensible(person);
```


## 密封
```js
Object.seal(o)不可以拓展不可以删除属性(configurable:false),可以修改属性值
Object.isSealed(o)用于判断

```


## 冻结
```js
Object.freeze(person);
Object.isFrozen(person);

http://www.cnblogs.com/dolphinX/p/3348467.html
https://segmentfault.com/a/1190000004346467
```


## Getter 和 Setter
访问描述符和数据描述符，对于描述符来说，js会忽略他们的value和writable特性
取而代之的是set和get，还有configurable和enumerable
```js
var obj = {
  get a () {
    return this._a
  },
  set a (v) {
    this._a = v * 2
  }
}
obj.a = 2 // 4
```

## 枚举
```js
var obj = {}
Object.defineProperty(obj, 'b', {
  value: 5,
  enumerable: false
})
console.log(('b' in obj)) // true (in回去查找原型)
console.log(Object.keys(obj)) // [](返回可枚举属性)
console.log(Object.propertyIsEnumerable('b')) // false (返回所有属性)
console.log(Object.getOwnPropertyNames(obj)) // ['b'](返回所有属性) 获取属性名，不包括property，返回数组

var has = Object.prototype.hasOwnProperty
has.call(obj, key) // 是否在对象属性上

构造函数.propertyIsEnumerable(属性)
```


## 寄生继承
```js
function Vehicle () {
  this.engines = 'wenhao'
}
Vehicle.prototype.ignition = function () {
  console.log('my engine')
}
Vehicle.prototype.drive = function () {
  this.ignition()
  console.log('setting')
}

function Car () {
  var car = new Vehicle()
  car.wheels = 4
  var vehDrive = car.drive
  car.drive = function () {
    vehDrive.call(this)
    console.log('rolling')
  }
  return car
}
```

## 原型对象
对象中的一个内部链接引用另一个对象

## Object 对象

```js
// 检索现有对象的原型对象
Object.getPrototypeOf(目标对象的原型对象) === app.prototype;
原型.isPrototypeOf(实例)
var re = /^\s*/;
var bIsptt = RegExp.prototype.isPrototypeOf(re); //true

// 把E委托到D
Object.setPrototypeOf(E, D) // 返回E对象 E的proto指向D 类似Object.create
构造函数将对象a的__proto__指向对象b
对象的话将把b的方法指向到a的__proto__
Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto
  return obj
}

a.prototype = new b()
将对象cat的__proto__指向到dog写实例对象

a.call(this)
构造函数b里面执行,将继承a的属性

a.prototype = Object.create(b.prototype)
创建一个新对象,并把原型指向b.prototype返回给a的原型对象
相反a.prototype = b.prototype只是一个引用
```

## 匈牙利命名法：
通过在变量名前面添加相应小写字母的符号标示作为前缀，标示出变量的作用域，类型等，前缀后面是一个或多个单词组合，单词描述了变量的用途，如i表示的是整数，s表示的是字符串。示例：
var sUserName = 'css8';
var iCount = 0;

## 骆驼式/驼峰命名法
混合使用大小写字母来构成变量的名称。示例：
var printLoadTemplates;//名称首字母小写，其他每个单词的首字母大写
var print_load_templates;//下划线法，每个单词用一个下划线标记

## 帕斯卡命名法
和驼峰命名法类似，但是，驼峰第一个单词首字母小写，而帕斯卡命名法第一个单词首字母也大写。

```














