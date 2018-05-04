---
title: weixin
abbrlink: f3627c01
date: 2017-02-17 13:36:36
tags:
---

### 用户调整字体大小页面布局出错,怎么阻止用户调整
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

### 本地存储
```js
var logs = wx.getStorageSync('logs') || []
logs.unshift(Date.now())
wx.setStorageSync('logs', logs)


```

获取地理位置
```js
wx.getLocation({
  type: 'wgs84',
  success: (res) => {
    var latitude = res.latitude // 经度
    var longitude = res.longitude // 纬度
  }
})
```

扫一扫
```js
wx.scanCode({
  success: (res) => {
    console.log(res)
  }
})
```

跳转页面
```js
wx.navigateTo({
  url: '../logs/logs'
})
```

转发配置
```js
onShareAppMessage: function (e) {
  return {
    title: '51表情制作器',
    path: 'pages/index/index'
  }
}
```

获取基础库版本号
```js
wx.getSystemInfo({ success: (res) => {} })
wx.getSystemInfoSync()
```

开启蓝牙适配器
```js
wx.openBluetoothAdapter()
```

弹框提示
```js
wx.showModal({
  title: '提示',
  content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
})
```

提示组件
```js
function showLoading(message) {
  if (wx.showLoading) {
    // 基础库 1.1.0 微信6.5.6版本开始支持，低版本需做兼容处理
    wx.showLoading({
      title: message,
      mask: true
    })
  } else {
    // 低版本采用Toast兼容处理并将时间设为20秒以免自动消失
    wx.showToast({
      title: message,
      icon: 'loading',
      mask: true,
      duration: 20000
    });
  }
}

function hideLoading() {
  if (wx.hideLoading) {
    // 基础库 1.1.0 微信6.5.6版本开始支持，低版本需做兼容处理
    wx.hideLoading();
  } else {
    wx.hideToast();
  }
}
```

### 生命周期
https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html




