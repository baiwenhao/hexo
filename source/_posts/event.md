---
title: event
abbrlink: fa6f25a3
date: 2017-02-06 18:32:09
---

##### window
```
body滚动事件: scroll
打开页面时：只执行onload
关闭页面时：先onbeforeunload,后onunload
刷新页面时：先onbeforeunload,后onunload，再onload
DOMContentLoaded事件IE9+
onload事件触发时,所有dom,style,脚本,图片都加载完成
DOMContentLoaded事件触发时,仅dom加载完成,不理会css,js,imo是否加载完成
onpageshow和onpagehide事件
往返缓存（back-forward cache = bfcache）浏览器的前进后退加快页面转换速度
pageshow
会在页面状态完全恢复时触发,虽然这个事件的目标是document,但必须将事件处理程序添加到window
pageshow
事件的event对象包含persisted的布尔值属性,如果页面保存在bfcache中,则属性为true，否则为false
pagehide
该事件会在浏览器卸载页面时触发,是在unload之前触发
```

## 动画事件
```
webkitTransitionEnd
onOrientationChange
oninput onpropertychange监听输入框实时变化
```

## 事件源
```
e.stopImmediatePropagation()  阻止当前节点和后续节点事件监听
e.stopPropagation()  阻止冒泡FF，阻止后续节点事件监听
e.cancelBubble = true 阻止冒泡IE
e.preventDefault()  阻止默认行为
e.returnValue=false 阻止默认事件
e.currentTarget; 指向事件所绑定的元素
e.target;  始终指向事件发生时的元素
e.eventphase;当前事件流那个阶段,捕获1,目标对象2,冒泡3
e.clientX
e.clientY
e.pageX
e.pageY
e.offsetX

// 鼠标相对于事件源元素（srcElement）的X,Y坐标，只有IE事件有这2个属性，标准事件没有对应的属性
e.offsetY

// 鼠标相对于用户显示器屏幕左上角的X,Y坐标。标准事件和IE事件都定义了这2个属性
event.screenX、event.screenY

// 当第二个参数为true 事件从外往里触发 (标准浏览器默认为false 事件由里像外触发)
el.addEventListener('click', fn, true)
```

## 滑轮事件
```
mouosewheel 绑定事件后event对象就有e.wheelDelta值,上滚正数下滚负数
DOMMouseScroll 同上FF

window.event.returnValue = false 放在表单中阻止表单提交和不执行超链接
window.print() | mail:bwh2009@qq.com
```

## 鼠标事件
`````
mouseover
mousemove-设置preventDefault会阻止滚动
mousedown
mouseup
click
mouseup 释放 down和up有一个被取消就不会触发click
mousemove
mouseover
mouseout
mouseenter=mouseleave 不触发子元素,不冒泡
document.onmousedown=function (ev){ 鼠标左右键
  var oEvent=ev||event
  alert(oEvent.button)
}
function block(oEvent){
  if(window.event){
    oEvent = window.event
    oEvent.returnValue = false // 取消默认事件
  } else {
    oEvent.preventDefault() // 取消默认事件
  }
}
e.button 鼠标左中右012
document.oncontextmenu = block // 右键菜单事件
input.on (input propertychange) // FF IE 值发生变化出发
```

## 事件绑定
```
el.addEventListener()
el.removeEventListener()
el.attachEvent()
el.detachEvent()
orientation change; ?
```

## 滚动事件
```
document.forms[0].scrollIntoView(true);元素出现在可视区域里
el.scrollIntoViewIfNeeded(true); 尽量将元素显示在垂直方向的中部
```

## 鼠标滚轮事件
```
onmousewheel
var scrollFunc = function(e) {
  var direct = 0
  var e=e || window.event
  if(e.wheelDelta){//IE/Opera/Chrome
    document.title=e.wheelDelta
  }else if(e.detail){//Firefox
    document.title=e.detail
  }
}
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
```

## 获取各种属性
el.getBoundingClientRect()

