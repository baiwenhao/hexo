---
title: Axios源码
abbrlink: a09486d2
date: 2017-06-23 10:12:01
tags:
---


## util.js

工具类里全是自己封装的函数，没有任何es5-es6的语法

```js
module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
}
```

is系列用于判断对象数据类型，统一提取toString方法，通过call动态绑定到对象上并执行，对比对象的字符串形式返回true和false

```js
var toString = Object.prototype.toString
```

为什么要提取toString函数呢 ？
内置对象均来自Object，所以都可以执行该方法，但是内置对象们都重写了toString函数，使之更适合自身的功能需要

```js
// 数组
var array = [1, 2]
array.toString() // '1,2'

// 日期
var date = new Date(2017, 6, 23, 11, 9, 9, 100)
date.toString() // Sun Jul 23 2017 11:09:09 GMT+0800 (CST) (中国标准时间)

// 数字
var num =  59.9
num.toString() // 59.9

// 布尔
var bool = true
bool.toString() // true

// Object
var obj = {name: "张三", age: 18}
obj.toString() // [object Object]

```

剩下forEach，merge，extend，trim 函数

```js
// 可遍历数组或对象，回调参数依次是属性值，下标或属性名，原始对象
function forEach (obj, fn) {
  if (obj === null || typeof obj === 'undefined') return
  if (typeof obj !== 'object' && !isArray(obj)) obj = [obj]
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj)
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj)
      }
    }
  }
}
// 遍历b，当b有function时就把this绑到第三个对象上，并覆盖到a对象
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg)
    } else {
      a[key] = val
    }
  })
  return a
}

// 合并对象，返回新对象
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {}
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val) // 递归合并子对象
    } else {
      result[key] = val
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue) // 逐个遍历，并添加到result对象里
  }
  return result
}

// 去掉左右空格
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '')
}
```

眼尖的同学会发现extend函数还用到bind函数

```js
module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    return fn.apply(thisArg, args)// fn函数内部this指向thisArg，再用函数包裹并返回，参数个数不固定，因此遍历成数组传入apply执行并返回改函数
  }
}
```

util模块的方法在其他模块里多次复用，因此要搞懂

## default.js

```js
// 最终导出的对象如下
{
  adapter: [Function: httpAdapter],
  transformRequest: [
    [Function: transformRequest]
  ],
  transformResponse: [
    [Function: transformResponse]
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: [Function: validateStatus],
  headers: {
    common: { Accept: 'application/json, text/plain, */*' },
    delete: {},
    get: {},
    head: {},
    post: { 'Content-Type': 'application/x-www-form-urlencoded' },
    put: { 'Content-Type': 'application/x-www-form-urlencoded' },
    patch: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
}
```

##


