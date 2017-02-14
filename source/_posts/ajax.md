---
title: ajax
date: 2017-02-07 15:20:45
categories: javascript
---

### jsonp原理
http://blog.guowenfh.com/2015/12/18/Ajax-elementary-course-1/

回调函数和数据,回调函数是当响应到来时在页面调用的函数,名字一般是在请求中指定的,数据就是传入回调函数的json数据
http://www.baidu.com/?callback=handlerResponse
function handlerResponse(response){
    //response.data
}

onreadystatechange事件
readyState值每变化一次都会触发onreadystate change

### readyState请求状态
0 未初始化
1 启动 open准备就绪
2 发送 send数据
3 接收 部分数据
4 完成 接收全部数据
-status属性 ：请求结果 200代表成功
-responseText属性 ：服务器返回的信息

### get请求
encodeURI, encodeURIComponent编码
decodeURI, decodeURIComponent解码
查询的名称和值都要用encodeURIComponent进行编码?
url += (url.indexOf('?')==-1?'?':'&')
url += euc(name)+'='+euc(value)
return url

### Http头部信息
json方式上传头部为Content-Type:application/json;charset=UTF-8
form-data方式上传头部为
必须在open之前send之后设置自定义头
xhr.setRequestHeader('myheader','my header');
xhr.getResponseHeader('myheader');获取
xhr.getAllResponseHeaders();

### 超时设定
xhr.timeout=1000
xhr.ontimeout=function(){
    Alert('超时')
}

### 进度事件
loadstart接收到第一个数据触发
progress接受到响应期间持续不断触发
onerror替代onreadystatechange检测错误
abort停止正在进行的请求
onload替代readystatechange检测成功
每个请求都从触发loadstart事件开始，接下来是一或多个progress事件，接下来触发error、about或load事件中的一个，最后触发loadend事件结束

xhr.ongropress=function(e){参数就是xhr对象，open方法前添加
    if(e.lengthComputable){
        div.innerHTML=e.position + e.totalSize;
    }
}

### 跨浏览器资源共享CORS
使用自定义的http头部让浏览器和服务器进行沟通，从而决定是否响应成功或失败，比如发送get或post请求时会附加一个Origin头部，包含请求页面源信息，如协议域名端口
Origin：http://www.baidu.com
如果服务器认可就会返回相同的源信息
Access-constrol-Allow-Origin:http://www.baidu.com
请求响应不包含cookie信息
```
function createCORSRequest(method,urn){
    var xhr =new XMLHttpRequest()
    if('withCredentials' in xhr){
        xhr.open(method, url, true)
    }else if(typeof XDomainRequest!='undefined'){
        xhr.open(method,url)
    }else{
        xhr = null
    ｝
    return xhr
}
```

### 文档跨域传输信息
header(“Content-Type:application/json;charset=utf-8”)
header(“Access-Control-Allow-Origin: http://www.shanghai.com”)
header(“Access-Control-Allow-Methods: POST,GET”)

JSON
JSON.stringify(obj,[“a”,”b"])

Ajax保留浏览器历史的解决方案
http://www.cnblogs.com/xumingxiang/archive/2012/11/26/2787530.html
http://www.tuicool.com/articles/UNR3Y3
http://www.bitscn.com/pdb/ajax/315944.html
http://www.tuicool.com/articles/v2YBFrF
http://www.tuicool.com/articles/n26F3yb
http://www.oschina.net/code/snippet_1475115_51503

```
//创建一个XMLHttpRequest对象
var xhr = new XMLHttpRequest();

//监听statechange事件
xhr.onreadystatechange = function() {
  /**
   * XMLHttpRequest的readystate有五个状态
   * 0 还没有调用open方法
   * 1 已调用open方法，尚未调用send方法
   * 2 已调用send，但尚未接收到响应
   * 3 已接收到部分响应数据
   * 4 已经接收到到全部数据，而且可以在客户端使用
   */
  if (xhr.readystate == 4) {
    //状态码在200 到 300表示请求成功，状态码304表示资源没有被修改，可以直接使用缓存中的版本
    if ((xhr.status >=200 && xhr.status < 300) || xhr.status == 304)) {
      alert(xhr.responseText);
    } else {
      //发生错误打印状态码，
      alert("Request was unsuccessful: " + xhr.status);
    }
  }
}
//打开请求以备发送
xhr.open('post', 'http://example.com', false);
//设置请求头
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//序列化表单
var form = document.getElementById('test-form');
//发送请求
xhr.send(serialize(form));
```
