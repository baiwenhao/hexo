---
title: mobile
abbrlink: 3bdf26d6
date: 2018-06-08 14:27:45
tags:
---

## terminal
https://github.com/madrobby/zepto/blob/master/src/detect.js#files

## wx
```js
const isWeixin = () => {
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}
```

微信页面 引入jsdk 可以直接调用
```js
wx.previewImage({
  current: e.target.src,
  urls: this.list
})
```

## android
解决输入框获取焦点后，软键盘挡住input的问题，最近总是碰到这个问题，今天彻底解决下,
js 是没办法直接获取软键盘的高度，我这里暂时写成百分比，除非 android 通过参数告知前端
如果有兼容性问题存在，请告诉我 qq：17899850 wx：bwh2009

```js
const slideAndroid = {
  goTop (e, n) {
    const scrollTop = window.pageYOffset
    const top = this.getOffset(e.target, 'offsetTop')
    const height = parseInt(window.innerHeight * n) + scrollTop
    btn.innerHTML = scrollTop
    if (top > height) {
      this.h = parseInt(top - height)
      document.body.style.height = document.body.offsetHeight + this.h + 'px'
      window.scrollBy(0, this.h)
    } else {
      this.h = 0
    }
  },
  goDown (e, n) {
    btn.innerHTML = window.pageYOffset + '-' + this.h
    if (this.h) {
      document.body.style.height = document.body.offsetHeight - this.h + 'px'
      if (window.pageYOffset === this.h) {
        window.scrollTo(0, 0)
      } else {
        window.scrollTo(0, window.pageYOffset - this.h)
      }
    }
  },
  getOffset (el, type) {
    let off = el[type]
    let par = el.offsetParent
    while (par) {
      off += par[type]
      par = par.offsetParent
    }
    return off + el.offsetHeight
  }
}

// 调用方法
const android = navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
if (android) {
  switch (t) {
    case 'focus':
      slideAndroid.goTop(e, 0.55)
      break
    case 'blur':
      slideAndroid.goDown(e, 0.55)
      break
  }
}
```

## clip
目前都是内侧版本，有时图片和文字会丢失，记得保存的时候输入框失去焦点，图片编译成base64，就没问题了
https://github.com/eKoopmans/html2canvas/tree/develop/dist
http://html2canvas.hertzen.com/configuration/
```js
html2canvas($(".box"), {
  allowTaint: true,
  taintTest: false,
  width: w,
  height: h,
  // window.devicePixelRatio是设备像素比
  dpi: window.devicePixelRatio,
  onrendered: function(canvas) {
      const dataUrl = canvas.toDataURL("image/png", 1.0),
            newImg = document.createElement("img");
      newImg.src = dataUrl;
      $('.box').empty().append(newImg);
      newImg.style.width = '100%';
  }
})
```

## FastClick
https://www.cnblogs.com/vajoy/p/5522114.html
http://www.cnblogs.com/yexiaochai/p/3442220.html


