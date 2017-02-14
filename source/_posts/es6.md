---
title: ES6
date: 2017-02-13 09:54:09
categories: javascript
---

### 对象的扩展运算符
```
// 解构赋值
const [a, ...b] = [1, 2, 3] // 1, [2, 3]
const {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4} // 1, 2, {a: 3, b: 4}

// 复制
const obj = {a: 3, b: 4} 
const obj2 = {...obj} // 等同 Object.assign({}, obj)

const arr = [1, 2, 3]
const arr2 = [...arr] // 等同 arr.slice()

// 用法
const num = [9, 5, 2, 7]
Math.min(...num)

[...document.querySelectorAll('div')]

const arg = function(...args) {}

```

