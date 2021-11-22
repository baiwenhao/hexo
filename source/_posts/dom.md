---
title: dom
toc: true
abbrlink: 59b49683
date: 2017-02-07 15:17:54
---

## window
```js
window.innerHeight() 包括滚动条高度
window.location
window.outerHeight
window.parent
window.screen
window.screenTop 浏览器顶端距离
window.screenX
window.location
window.history
window.history.forward()
window.navigator
window.pageXOffset
window.top === window.self // true
window.scrollTo(0, 0) 设置滚动条
window.scrollBy(100, 100) 原有滚动的基础上逐步增加
window.close()
window.open(sU, sN, sF)
window.clearInterval(id)
window.setInterval(f, d)
window.clearTimeout(id)
window.setTimeout(f, d)
window.confirm()
window.compile()
window.escape(r)
window.unescape(e)
window.getComputedStyle(e)
window.prompt(t, v)
window.resizeBy(x, y)
window.resizeTo(x, y)
window.scroll(x, y)
window.alert()
window.confirm()
window.prompt()
window.screen.availWidth
try{}catch{}
```

## document
```js
document.activeElement // 当前获得焦点的元素对象
document.hasFocus(); 文档是否获取焦点
document.readyState == complete 已经加载完文档
document.readyState == loading 正在加载文档
document.body.contains(el);判断el是不是body后代元素返回blooean
document.location.reload(URL) 打开新的网页
document.URL
document.domain
document.referrer

document.body.clientWidth 整个body高度
document.body.offsetWidth // width+padding+border
document.body.scrollHeight 整个滚动条高度相当于body高度
document.body.scrollTop = document.body.scrollHeight 滚动至底端
document.documentElement.scrollTop || document.body.scrollTop 滚动条顶部距离
document.documentElement.clientHeight 可视区域高度（不带滚动条）
```

## 事件源
```js
e.pageX
```

## 兼容
```js
document.compatMode
var height = document.compatMode == "CSS1Compat" ?
document.documentElement.clientHeight : document.body.clientHeight

BackCompat：标准兼容模式关闭。
CSS1Compat：标准兼容模式开启。
当document.compatMode等于BackCompat时，
浏览器客户区宽度是document.body.clientWidth；
当document.compatMode等于CSS1Compat时，
浏览器客户区宽度是document.documentElement.clientWidth。

if (document.compatMode == "BackCompat") {
  cWidth = document.body.clientWidth;
  sHeight = document.body.scrollHeight;
  sTop = document.body.scrollTop;
} else { //document.compatMode == "CSS1Compat"
  cWidth = document.documentElement.clientWidth;
  sHeight = document.documentElement.scrollHeight;
  sTop = document.documentElement.scrollTop == 0 ?
  document.body.scrollTop :
  document.documentElement.scrollTop;
}
```

## 节点属性
```js
el.tBodies[0].rows[2].cells[1]
el.scrollHeight 滚动对象的高度
el.setAttribute( "value","123" ) 设置
el.getAttriBute( "id" ) 获取
el.removeAttribute( "id" ) 删除
el.offsetTop 从边框算起
el.offsetParent 寻找相对元素,设置了relative
el.clientWidth; 元素客户区域大小
el.style.cssText = 'width:100px;height:200px'
el.classList.contains()
el.dataset.name
el.parentNode.replaceChild(new, old) // repalce node
```

## 伪类
```js
var color = window.getComputedStyle(
  document.querySelector('.element'), ':before'
).getPropertyValue('color');
```

## 样式
```js
el.style[width] || el.style.item(i)
el.style.removeProperty('width’) // 删除行内样式
el.style.setProperty('width','1000px','important’) // 设置行内样式

var d = document.defaultView.getComputedStyle(el, null)
获取样式，null不需要伪类信息，d.width; FF

el.currentStyle.width // IE特有获取样式方法
```

## 操作
```js
el.firstChild // 容易找到文本节点 #text
el.firstElement // 一定是div节点
el.lastChild
el.lastElementChild
el.removeChild(子节点)
el.cloneNode(false); false只复制一个空对象,true复制所有子元素内容
el.parentNode(); el的父节点
el.childNodes[0]; el的第一个子元素可能是空白节点
el.children[0]; 一定是元素节点
el.nextsibling 下一个节点可能是#text 对象
el.nextElementSibling 一定是节点对象
el.previousSibling()
el.appendChild(元素)
el.insertBefore(元素, 位置)
ul.parentNode.replaceChild(document.createTextNode('haha'), ul.children[0])
第二参数可是位置lastChild,也可是元素ul.children[0]
```

## 插入html
```
el.insertAdjacentHTML('beforebegin', '<p>前一个同级元素</p>') <p></p>el
el.insertAdjacentHTML('afterend', '<p>作为后一个同辈元素</p>') el<p></p>
el.insertAdjacentHTML('afterbegin', '<p>第一个子元素</p>')
el.insertAdjacentHTML('beforeend', '<p>作为最后一个子元素类似appendChild</p>')
插入节点
el.insertAdjacentElement()
插入文本
document.body.insertAdjacentText('beforeend', '纯文本')
```

## 赋值文本
```
el.innerHTML()
el.outerHTML(‘el也被替换了’)
el.innerText = el.innerText
过滤子元素html IE6+,与el.textContent一样功能IE9+ el.textContent || el.innerText
el.outerText(‘el也给替换了') 还移除了元素前后空格文本
document.body.contentEditable='true'
```

## 文档碎片
```
var ul=document.getElementsByTagName('ul')[0]
var oFrag = document.createDocumentFragment()
var i = 0
var iStart = new Date().getTime() // 测速

for( i=0; i <100; i++ ){
  oLi=document.createElement('li')
  oFrag.appendChild(oLi)
}
ul.appendChild(oFrag)
console.log( new Date().getTime() - iStart)
```

