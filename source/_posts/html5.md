---
title: html5
date: 2017-02-07 18:15:23
categories: javascript
---

```
x-webkit-speech 语音插件
placeholder="请输入查询地址"
Autocomplete jq有这个插件
autocomplete="off" 不留痕迹
location的属性：hash、host、hostname、href、pathname、port、protocol、search
reload()将服务端数据重新载入
replace()将当前页面替换成另一个页面window.location.replace("http://www.baidu.com");
html5 历史管理onhashchange: 当window.location.hash值有变化的时候，就会触发
history: pushState( 数据, 标题(未实现) , 地址(可选) );
popstate事件: 读取诗句 event.state
```

应用缓存
html5Doctor
 要将描述文件与页面关联起来,manifest要指定这个文件的路径
<html manifest=“/offline.manifest”>
这个文件的MIME类型必须是text/cache-manifest
applicationCache对象

status状态码
0无缓存,没有与页面相关的应用缓存
1闲置,应用缓存为得到更新
2检查中,正在下载描述文件并检查更新
3下载中,正在下载描述文件中指定的资源
4更新完成,应用缓存已经更新资源,资源下载完毕,可以用过swapCache()来使用
5废弃,描述文件不存在,无法访问应用缓存

事件
checking
error
nouodate
downloading
progress
updateready
cached
applicationCache.update()一经调用,应用缓存就会去检查描述文件是否更新,出发checking事件,如果触发cached事件,说明应用缓存准备就绪,不会触发其他事件了,如果触发updateready事件,说明新版本的应用缓存已经可用,此时需要调用swapCache来启用新应用缓存

web计时

window.performance
performance导航相关属性
performance.navigation.redirectCount页面加载前重定向次数
performance.navigation.type
0页面第一次加载
1页面重载过
2页面通过后退和前进按钮打开的

performance.timing时间戳属性
performance.timing.responseEnd
全面了解页面在被加载到浏览器的过程中经历了哪些阶段,哪些阶段影响性能瓶颈,web Timing API


新的特殊内容元素
如:article,footer,header,nav,section

新的表单控件
calendar,date,time,email,url,search 

Jquery Mobile事件
pageinit ＝dom加载完成后出发
tap ＝触摸
taphold =长按
swipe ＝滑动
swipeleft =向左滑
swiperight =向右滑
scrollstart =开始滑动
scrollstop =停止滑动


css中Media Query
设备高度:     device-width, device-height
渲染窗口宽高:     width, height
设备手持方向:     orientaion
设备分辨率:     resolution

页面宽小于640px调用此样式

<link rel="stylesheet" href="?.css" type="text/css" media="only screen and (max-width:640px)">

页面宽大于680px调用此样式
@media screen and (min-width:680px){...}

html5拖拽
拖拽对象
draggable="true"  可拖拽
ondragstart - 开始拖动  event.dataTransfer.setData("Text", event.target.id); 拖拽id
ondrag - 正在拖动
ondragend - 完成拖动 
接收对象
ondragenter - 进入容器范围
ondragover - 容器范围内拖动
ondragleave - 对象离开容器范围
ondrop - 拖动过程中，释放拖拽对象

xhr.upload 这是html5新增的api,储存了上传过程中的信息 
xhr.upload.onprogress = function (ev) {
    var percent = 0;
    if(ev.lengthComputable) {
        percent = 100 * ev.loaded/ev.total;
        //document.getElementById('progress').innerHTML = percent;
        document.getElementById('bar').style.width = percent + '%';
    }
} 
