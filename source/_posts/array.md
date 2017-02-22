---
title: Array
toc: true
abbrlink: 60cdc1b3
date: 2017-02-07 15:17:54
---

## 基础方法
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
slice 指定的位置开始删除指定的数组项，并且将删除的数组项构建成一个新数组
splice 对一个数组做删除、插入和替换，从1开始计算，返回数组对象

>// 位置方法
indexOf 从前向后查找从0开始
lastIndexOf 从后向前查找元素在数组中位置

>// 迭代方法
forEach
let b = a.filter((v) => v > 10) filter返回大于10的新数组
let b = A.map((v) => v + 1) map 返回新的对象,A不变
A.every((v) => v > 10) 全部数字大于10,返回true,有一个不满足就返回false
A.some((v) => v > 10) 有一个数字大于10就返回true

>// 缩小方法
reduce
reduceRight
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b)
})
flattened is [0, 1, 2, 3, 4, 5]
Right[ 4, 5, 2, 3, 0, 1 ]

## 判断数组
>Array.isArray()
arr.constructor === Array
arr instanceof Array
Object.prototype.toString.call(obj) === '[object Array]'
// 同理object Function    object RegExp

## 转换方法
>.toString
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

## 原生方法实现
```js
Array.prototype.map = function(fn, context) {//arg没找到具体应用场景
    var i,arr = [],self = this
    if (arguments.length > 1) self = context
        for (i = 0; i < this.length; i++) {
            arr.push(fn.call(self, this[i], i, this));
        }
    return arr
}
Array.prototype.some = function(fn, context) {
    var i, s = false
    for (i = 0; i < this.length; i++) {
        if (fn.call(context, this[i])) {
            if (s === true) break
            s = !!fn.call(context, this[i], i, this)
        }
    }
    return s
};
Array.prototype.every = function(fn, context) {
    var i, s = true;
    for (i = 0; i < this.length; i++) {
        if (s === false) break;
        s = !!fn.call(context, this[i], i, this)
    }
    return s;
}
Array.prototype.filter= function(fn,context){
    var i,r=[];
    for(i=0; i < this.length; i++) {
        fn.call(context,this[i],i,this) && r.push(this[i]);
    }
    return r
}
Array.prototype.indexOf = function(el, lastIndex) {
    var i, index = -1
    for (i = 0; i < this.length; i++) {
        if (i >= lastIndex && this[i] == el) {
            index = i
            break
        }
    }
    return index
}
Array.prototype.lastIndex = function(el, lastIndex) {
    var k, index = -1,
        len = this.length,
        i = lastIndex * 1 || this.length - 1
    for (k = len; k > -1; k--) {
        if (k <= i && this[k] == el) {
            index = k
            break
        }
    }
    return index
}

Array.prototype.reduce = function(callback, initialValue) {

}

Array.prototype.reduceRight = function(callback, initialValue) {

}
```


