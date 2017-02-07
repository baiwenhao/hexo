---
title: event
date: 2017-02-06 18:32:09
categories: javascript
---

### window
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

### 动画事件
    webkitTransitionEnd
    onOrientationChange
    oninput onpropertychange监听输入框实时变化

### 事件源
    e.stopImmediatePropagation();  阻止当前节点和后续节点事件监听
    e.stopPropagation();  阻止冒泡FF，阻止后续节点事件监听
    e.cancelBubble = true; 阻止冒泡IE
    e.preventDefault();  阻止默认行为
    e.returnValue=false 阻止默认事件
    e.currentTarget; 指向事件所绑定的元素
    e.target;  始终指向事件发生时的元素
    e.eventphase;当前事件流那个阶段,捕获1,目标对象2,冒泡3
    e.clientX
    e.clientY
    e.pageX
    e.pageY
    e.offsetX
    e.offsetY
    鼠标相对于事件源元素（srcElement）的X,Y坐标，只有IE事件有这2个属性，标准事件没有对应的属性。
    event.screenX、event.screenY
    鼠标相对于用户显示器屏幕左上角的X,Y坐标。标准事件和IE事件都定义了这2个属性


## 滑轮事件
    mouosewheel 绑定事件后event对象就有e.wheelDelta值,上滚正数下滚负数
    DOMMouseScroll 同上FF

    window.event.returnValue = false; 放在表单中阻止表单提交和不执行超链接
    window.print() | mail:bwh2009@qq.com

## 鼠标事件
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
        oEvent.returnValue = false     //取消默认事件
      } else {
        oEvent.preventDefault()     //取消默认事件
      }
    }
    e.button 鼠标左中右012
    document.oncontextmenu = block;右键菜单事件
    input.on (input propertychange);//FF IE 值发生变化出发

## 事件绑定
    el.addEventListener()
    el.removeEventListener() 
    el.attachEvent()
    el.detachEvent()

orientation change; ?

## 滚动事件
    document.forms[0].scrollIntoView(true);元素出现在可视区域里
    el.scrollIntoViewIfNeeded(true); 尽量将元素显示在垂直方向的中部

## 鼠标滚轮事件
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

## 获取各种属性
    el.getBoundingClientRect()

