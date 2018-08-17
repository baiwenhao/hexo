---
title: videojs
abbrlink: 874da46b
date: 2018-06-14 11:42:45
tags:
---

## info

最近在做视频剪切的一个demo，
canplaythrough

```js
<link href="//vjs.zencdn.net/5.11/video-js.min.css" rel="stylesheet">
<script src="//vjs.zencdn.net/5.11/video.min.js"></script>

import '../common/video/style.css'
const vjs = require('../common/video/index.js')
```

播放按钮默认在左上角，添加类 vjs-big-play-centered 可让按钮垂直居中显示，也可以覆盖样式 video-js .vjs-big-play-button {}

```js
<video
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</video>
```

不支持 h5 的播放器使用 flash 播放
```js
videojs.options.flash.swf = "video-js.swf"
```

### api
api太多了，只列出一些常用方法

```js
autoplay() 获取或者设置自动播放属性
currentTime() 设置或者获取当前播放进度
duration() 获取视屏的总长度，一般要等到视屏对象完全加载后才能获取到，一般我们会使用定时轮询的方式来获取总时长
ended() 获取当前视屏对象是否已经处于结束状态
enterFullWindow() 当全屏不支持我们可以视频容器延伸到浏览器将让我们一样宽。经过试验改api完全无法使视屏进入全屏。分析源码后发现真正进入全屏的api应该是requestFullscreen()，但可惜该api只能又手势触发函数执行，连模拟点击都没法触发他。
exitFullscreen() 退出全屏，有效的
exitFullWindow() 退出全屏，试了没什么用
height() 设置/获取播放器的高度
width() 设置/获取播放器的宽度
isFullscreen() 检查是否处于全屏模式
load() 开始加载视屏
loop() 在视频中获取或设置循环属性元素
muted() 获取当前的静音状态
pause() 暂停视频
paused() 检查视屏是否暂停
play() 播放视屏
played() 检查视屏播放状态
preload() 获取或设置预加载属性
ready() 视屏对象加载完成后调用ready中的回调函数
poster() 获取或设置海报图像源url
reset() 重载视屏
src() 更换视频源
```

参考
https://blog.csdn.net/u014739462/article/details/70849195

## ios
搞了一下午，下班前终于找到办法了
在iOS 10 beta
```js
<video src="file.mp4" webkit-playsinline="true" playsinline="true">
```
正确代码是  webkit-playsinline适用于iOS 10-，playinline适用于iOS 10+。

参考
https://webkit.org/blog/6784/new-video-policies-for-ios/

## 宽高自适应
添加类 vjs-fluid

## android
层级默认是最高的,只要添加
```js
x5-video-player-type='h5'
```

## 禁止全屏
webkit-playsinline="true" playsinline="true"

http://taobaofed.org/blog/2016/05/23/video-player/
<a href="https://github.com/Avolons/videojs-tutorial-CN">中文教程地址</a>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events">MDN</a>
