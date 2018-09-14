---
title: js
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
对变量赋值,使用LHS查询
获取变量的值,使用RHS查询

## 作用域
作用域是根据名称超找变量的规则
嵌套作用域：当一个作用域嵌套在另一个作用域中，就发生了作用域的嵌套，在当前作用域无法找到某个变量，引擎就会在外层作用域继续查找，直到找到该变量或抵达全局作用域为止
函数作用域：属于这个函数的全部变量都可以在整个函数的范围内使用及复用
词法作用域：书写阶段或者定义时确定的,而动态作用域实在运行时确定的

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




## 属性描述符
```js
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
  writable: false, // 是否可修改
  enumerable: false, // 是否可枚举 (可以出现在对象属性的遍历中)
  configurable: false // 是否可配置,false是单向操作无法撤销
})
```


## 禁止扩展
```js
var myObj = { a: 2 }
Object.preventExtensions(myObj)
```




## 密封 and 冻结
Object.seal() // 会创建一个密封对象,在现有对象上调用 Object.preventExtensions()把现有属性标记为configurable: false
不能添加,删除可以修改
冻结是调用Object.freeze()，是在现有对象上调用Object.seal()




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
console.log(Object.getOwnPropertyNames(obj)) // ['b'](返回所有属性)
```




## Object 对象
```js
// 寄生继承
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

```js
// 检索现有对象的原型对象
Object.getPrototypeOf(目标对象的原型对象) === app.prototype;
原型.isPrototypeOf(实例)

// 把E委托到D
Object.setPrototypeOf(E, D) // 返回E对象 E的proto指向D
```




## Number
```js
// 截取长度
10..toFixed(2)
10 .toFixed(2)
10..toPrecision(2)

// 浮点数比大小 polyfill
if (!Number.EPSILON) {
  Number.EPSILON = Math.pow(2, -52)
}
function num (n1, n2) {
  return Math.abs(n1, n2) < Number.EPSILON
}

// 最大整数
Number.MAX_SAFE_INTEGER

// 最小整数
Number.MIN_SAFE_INTEGER

// 整数判断
Number.isInteger(42.000) // true
n % 1 === 1

// 判断两个值是否绝对相等 (特殊的相对比较)
Object.is(0, -0)
```

### Function and Object
http://www.cnblogs.com/shuiyi/p/5343399.html

### 编码 解码
http://www.cnblogs.com/shuiyi/p/5277233.html#3979662

## computed
// 这两者可以将浮点转成整型且效率方面要比同类的parseInt,Math.round 要快。在处理像素及动画位移等效果的时候会很有用
var foo = (12.4 / 4.13) | 0;//结果为3
var bar = ~~(12.4 / 4.13);//结果为3

var a=1,b=2;a=[b,b=a][0];




