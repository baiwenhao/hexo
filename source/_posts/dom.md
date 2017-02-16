---
title: dom
categories: javascript
abbrlink: 59b49683
date: 2017-02-07 15:17:54
---

### window属性
window.innerHeight(); 包括滚动条高度
window.location
window.outerHeight
window.parent
window.screen
window.screenTop;浏览器顶端距离
window.screenX
window.location
window.history
window.history.forward()
window.navigator
window.pageXOffset
window.top === window.self;true

window.scrollTo(0,0) 设置滚动条
window.scrollBy(100,100) 原有滚动的基础上逐步增加
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

### document文档属性
document.activeElement; 当前获得焦点的元素对象
document.hasFocus(); 文档是否获取焦点
document.readyState == complete 已经加载完文档
document.readyState == loading 正在加载文档
document.body.contains(el);判断el是不是body后代元素返回blooean

### 打开新的网页
document.location.reload(URL)
document.URL
document.domain
document.referrer

document.body.clientWidth 整个body高度
document.body.offsetWidth;//width+padding+border
document.body.scrollHeight 整个滚动条高度相当于body高度
document.body.scrollTop = document.body.scrollHeight; 滚动至底端
document.documentElement.scrollTop || document.body.scrollTop; 滚动条顶部距离
document.documentElement.clientHeight; 可视区域高度（不带滚动条）
el.scrollHeight;滚动对象的高度
window.screen.availWidth
try{}catch{}

document.compatMode;
var height = document.compatMode=="CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
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
    sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
}

### 元素属性
el.setAttribute( "value","123" ); 设置
el.getAttriBute( "id" ); 获取
el.removeAttribute( "id" ); 删除
el.offsetTop; 从边框算起
el.offsetParent; 寻找相对元素,设置了relative;
el.clientWidth; 元素客户区域大小
oTab.tBodies[0].rows[2].cells[1]
el.style.cssText = ‘width:100px;height:200px';
el.classList.contains();
el.dataset.name;

### 伪类
var color = window.getComputedStyle(
  document.querySelector('.element'), ':before'
).getPropertyValue('color');

var content = window.getComputedStyle(
  document.querySelector('.element'), ':before'
).getPropertyValue('content');

### 样式
el.style[width] || el.style.item(i);
el.style.removeProperty('width’);删除行内样式
el.style.setProperty('width','1000px','important’);设置行内样式
var d = document.defaultView.getComputedStyle(el, null);获取样式,null不需要伪类信息，d.width; FF
el.currentStyle.width;IE特有获取样式方法

### DOM操作
el.firstChild
el.firstElement
el.lastChild
el.lastElementChild
el.removeChild(子节点)
el.cloneNode(false); false只复制一个空对象,true复制所有子元素内容
el.parentNode(); el的父节点
el.childNodes[0]; el的第一个子元素可能是空白节点
el.children[0]; 一定是元素节点
el.nextsibling
el.previousSibling()
el.appendChild(元素)
el.insertBefore(元素, 位置)
ul.parentNode.replaceChild(document.createTextNode('haha'), ul.children[0])
第二参数可是位置lastChild,也可是元素ul.children[0]

/*删除节点触发事件*/
DOMNodeRemoved
DOMNodeRemovedFromDocument
DOMSubtreeModified

/*插入节点触发事件*/
DOMSubtreeModified
DOMNodeInserted
DOMNodeInsertedIntoDocument
/*
遍历根节点
节点类型
过滤器
是否扩展实体引用
*/
var treeWalker= document.createTreeWalker(id, NodeFilter.SHOW_ELEMENT, null, false); //排除nodeType==3的文本节点
treeWalker.lastChild();//返回第一个节点，从第一个节点开始查找,就不是id节点了，之到返回null
treeWalker.nextSibling();
treeWalker.currentNode = document.body;//修改起点节点

### 插入html
el.insertAdjacentHTML('beforebegin','<p>前一个同级元素</p>’);<p></p>el
el.insertAdjacentHTML('afterend','<p>作为后一个同辈元素</p>’);el<p></p>
el.insertAdjacentHTML('afterbegin','<p>第一个子元素</p>’)
el.insertAdjacentHTML('beforeend','<p>作为最后一个子元素类似appendChild</p>')
插入节点
el.insertAdjacentElement()
插入文本
document.body.insertAdjacentText('beforeend', ‘纯文本')
 
### 赋值文本
el.innerHTML()
el.outerHTML(‘el也被替换了’);
el.innerText = el.innerText; 过滤子元素html IE6+,与el.textContent一样功能IE9+ el.textContent || el.innerText
el.outerText(‘el也给替换了');还移除了元素前后空格文本
document.body.contentEditable=‘true'

### 文档碎片
var ul=document.getElementsByTagName("ul")[0];
var oFrag = document.createDocumentFragment();
var i = 0 ;
var iStart = new Date().getTime();//测速

for( i=0; i <100; i++ ){
     oLi=document.createElement( "li" );
     oFrag.appendChild( oLi );
}
ul.appendChild(oFrag);
console.log( new Date().getTime() - iStart);

### DOM3比较节点方法
div.isSameNode(div);//true  两个节点引用的是同一个对象 叫相同
div.isEqualNode(div1); //true  相同的属性(nodeName,nodeValue)

### 手机方向事件 ？

### postMessage
```
父窗口
<iframe src="demo2.html"></iframe>
<script>
  function receiveMessage(e) {
    alert(e.data);
  }
  window.addEventListener("message", receiveMessage, false);
</script>
子窗口
<input type="text" value="send" id="input" />
    <input type="button" value="send" id="button" />
<script>
document.getElementById('button').onclick = function() {
    top.postMessage(document.getElementById('input').value, '*');
};
</script>

<iframe id="frame" src="test2.html"></iframe>
    <input type="text" value="send" id="input" />
    <input type="button" value="send" id="button" />
    <script>
    //父窗口
    document.getElementById('button').onclick = function() {
        window.frames[0].postMessage(document.getElementById('input').value, '*');
    };
    </script>

    <script>
    //子窗口
    function receiveMessage(e) {
        alert(e.data);
    }
    window.addEventListener("message", receiveMessage, false);
    </script>
```

### 打印
console.profile('神机妙算')
console.profileEnd('神机妙算')
console.time()
console.timeEnd()
console.count() 统计函数执行的次数
console.table()
console.info()
console.warn()
console.error()


### 拖拽
event.dataTransfer.files;

### iframe
window.parent.result; 子类寻找父类
iframe_id.contentWindow.result(); 父类控制子类
var iframe = id.contentDocument || id.contentWindow.document; (contentWindw兼容所有浏览器)
window.onload = (function () {
    var iObj = document.getElementById(‘iId‘);
    iObj.height =  iObj.contentWindow.document.documentElement.scrollHeight;
})

### 参考
http://jsfiddle.net/n6DAu/1/
http://codepen.io/shawkdsn/pen/grcwJ
http://siebennull.com/equal_width_height.html  css  高度 自动等于 宽度
http://shihezi.51vip.biz/
