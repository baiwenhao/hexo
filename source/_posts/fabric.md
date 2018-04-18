---
title: fabric
abbrlink: 6de370a3
date: 2017-12-24 16:34:26
tags:
---

### Introduction
允许您 canvas 使用JavaScript 轻松创建诸如矩形，圆形，三角形等多边形或由多条路径组成的更复杂形状的简单形状到网页的HTML 元素上。
Fabric.js将允许您用鼠标操作这些对象的大小，位置和旋转。还可以更改这些对象的某些属性，例如网页的颜色，透明度，深度位置或使用Fabric.js库选择这些对象的组。
Fabric.js也将允许你将一个SVG图像转换成JavaScript数据，用于将其放到 canvas 元素上

### FileReader
用到构造函数 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader" target="_blank"/>FileReader</a> 读取input选择图片后返回的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FileList" />FileList</a> 对象

### code
```js
// 绘制方形
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 30,
  height: 30,
  selectable: false
})

rect.setLeft(rect.getLeft() + 10)
canvas.renderAll()

// 绘制圆形
var circle = new fabric.Circle({
  radius: 50,
  fill: 'green',
  left: 200,
  top: 200
})

// 绘制三角形
var triangle = new fabric.Triangle({
    width: 80,
    height: 100,
    fill: 'blue',
    left: 50,
    top: 50
})

// 绘制不规则图形：
var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z')
path.set({ left: 120, top: 120,fill:'red' })
canvas.add(path)
/*
上边的代码需要注意的是第二行， fabric.Path( )方法里边跟了一串字符串参数.
“M”代表“移动”命令，这个“M 00” 代表把画笔移动到（0,0）点坐标。
“L”代表“线”，“L 200 100 ”的意思是使用钢笔画一条线，从（0,0）坐标画到（200,100）坐标。
“z” 代表让图形闭合路径。就这样我们轻松的画出了一个三角形。
画好三角形后，我们可以用set( )方法对三角形的位置、颜色、角度、透明度等属性进行设置。
虽然用路径画图形很简单，但图形比较复杂时，你会发现这很难控制，
代码会变的臃肿而不可阅读，在实际工作中没有这样使用的。
我们可以用svg来代替这种路径的形式
*/

// 添加文字
var text = new fabric.Text('hello world', {
  fontSize: 30,
  originX: 'center',
  originY: 'center'
})

// 添加组
var group = new fabric.Group([ circle, text ], {
  left: 150,
  top: 100,
  angle: -10
})
group.item(0).setFill('red')
group.item(1).set({
  text: 'trololo',
  fill: 'white'
})

// 添加图片
var imgElement = document.getElementById('img')
var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  width: 200,
  height: 100,
  angle: 30 // 设置旋转
})

canvas.add(imgInstance)

// js中插入图片
var canvas = new fabric.Canvas('canvas')
fabric.Image.fromURL('./2.png', function (oImg) {
  oImg.scale(0.1) // 图片缩小10倍
  oImg.setWidth(200)
  canvas.add(oImg)
})

// 动画
rect.set('angle', 45)
rect.animate('angle', '+=45', {
  duration: 4000,
  easing: fabric.util.ease.easeOutBounce,
  onChange: canvas.renderAll.bind(canvas)
})
<a href="http://fabricjs.com/docs/fabric.util.ease.html">doc文档</a>

// 添加过滤器
var canvas = new fabric.Canvas('canvas');
fabric.Image.fromURL('2.jpg', function (img) {
  // 添加过滤器
  img.filters.push(new fabric.Image.filters.Grayscale())
  // 应用过滤器并重新渲染画布执行
  img.applyFilters(canvas.renderAll.bind(canvas))
  canvas.add(img)
  img.on('selected', () => { // mouse:down | scaling | modified
    console.log('选中')
  })
})

// 设置选中项
canvas.setActiveObject(canvasimg)

// 设置可见
 line2.set({ visible: true })

// 设置图层
FlowChar.sendToBack = () => {
  var activeObject = this.canvas.getActiveObject();
  if (activeObject) {
    canvas.sendToBack(activeObject);
  }
}
```

