---
title: ES6
abbrlink: d73c0d37
date: 2017-02-13 09:54:09
---

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