## DOM3比较节点方法
```
div.isSameNode(div) // true  两个节点引用的是同一个对象 叫相同
div.isEqualNode(div1) //true  相同的属性(nodeName, nodeValue)
```

## postMessage
```js
// 父窗口
<iframe src="demo2.html"></iframe>
<script>
  function receiveMessage(e) {
    alert(e.data)
  }
  window.addEventListener("message", receiveMessage, false)
</script>
// 子窗口
<input type="text" value="send" id="input" />
<input type="button" value="send" id="button" />
<script>
document.getElementById('button').onclick = function() {
  top.postMessage(document.getElementById('input').value, '*')
}
</script>

<iframe id="frame" src="test2.html"></iframe>
<input type="text" value="send" id="input" />
<input type="button" value="send" id="button" />
<script>
//父窗口
document.getElementById('button').onclick = function() {
  window.frames[0].postMessage(document.getElementById('input').value, '*')
}
</script>

<script>
//子窗口
function receiveMessage(e) {
    alert(e.data);
}
window.addEventListener("message", receiveMessage, false);
</script>
```

## 打印
```
console.assert(!true, 'This is not true') 错误答应
console.profile('神机妙算')
console.profileEnd('神机妙算')
console.time()
console.timeEnd()
console.count() 统计函数执行的次数
console.table()
console.info()
console.warn()
console.error()
```

## 拖拽
event.dataTransfer.files

## iframe
window.parent.result; 子类寻找父类
iframe_id.contentWindow.result(); 父类控制子类
var iframe = id.contentDocument || id.contentWindow.document; (contentWindw兼容所有浏览器)
window.onload = (function () {
  var d = document.getElementById(‘iId‘);
  d.height =  d.contentWindow.document.documentElement.scrollHeight;
})

## input
1、type属性
  type属性用于指定表单控件的种类。input元素根据type属性值，可以是一行文本文件输入框、可以是选择框、可以单选框。
  【type属性的可选值：】
  type="hidden"
  画面上不显示被隐藏的数据。
  type="text"
  一行文本文件输入领域，文本文件输入控件。
  type="search"【新类型】
  一行输入字符领域，对象是检索内容。
  type="tel"【新类型】
  表示一行文本文件领域，对象是电话号码。
  type="url"【新类型】
  一行文本文件领域，对象是网址。
  type="email"【新类型】
  一行文本文件领域，对象是邮箱地址。
  type="password"
  一行文本文件输入领域，对象是保密信息。
  type="datetime"【新类型】
  日期和时间输入领域。
  type="date"【新类型】
  日期输入领域。
  type="month"【新类型】
  年月输入领域。
  type="week"【新类型】
  周输入领域。
  type="time"【新类型】
  时间输入领域。
  type="datetime-local"【新类型】
  与世界标准时间UTC无关的日期时间的输入领域。
  type="number"【新类型】
  数字输入领域。
  type="range"【新类型】
  设定了数字可选范围的数字输入控制领域。
  type="color"【新类型】
  颜色输入控制领域。
  type="checkbox"
  选择框控制领域。
  type="radio"
  单选按钮控制领域。
  type="file"
  显示可选择文件列表。
  type="submit"
  表单的提交按钮。
  type="image"
  使用图像表示提交表格的提交按钮。
  type="reset"
  清空按钮。
  type="button"
  一般按钮标志。
2、autocomplete属性【新属性】
  autocomplete内容属性用于定义是否自动完成文字输入，即自动完成功能的有效化或无效化。
3、list属性【新属性】
  在文字输入时，使用list 内容属性指定推荐选项集合体的id值，从而建立推荐选项列表。通常与datalist元素配合使用。
4、readonly内容属性
  readonly内容属性用于内容只读，属于逻辑属性。input元素中使用了该属性后，用户只能阅读，不能编辑该当内容。
5、size内容属性
  使用size内容属性指定该当控件的尺寸，即能够容纳的文字数。
6、required内容属性【新属性】
  使用required内容属性控制控件的值是否是必须的，属于逻辑属性。
7、multiple内容属性
  multiple内容属性用于定义该当控件内能够指定2个以上的复合值，属于逻辑属性。
8、maxlength内容属性
  使用maxlength内容属性可以指定控件内能够输入的最大文字数。
9、pattern内容属性【新属性】
  pattern内容属性表示控件的输入值的正规表现。通过使用正规表现，可以详细限制输入值得具体形式。
10、min内容属性与max内容属性
  min内容属性与max内容属性分别代表输入值的最小值和最大值。min内容属性与max内容属性能够指定的值因type内容属性的值不同而不同。
11、step内容属性【新属性】
  step内容属性用于指定控件的值的精度。
12、placeholder内容属性【新属性】
  placeholder内容属性用于表示向用户做出的提示文字。
13、autofocus内容属性【新属性】
  autofocus内容属性用于当网页下载完成时，光标落在设有该属性的控件上。属于逻辑属性。
14、disabled内容属性
  disabled内容属性用于使该当控制领域无效。
15、form内容属性【新属性】
  form内容属性用于使input表示的控制领域与指定的form元素建立链接。
16、name内容属性
  name内容属性用于表示控件的名称。
17、value内容属性
  valus内容属性表示该当input元素的值。如果指定了该内容属性，其值会作为默认值在页面上显示。
## 参考
http://webkkl.com/html5/head.php

## 参考
http://jsfiddle.net/n6DAu/1/
http://codepen.io/shawkdsn/pen/grcwJ
http://siebennull.com/equal_width_height.html  css  高度 自动等于 宽度
http://shihezi.51vip.biz/
