---
title: weixin
abbrlink: f3627c01
date: 2017-02-17 13:36:36
tags:
---

##### 用户调整字体大小页面布局出错,怎么阻止用户调整
```
//以下代码可使Android机页面不再受用户字体缩放强制改变大小，但是会有1S左右延时，期间可以考虑loading来处理
if (typeof(WeixinJSBridge) == "undefined") {
    document.addEventListener("WeixinJSBridgeReady", function (e) {
        setTimeout(function(){
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize':0}, function(res){
                alert(JSON.stringify(res));
            })
        }, 0)
    });
}else{
    setTimeout(function(){
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize':0}, function(res){
            alert(JSON.stringify(res));
        })
    }, 0)
}

//IOS下可使用 -webkit-text-size-adjust禁止用户调整字体大小
body { -webkit-text-size-adjust:100%!important; }

//最好的解决方案：最好使用rem或百分比布局
```

WeixinJSBridge.call('closeWindow') // 关闭窗口

## 小程序
app.json

```js
"tabBar": {
    "position": "top",
    "selectedColor": "green",
    "color": "#333333",
    "list": [{
        "pagePath": "pages/index/index",
        "text": "首页"
    },
    {
        "pagePath": "pages/logs/logs",
        "text": "日志"
    }]
}
```

