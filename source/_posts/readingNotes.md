---
title: readingNotes
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


## 作用域嵌套
根据名称超找变量的规则，当一个作用域嵌套在另一个作用域中，就发生了作用域的嵌套，在当前作用域无法找到某个变量，引擎就会在外层作用域继续查找，直到找到该变量或抵达全局作用域为止
块 = {}

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





