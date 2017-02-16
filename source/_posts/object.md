---
title: object
categories: javascript
abbrlink: af01aeda
date: 2017-02-07 15:33:37
---

.propertyIsEnumerable()
构造函数.propertyIsEnumerable('属性’)
是否可枚举属性，原型对象始终返回为false

Object.defineProperty(o,'age',…);
Object.seal(o)不可以拓展不可以删除属性(configurable:false),可以修改属性值 Object.isSealed(o)用于判断
Object.freeze(o)完全冻结

Object.defineProperty
```
var o = {};
Object.defineProperty(o, 'age', {
    value: 24, /默认false
    writable: false, // 只读
    enumerable: false, // 不可枚举
    configurable: false // 不可删除
});
//get和set不能和value、writable同时使用
get:返回property的值得方法
set：为property设置值的方法

Object.getOwnPropertyDescriptor(o,'age');
Object.getOwnPropertyNames(o);

### Object.prototype.hasOwnProperty()
has.call(obj, key)
```

### Object.getPrototypeOf(obj)
检索现有对象的原型对象 Object.getPrototypeOf(p) === app.prototype;

### Object.getOwnPropertyNames()
取对象的key返回数组,类似Object.keys()

### Object.create(Object)
继承原型对象返回一个新对象,用于继承，
a.prototype = b.prototype 只是引用

### Object.getOwnPropertyNames(o)
获取属性名，不包括property，返回数组

### Object.getOwnPropertyDescriptor(o,’age’)
获取属性的property

Object.getOwnPropertyNames();
Object.getOwnPropertyNames(app);//实例,原型,构造
//[ 'length', 'name', 'arguments', 'caller', 'prototype' ]
无论是否可以枚举,当前对象的属性

### Object.setPrototypeOf(a.prototype, b.prototype)
类似Object.create

### .isPrototypeOf();
构造函数.prototype.isPrototypeOf(实例)
var re = /^\s*/;
var bIsptt = RegExp.prototype.isPrototypeOf(re); //true

### Object.preventExtensions(o)
不允许设置新属性

### ECMAScript :解释器，翻译
DOM :Document Object Model
BOM  :Browser  Object Model
navigator.userAgent浏览器版本号

### 不可扩展对象
Object.preventExtensions(person);
Object.isExtensible(person);

### 密封的对象
Object.seal(person);
Object.isSealed(person);

### 冻结的对象
Object.freeze(person);
Object.isFrozen(person);

http://www.cnblogs.com/dolphinX/p/3348467.html
https://segmentfault.com/a/1190000004346467


### 继承
Object.setPrototypeOf(a.prototype, b.prototype)   // es6
构造函数将对象a的__proto__指向对象b
对象的话将把b的方法指向到a的__proto__
Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto
  return obj
}

a.prototype = new b()
将对象cat的__proto__指向到dog写实例对象

a.call(this)
构造函数b里面执行,将继承a的属性

a.prototype = Object.create(b.prototype)
创建一个新对象,并把原型指向b.prototype返回给a的原型对象
相反a.prototype = b.prototype只是一个引用


### 匈牙利命名法：
通过在变量名前面添加相应小写字母的符号标示作为前缀，标示出变量的作用域，类型等，前缀后面是一个或多个单词组合，单词描述了变量的用途，如i表示的是整数，s表示的是字符串。示例：
var sUserName = 'css8';
var iCount = 0;

### 骆驼式/驼峰命名法
混合使用大小写字母来构成变量的名称。示例：
var printLoadTemplates;//名称首字母小写，其他每个单词的首字母大写
var print_load_templates;//下划线法，每个单词用一个下划线标记

### 帕斯卡命名法
和驼峰命名法类似，但是，驼峰第一个单词首字母小写，而帕斯卡命名法第一个单词首字母也大写。

