---
title: meta
toc: true
abbrlink: 77c0bb0b
date: 2017-02-17 10:09:11
tags:
---

## 基础设置
```
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="keywords" content="爱屋吉屋,二手房,租房,房屋买卖,房产中介">
<meta name="description" content="爱屋吉屋，互联网房产中介!">
```

## h5页面自适应设备宽度，禁止缩放
```js
width    设置viewport宽度，为一个正整数，或字符串 'device-width'
height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
initial-scale    默认缩放比例，为一个数字，可以带小数
minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
user-scalable    是否允许手动缩放
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

## 动态设置
```js
var phoneWidth =  parseInt(window.screen.width)
var phoneScale = phoneWidth / 640
var ua = navigator.userAgent
if (/Android (\d+\.\d+)/.test(ua)) {
    var version = parseFloat(RegExp.$1)
    if(version>2.3){
        document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">')
    }else{
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">')
    }
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">')
}
```

## 其他
```
// 设置缩放
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,minimal-ui" />

// 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果）
<meta name="apple-mobile-web-app-capable" content="yes" />

// 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent ）
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

// IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别
<meta name="format-detection" content="telephone=no, email=no" />

// 启用360浏览器的极速模式(webkit)
<meta name="renderer" content="webkit">

// 避免IE使用兼容模式
<meta http-equiv="X-UA-Compatible" content="IE=edge">

// 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓
<meta name="HandheldFriendly" content="true">

// 微软的老式浏览器
<meta name="MobileOptimized" content="320">

// uc强制竖屏
<meta name="screen-orientation" content="portrait">

// QQ强制竖屏
<meta name="x5-orientation" content="portrait">

// UC强制全屏
<meta name="full-screen" content="yes">

// QQ强制全屏
<meta name="x5-fullscreen" content="true">

// UC应用模式
<meta name="browsermode" content="application">

// QQ应用模式
<meta name="x5-page-mode" content="app">

// windows phone 点击无高光
<meta name="msapplication-tap-highlight" content="no">
```