## 移动端事件
```
touchstart——触屏时候发生
touchmove——滑动时连续触发,event的preventDefault()阻止默认情况的发生：阻止页面滚动
touchend——手指离开屏幕时触发
touchcancel——系统停止跟踪触摸时触发,如在触摸中alert(),此时会触发该事件

// 属性说明
touches：屏幕上所有手指的信息
targetTouches：手指在目标区域的手指信息
changedTouches：最近一次触发该事件的手指信息
touchend时，touches与targetTouches信息会被删除，changedTouches保存的最后一次的信息，最好用于计算手指信息

// 事件响应顺序
ontouchstart  > ontouchmove  > ontouchend > onclick

// 以下支持winphone 8
MSPointerDown——当手指触碰屏幕时候发生。不管当前有多少只手指
MSPointerMove——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用css的html{-ms-touch-action: none;}可以阻止默认情况的发生：阻止页面滚动
MSPointerUp——当手指离开屏幕时触发
```

##### 移动端click事件产生200s-300s延迟响应
```
说明：移动设备上的web网页是有300ms延迟的，玩玩会造成按钮点击延迟甚至是点击失效。
2007年苹果发布首款iphone上IOS系统搭载的safari为了将适用于PC端上大屏幕的网页能展示在手机上，使用了双击缩放的方案，
比如你在手机上打开PC网页，页面可以撑满整个屏幕，但是字体、图片都很小看不清，此时可以快速双击屏幕上的某一部分，你就能看清该部分放大后的内容，再次双击后能回到原始状态。
原因就出在浏览器需要如何判断快速点击上，当用户在屏幕上单击某一个元素时候，例如跳转链接<a href="#"></a>，
此处浏览器会先捕获该次单击，但浏览器不能决定用户是单纯要点击链接还是要双击该部分区域进行缩放操作，所以，捕获第一次单击后，浏览器会先Hold一段时间t，如果在t时间区间里用户未进行下一次点击，则浏览器会做单击跳转链接的处理，如果t时间里用户进行了第二次单击操作，则浏览器会禁止跳转，转而进行对该部分区域页面的缩放操作。那么这个时间区间t有多少呢？在IOS safari下，大概为300毫秒。这就是延迟的由来。造成的后果用户纯粹单击页面，页面需要过一段时间才响应，给用户慢体验感觉，对于web开发者来说是，页面js捕获click事件的回调函数处理，需要300ms后才生效，也就间接导致影响其他业务逻辑的处理。

//解决方案：
fastclick可以解决在手机上点击事件的300ms延迟
zepto的touch模块，tap事件也是为了解决在click的延迟问题
```

## 屏幕旋转事件
```
//JS处理
function orientInit(){
    var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight?'landscape':'portrait';
    if(orientChk =='lapdscape'){
        //这里是横屏下需要执行的事件
    }else{
        //这里是竖屏下需要执行的事件
    }
}

orientInit()
window.addEventListener('onorientationchange' in window?'orientationchange':'resize', function(){
  setTimeout(orientInit, 100)
},false)

//CSS处理
//竖屏时样式
@media all and (orientation:portrait){}
//横屏时样式
@media all and (orientation:landscape){}

// 判断屏幕是否旋转
function orientationChange() { 
  switch(window.orientation) { 
    case 0:  
      alert("肖像模式 0,screen-width: " + screen.width + "; screen-height:" + screen.height); 
      break
    case -90:  
      alert("左旋 -90,screen-width: " + screen.width + "; screen-height:" + screen.height); 
      break
    case 90:    
      alert("右旋 90,screen-width: " + screen.width + "; screen-height:" + screen.height); 
      break
    case 180:  
      alert("风景模式 180,screen-width: " + screen.width + "; screen-height:" + screen.height); 
      break
  }
}

// 添加事件监听 
addEventListener('load', function(){ 
  orientationChange()
  window.onorientationchange = orientationChange
})

/*删除节点触发事件*/
DOMNodeRemoved
DOMNodeRemovedFromDocument
DOMSubtreeModified

/*插入节点触发事件*/
DOMSubtreeModified
DOMNodeInserted
DOMNodeInsertedIntoDocument

```
