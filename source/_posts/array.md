---
title: array
abbrlink: 60cdc1b3
date: 2017-02-07 15:17:54
---

push():向数组末尾添加一个或多个元素
unshift(): 向数组的开头添加一个或多个元素
pop(): 删除数组最后一个元素
shift(): 删除数组第一个元素
sort(): 给数组排序
reverse(): 颠倒数组项在数组中的位置
concat(): 合并数组
slice(): 指定的位置开始删除指定的数组项，并且将删除的数组项构建成一个新数组
splice(): 对一个数组做删除、插入和替换，从1开始计算，返回数组对象
indexOf(): 从前向后查找 从0开始
lastIndexOf(): 从后向前查找元素在数组中位置
forEach()
every() 循环在第一次return false后返回
some() 循环在第一次return true后返回
filter() 返回新数组,该数组内的元素符合回调函数的条件
map() 处理完数组中的元素后返回
reduce(): 数组中的每个值（从左到右）开始合并，最终为一个值
reduceRight(): 数组中的每个值（从右到左）开始合并，最终为一个值

### 判断数组
Array.isArray()
arr.constructor === Array
arr instanceof Array
Object.prototype.toString.call(obj) == "[object Array]”

### 转换方法
.toString
.valueOf
.toLocaleString
.join

### 栈方法
.push
.pop
.unshift
.shift

排序方法
.reverse
.sort

操作方法
.concat
.slice(1)
.splice

位置方法
.indexOf
.lastIndexOf

迭代方法
.forEach
let b = a.filter((v)=>v>10);filter返回大于10的新数组
let b = A.map((v)=>v+1)map返回新的对象,A不变
A.every((v)=>v>10)全部数字大于10,返回true,有一个不满足就返回false
A.some((v)=>v>10)有一个数字大于10就返回true

缩小方法
.reduce
.reduceRight
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]   Right[ 4, 5, 2, 3, 0, 1 ]

数组转对象 [0,1] {0:0,1:1}
.entries()

for区别
forEach不能break和return
forin不仅遍历数组中元素,还遍历自定义和原型属性,而且顺序是随机的
es6 新增加了for-of,正确响应break,continue,return,

判断
Object.prototype.toString.call(value)=="[object Array]”//同理object Function    object RegExp

if (typeof Array.prototype.forEach != "function") {
  Array.prototype.forEach = function (fn, context) {
    for (var k = 0, length = this.length; k < length; k++) {
      if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
        fn.call(context, this[k], k, this);
      }
    }
  };
}

### 复制数组

原生方法实现
Array.prototype.map = function(fn, context) {//arg没找到具体应用场景
    var i,arr = [],self;
    if (arguments.length > 1) self = context;
        for (i = 0; i < this.length; i++) {
            arr.push(fn.call(self, this[i], i, this));
        }
    return arr;
}
Array.prototype.some = function(fn, context) {
    var i, s = false;
    for (i = 0; i < this.length; i++) {
        if (fn.call(context, this[i])) {
            if (s === true) break;
            s = !!fn.call(context, this[i], i, this)
        };
    }
    return s;
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
    for(i=0;i<this.length;i++){
        fn.call(context,this[i],i,this) && r.push(this[i]);
    }
    return r;
}
Array.prototype.indexOf = function(el, lastIndex) {
    var i, index = -1;
    for (i = 0; i < this.length; i++) {
        if (i >= lastIndex && this[i] == el) {
            index = i;
            break;
        }
    }
    return index;
}
Array.prototype.lastIndex = function(el, lastIndex) {
    var k, index = -1,
        len = this.length,
        i = lastIndex * 1 || this.length - 1;
    for (k = len; k > -1; k--) {
        if (k <= i && this[k] == el) {
            index = k;
            break;
        }
    }
    return index;
}

未完成任务
// Array.prototype.reduce = function(callback, initialValue) {
//     var previous = initialValue,
//         k = 0,
//         length = this.length;
//     if (typeof initialValue === "undefined") {
//         previous = this[0];
//         k = 1;
//     }
//     if (typeof callback === "function") {
//         for (k; k < length; k++) {
//             this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
//         }
//     }
//     return previous;
// }

Array.prototype.reduceRight = function(callback, initialValue) {
    var length = this.length,
        k = length - 1,
        previous = initialValue;
    if (typeof initialValue === "undefined") {
        previous = this[length - 1];
        k--;
    }
    if (typeof callback === "function") {
        for (k; k > -1; k -= 1) {
            this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
        }
    }
    return previous;
}