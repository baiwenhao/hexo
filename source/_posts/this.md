---
title: this
abbrlink: feee8227
date: 2017-04-15 20:16:55
tags:
---

###### this全面解析
每个函数的this是在调用时被绑定的，取决于调用的位置


## 默认绑定
```js
var a = 1
function foo() {
  console.log(this.a)
}
foo()
```


## 隐式绑定
```js
function foo() {
  console.log(this.a)
}
var obj = {
  a: 1,
  foo: foo
}
obj.foo()

// 隐式赋值
var a = '2'
function foo () {
  console.log(this.a)
}
function dofn(fn) {
  fn()
}
var obj = {
  a: 1,
  foo: foo
}
dofn(obj.foo)
```


## 显式绑定
```js
var obj = {
  a: 1
}
function foo () {
  console.log(this.a)
}
foo.call(obj)
```


## 硬绑定
```js
// 显式的强制绑定
var obj = { a: 2 }
function foo (something) {
  return this.a + something
}
var bar = function () {
  var arr = [].slice.call(arguments)
  return foo.apply(obj, arr)
}
var b = bar(1)
console.log(b)
setTimeout(bar, 100) // 无法改变
bar.call(window)
```


## new 对象过程
1.创建或者构造一个全新对象
2.执行prototype链接
3.新对象会绑定到函数调用的this
4.如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象
new会劫持所有普通函数并用构造对象的形式来调用它

## this优先级

```js
// 显式绑定优先于隐式绑定
function foo () {
  console.log(this.a)
}
var obj = {
  a: 1,
  foo: foo
}
var obj2 = {
  a: 2,
  foo: foo
}
obj.foo()
obj2.foo()
obj.foo.call(obj2)
obj2.foo.call(obj)

// new绑定比隐式绑定优先级高
function foo (name) {
  this.name = name
}
var obj = { // new 和他一毛钱关系都没有
  foo:foo
}
obj.foo('wenhao')
var bar = new obj.foo('haoke')
console.log(obj)
console.log(bar)

// new绑定比硬绑定优先级高
var foo = function (name) {
  this.name = name
}
var obj = {}
var fn = foo.bind(obj)
fn('wenhao')
var bar = new fn('haoke')
console.log(bar)
console.log(obj)
```

## 判断this
1.是否在new中调用，是就绑定到新创建的对象上
2.是否通过call或者apply(显式绑定)或者硬绑定，this就绑定到指定的对象
3.是否在某个上下文中调用，(隐式绑定)，this就绑定在上下文对象
4.默认绑定可能是undefined或者全局对象

## 软绑定
```js
function foo () {
  console.log('name:' + this.name)
}
var obj = { name: 'obj' }
var obj2 = { name: 'obj2' }
var obj3 = { name: 'obj3' }
var fooBJ = foo.softBind( obj )

fooBJ()
obj2.foo = foo.softBind( obj )
obj2.foo() // obj2

fooBJ.call(obj3) // obj3
setTimeout(obj2.foo, 10) // obj

// 实现方法
Function.prototype.softBind = function (obj) {
  var fn = this
  var curried = [].slice.call(arguments, 1)
  var bound = function () {
    return fn.apply(
      (!this || this === (window || global)) ? obj : this,
      curried.concat.apply(curried, arguments)
    )
  }
  bound.prototype = Object.create(fn.prototype)
  return bound
}
```

参考： 你不知道的javascript上卷



