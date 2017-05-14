---
title: array
toc: true
abbrlink: 60cdc1b3
date: 2017-02-07 15:17:54
---

🏄🏄🏄🏄

## base
>// 栈方法
push 向数组末尾添加一个或多个元素,返回数组length
pop 删除数组最后一个元素
unshift
shift 删除数组第一个元素

>// 排序方法
reverse 颠倒顺序
sort 排序

>// 操作方法
concat 合并数组
slice 指定的位置开始删除指定的数组项，并且将删除的数组项构建成一个新数组 起始值1
splice 对一个数组做删除、插入和替换，默认1开始计算，返回删除数组

>// 位置方法
indexOf 从前向后查找从0开始
lastIndexOf 从后向前查找元素在数组中位置

>// 迭代方法
forEach
let b = a.filter((v) => v > 10) filter返回大于10的新数组
A.every((v) => v > 10) 全部数字大于10,返回true,有一个不满足就返回false
A.some((v) => v > 10) 有一个数字大于10就返回true
A.map(function(elem) { return '1' })




## reduce
```js
// callback函数接受4个参: 之前值、当前值、索引值以及数组本身
var sum = [1, 2, 3, 4].reduce((previous, current, index, array) => {
  return previous + current // return 返回的值被previous 接收
}, 10)
// 当设置初始值时,previous=10，current=1 否则 previous=1，current=2

// 初始设置
previous = initialValue = 1, current = 2

// 第一次迭代
previous = (1 + 2) =  3, current = 3

// 第二次迭代
previous = (3 + 3) =  6, current = 4

// 第三次迭代
previous = (6 + 4) =  10, current = undefined (退出)
```



## 判断数组
>Array.isArray()
arr.constructor === Array
arr instanceof Array
Object.prototype.toString.call(obj) === '[object Array]'
// 同理object Function    object RegExp



## 转换方法
[1,2,3].toString()
.valueOf
.toLocaleString
.join



## 数组转对象
>[0,1] {0:0,1:1}
.entries()



## 复制数组
>[].slice()



## 删除方法
>JavaScript删除数组中的项 delete vs splice
一个是设置为undefined，一个是真正的删除了



## 遍历区别
>forEach不能break和return
forin不仅遍历数组中元素,还遍历自定义和原型属性,而且顺序是随机的
es6 新增加了for-of,正确响应break,continue,return,




## 相关属性
```js
// hasOwnProperty
// 被非法占用
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
}
foo.hasOwnProperty('bar') // 总是返回 false
// 使用其它对象的 hasOwnProperty，并将其上下文设置为foo
({}).hasOwnProperty.call(foo, 'bar') // true

// 数组方法挂到字符串
Array.prototype.join.call('foo', '-')
Array.prototype.map.call('foo', (v) => { return v.toUpperCase() + '.' }).join('')

// reverse 无法用call挂到字符串对象上执行
a.split('').reverse().join('')


```
