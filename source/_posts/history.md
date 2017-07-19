---
title: history
abbrlink: e80749d7
date: 2017-02-17 15:57:07
tags:
---

## popstate
需要注意调用history.pushState 或 history.replaceState 不会触发 popstate 事件
只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮
或在 Javascript 代码中调用 back, go, forward 事件
不同的浏览器在加载页面时处理 popstate 事件的形式存在差异
页面加载时 Chrome 和 Safari 通常会触发(emit) popstate事件，但Firefox则不会

## replaceState
和参数 popstate 操作一致，区别是它修改浏览历史中当前纪录

## state
history.state 属性返回当前页面的 state 对象

```js
/*
  state与网址相关的状态对象{name: 'list'}, 会被传入到 popstate 事件的回调函数，也可填null
  title 页面标题
  新的url，即使设置锚点也不会触发hashchange，不允许设置跨域url
*/
window.history.pushState('state', 'title', '?state=name')
window.addEventListener('popstate', function(e) {
  // e.state
  if (history.state && history.state.name == 'xieyi') {
  } else {
  }
}, false)
```

## URLSearchParams API
URLSearchParams API用于处理URL之中的查询字符串，即问号之后的部分

```js
// has() 返回一个布尔值，表示是否具有某个参数
// get() 返回指定参数的第一个值
// getAll() 返回一个数组，成员是指定参数的所有值
// set() 设置指定参数
// delete() 删除指定参数
// append() 在查询字符串之中，追加一个键值对
// toString() 返回整个查询字符串

var paramsString = 'q=URLUtils.searchParams&topic=api';
var searchParams = new URLSearchParams(paramsString);

searchParams.has('topic') // true
searchParams.get('topic') // "api"
searchParams.getAll('topic') // ["api"]

searchParams.get('foo') // null，注意Firefox返回空字符串
searchParams.set('foo', 2);
searchParams.get('foo') // 2

searchParams.append('topic', 'webdev');
searchParams.toString() // "q=URLUtils.searchParams&topic=api&foo=2&topic=webdev"

searchParams.append('foo', 3);
searchParams.getAll('foo') // [2, 3]

searchParams.delete('topic');
searchParams.toString() // "q=URLUtils.searchParams&foo=2&foo=3"
```

keys() // 遍历参数名
values() // 遍历参数值
entries() // 遍历所有参数键值对
都返回 Iterator 对象

```js
var searchParams = new URLSearchParams('key1=value1&key2=value2')

for (var key of searchParams.keys()) {
  console.log(key)
}
// key1
// key2

for (var value of searchParams.values()) {
  console.log(value)
}
// value1
// value2

for (var pair of searchParams.entries()) {
  console.log(pair[0]+ ', '+ pair[1])
}
// key1, value1
// key2, value2
```

在Chrome浏览器之中，URLSearchParams实例本身就是Iterator对象，与entries方法返回值相同。所以，可以写成下面的样子
```js
for (var p of searchParams) {
  console.log(p)
}

// URL: https://example.com?version=1.0
var params = new URLSearchParams(location.search.slice(1));
params.set('version', 2.0);

window.history.replaceState({}, '', `${location.pathname}?${params}`);
// URL: https://example.com?version=2.0
```

URLSearchParams实例可以当作POST数据发送，所有数据都会URL编码
```js
let params = new URLSearchParams()
params.append('api_key', '1234567890')

// 替换url的例子
fetch('https://example.com/api', {
  method: 'POST',
  body: params
}).then(...)
```

DOM的a元素节点的searchParams属性，就是一个URLSearchParams实例
```js
var a = document.createElement('a')
a.href = 'https://example.com?filter=api'
a.searchParams.get('filter') // "api"
```

URLSearchParams还可以与URL接口结合使用
```js
var url = new URL(location)
var foo = url.searchParams.get('foo') || 'somedefault'
```

今天正好碰到这个老生常谈的问题，希望用户离开页面之前，能展现一个提示告诉用户你有未保存的数据没有提交，是否需要保存后离开，

我们知道，onbeforeunload 和 onunload 事件是在浏览器即将请求下一个页面的时候触发，还可以阻止 onunload 触发，而 onunload 事件则是浏览器已经将下一个页面请求回来，

页面即将跳转的时候触发，该事件无法中断。那么 onbeforeunload 能满足需要吗，答案是不能，

onbeforeunload 事件虽然能阻止onunload事件的触发，但是由于它是浏览器内置的事件，其出现的交互方式和UI界面，并不是我想要的样式
所以，想要通过onbeforeunload事件提供的浮层实现收集用户离开的原因或让用户给应用打分的功能并不现实。

```js
var pop = document.getElementById('J_PageWrap')
window.addEventListener('load', function() {
    var tit = document.title,
        path = location.href.replace(/#.*$/, '') + '#!hash'
    history.pushState({title: tit, path: path}, tit, path)
})

window.addEventListener('hashchange', function(ev) {
  var oAddr = ev.oldURL.replace(/^.+(?=\/\/)/, ''), // 为避免http(s)的影响，去除协议进行判断
    nAddr = ev.newURL.replace(/^.+(?=\/\/)/, '')
  if (oAddr === '//10.14.132.43:808/tests/hash/index.html#!hash'
    && nAddr === '//10.14.132.43:808/tests/hash/index.html') {
      pop.className += ' show'
  } else {
    pop.className = 'page-wrap'
  }
})
```

参考：
http://www.jianshu.com/p/9ced734f75e8
