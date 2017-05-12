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
Array.prototype.reduce = function(callback, initialValue) {}
Array.prototype.reduceRight = function(callback, initialValue) {}
```

## map
```js
let b = A.map((v) => v + 1) map 返回新的对象,A不变
```

```js
var ary = Array(3);
ary[0]=2
ary.map(function(elem) { return '1'; });
```

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
```




## array
```js
function unique(array) {
  var tmp = []
  for(var i = 0;i < array.length; i++) {
    if (n.indexOf(array[i]) == -1) n.push(array[i])
  }
  return tmp
}
```

```
// 利于对象不重复的特性
Array.prototype.distinct = function () {
  var arr = this,
  i,
  obj = {},
  result = [],
  len = arr.length;
  for (i = 0; i< arr.length; i++){
    if (!obj[arr[i]]) {    //如果能查找到，证明数组元素重复了
      obj[arr[i]] = 1
      result.push(arr[i])
    }
  }
  return result
}
```

```
// 双层循环，外层循环元素，内层循环时比较值
Array.prototype.distinct = function(){
  var arr = this,
  result = [],
  i,
  j,
  len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        j = ++i
      }
    }
    result.push(arr[i])
  }
  return result
}
```

```
// 数组递归去重
Array.prototype.distinct = function (){
  var arr = this,
      len = arr.length

  arr.sort(function(a,b) { // 对数组进行排序才能方便比较
    return a - b
  })
  function loop(index) {
    if(index >= 1) {
      if(arr[index] === arr[index-1]) {
        arr.splice(index,1)
      }
      loop(index - 1) // 递归loop函数进行去重
    }
  }
  loop(len-1)
  return arr
}
```

```
// 利用indexOf以及forEach
Array.prototype.distinct = function (){
  var arr = this,
      result = [],
      len = arr.length
  arr.forEach(function(v, i ,arr) { // 这里利用map，filter方法也可以实现
    var bool =  arr.indexOf(v, i+1) // 从传入参数的下一个索引值开始寻找是否存在重复
    if (bool === -1) {
      result.push(v)
    }
  })
  return result
}
```

```
// 利用ES6的set
function dedupe(array){
    return Array.from(new Set(array));
}
dedupe([1,1,2,3]) //[1,2,3]
```

```
// 拓展运算符(…)内部使用for…of循环
let arr = [3,5,2,2,5,5];
let unique = [...new Set(arr)];    //[3,5,2]
```


