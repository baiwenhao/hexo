---
title: es6
abbrlink: d73c0d37
date: 2017-02-13 09:54:09
---

## var let const
var 声明的变量，作用域在该语句所在的函数内，存在变量提升
let 声明的变量，作用域在该语句所在的代码块内，不存在变量提升
const 声明的是常量，在后面的代码中不可以再次赋值

var 和 let 只是定义的域不同，而 const 和 let 定义域是相同的，而const 全称是Constant 常量，如果定义的是地址，可以修改 Object 里的内容，但不可以修改指向的地址


## 扩展运算符
```js
// 解构赋值
const [a, ...b] = [1, 2, 3] // 1, [2, 3]
const {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4} // 1, 2, {a: 3, b: 4}

// 复制 Object and Array
const obj = {a: 3, b: 4}
const obj2 = {...obj} // 等同 Object.assign({}, obj)

const arr = [1, 2, 3]
const arr2 = [...arr] // 等同 arr.slice()

// Math函数 任何函数参数上进行扩展
const num = [9, 5, 2, 7]
Math.min(...num)
const arg = function(...args) {}

// arguments and NodeList 转 Array
[...document.querySelectorAll('div')]
[].slice.call(list)
```
// https://github.com/creeperyang/blog/issues/21




## for of
遍历数据结构（数组，对象）中的值，for...of会寻找内置或自定义@@iterator对象并调用它的next()方法来遍历数据值
```js
var a = [1,2] // 数组有内置的 @@iterator
var it = a[Symbol.iterator]()
log(it.next()) // { value: 1, done: false }
log(it.next()) // { value: 2, done: false }
log(it.next()) // { value: undefined, done: true }
```

自定义内置对象
```js
var obj = {
  a: 1,
  b: 2
}

Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var o = this
    var idx = 0
    var ks = Object.keys(o)
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        }
      }
    }
  }
})

var it = obj[Symbol.iterator]()
console.log(it.next()) // { value: 1, done: false }
console.log(it.next()) // { value: 2, done: false }
console.log(it.next()) // { value: undefined, done: true }

for (v of obj) {
  console.log(v)
}
```




## collections
var arr = Array.from( arguments ) // 转数组



