```js
// this.canvas.setActiveObject(text)
// text.selectAll()
// text.enterEditing()
// text.hiddenTextarea.focus() // 无法失去焦点
```

### Reference address
<a href="http://fabricjs.com/" target="_blank">demo</a>
<a href="http://fabricjs.com/benchmarks/" target="_blank">benchmarks</a>
<a href="https://github.com/kangax/fabric.js" target="_blank">github</a>

### cdn
https://cdnjs.com/libraries/fabric.js/2.0.1

### 双击事件
https://stackoverflow.com/questions/23418055/fabricjs-double-click-on-objects

### 自动换行
http://jsfiddle.net/maxenko/nyw5myq5/4/

canvas教程
https://mobiforge.com/design-development/html5-mobile-web-canvas

感谢这个问题
https://stackoverflow.com/questions/47010467/fit-the-background-image-to-canvas-size-with-fabric-js

活动区域动画不错
https://www.zazzle.com/coach_gifts_basketball_your_colors_8_text_boxes-256691781630798133

参考：
http://blog.csdn.net/dananhai381/article/details/14169665
https://www.npmjs.com/package/font-carrier
http://blog.csdn.net/u014032819/article/details/77864682
http://blog.csdn.net/yanzisu_congcong/article/details/77840526
https://www.cnblogs.com/vipstone/p/8716419.html

fabric.js介绍
fabric.js是什么
fabric.js是可以简化canvas编写的js库，提供canvas缺少的对象模型，包含动画、数据序列号和反序列化的等高级功能的js库，开源项目，在GitHub有很多人贡献。

fabric.js优缺点
优点：fabric提供超好的画布能力.
缺点：api超级烂，没有相应的demo代码，上手难度较大.

fabric.js使用笔记
对象

fabric.Circle 圆
fabric.Ellipse  椭圆
fabric.Line 直线
fabric.Polygon
fabric.Polyline
fabric.Rect 矩形
fabric.Triangle 三角形

方法
add(object) 添加
insertAt(object,index) 添加
remove(object) 移除
forEachObject 循环遍历
getObjects() 获取所有对象
item(int) 获取子项
isEmpty() 判断是否空画板
size() 画板元素个数
contains(object) 查询是否包含某个元素
fabric.util.cos
fabric.util.sin
fabric.util.drawDashedLine 绘制虚线
getWidth() setWidth()
getHeight()
clear() 清空
renderAll() 重绘
requestRenderAll() 请求重新渲染
rendercanvas() 重绘画板
getCenter().top/left 获取中心坐标
toDatalessJSON() 画板信息序列化成最小的json
toJSON() 画板信息序列化成json
moveTo(object,index) 移动
dispose() 释放
setCursor() 设置手势图标
getSelectionContext()获取选中的context
getSelectionElement()获取选中的元素
getActiveObject() 获取选中的对象
getActiveObjects() 获取选中的多个对象
discardActiveObject()取消当前选中对象
isType() 图片的类型
setColor(color) = canvas.set("full","");
rotate() 设置旋转角度
setCoords() 设置坐标



事件
object:added
object:removed
object:modified
object:rotating
object:scaling
object:moving
object:selected 这个方法v2已经废弃，使用selection:created替代，多选不会触发
before:selection:cleared
selection:cleared
selection:updated
selection:created
path:created
mouse:down
mouse:move
mouse:up
mouse:over
mouse:out
mouse:dblclick



常用属性
canvas.isDrawingMode = true; 可以自由绘制
canvas.selectable = false; 控件不能被选择，不会被操作
canvas.selection = true; 画板显示选中
canvas.skipTargetFind = true; 整个画板元素不能被选中
canvas.freeDrawingBrush.color = "#E34F51" 设置自由绘画笔的颜色
freeDrawingBrush.width 自由绘笔触宽度



IText的方法
selectAll() 选择全部
getSelectedText() 获取选中的文本
exitEditing() 退出编辑模式


