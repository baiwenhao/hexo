---
title: jsonp
toc: true
abbrlink: 84da2c8b
date: 2017-02-17 10:18:31
tags:
---

## 前言

###### 说到AJAX就会面临两个问题，第一个是AJAX以何种格式来交换数据？第二个是跨域的需求如何解决？这两个问题目前都有不同的解决方案，比如数据可以用自定义字符串或者用XML来描述，跨域可以通过服务器端代理来解决。
###### JSON和JSONP虽然只有一个字母的差别，JSON是一种数据交换格式，JSONP是一种数据交互协议。

## JSON
###### JSON是一种基于文本的数据交换方式，或者叫做数据描述格式

- 优点
 + 基于纯文本，跨平台传递极其简单
 + Javascript原生支持，后台语言几乎全部支持
 + 轻量级数据格式，占用字符数量极少，特别适合互联网传递

- JSON的格式或者叫规则
 + JSON只有两种数据类型描述符，大括号{}和方括号[]，其余英文冒号:是映射符，英文逗号,是分隔符，英文双引号""是定义符
 + 大括号{}用来描述一组“不同类型的无序键值对集合”（每个键值对可以理解为OOP的属性描述），方括号[]用来描述一组“相同类型的有序数据集合”（可对应OOP的数组）
 + 上述两种集合中若有多个子项，则通过英文逗号,进行分隔
 + 键值对以英文冒号:进行分隔，并且建议键名都加上英文双引号""，以便于不同语言的解析
 + JSON内部常用数据类型无非就是字符串、数字、布尔、日期、null 这么几个，字符串必须用双引号引起来，其余的都不用，日期类型比较特殊，这里就不展开讲述了，只是建议如果客户端没有按日期排序功能需求的话，那么把日期时间直接作为字符串传递就好，可以省去很多麻烦

## JSONP
- Ajax直接请求普通文件存在跨域无权限访问的问题，甭管你是静态页面、动态网页、web服务、WCF，只要是跨域请求，一律不准
- Web页面上调用js文件时则不受跨域影响,拥有 src 属性的标签都有跨域的能力，比如script、img、iframe
- （ActiveX控件、服务端代理、属于未来的HTML5之Websocket等方式不算）跨域访问数据只有在远程服务器上把数据装进js文件，供客户端调用
- JSONP，该协议是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了

## 客户端实现
```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script>
  // 得到航班信息查询结果后的回调函数
  var flightHandler = function(data){
    alert('你查询的航班结果是：票价 ' + data.price + ' 元，' + '余票 ' + data.tickets + ' 张。')
  }
  // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
  var url = "http://flightQuery.com/jsonp/result.aspx?code=CA1998&callback=flightHandler"
  // 创建script标签，设置其属性
  var script = document.createElement('script')
  script.setAttribute('src', url)
  // 把script标签加入head，此时调用开始
  document.getElementsByTagName('head')[0].appendChild(script)
  </script>
</head>
<body>
</body>
</html>
```

###### result.aspx页面生成代码
```
flightHandler({
  "code": "CA1998",
  "price": 1780,
  "tickets": 5
})
```

## jQuery实现JSNOP
```
jQuery(document).ready(function(){
  $.ajax({
     type: "get",
     async: false,
     url: "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998",
     dataType: "jsonp",
     // 传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
     jsonp: "callback",
     //自定义的jsonp回调函数名称,默认为jQuery自动生成的随机函数名，也可以写"?",jQuery会自动为你处理数据
     jsonpCallback:"flightHandler",
     success: function(json) { // 帮你生成回调函数并把数据取出来供success属性方法来调用
       alert('您查询到航班信息: 票价:' + json.price + ' 元，余票:' + json.tickets + '张')
     },
     error: function() {
       alert('fail')
     }
   })
})
```

#### 总结
* ajax和jsonp本质是不同的,ajax是通过 XmlHttpRequest 获取非本页内容，而jsonp是动态添加 script 标签来调用服务器提供的js脚本

* 所以说，其实ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取。

* jsonp是一种方式或者说非强制性协议，如同ajax一样，它也不一定非要用json格式来传递数据，如果你愿意，字符串都行，只不过这样不利于用jsonp提供公开服务。

