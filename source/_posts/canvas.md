---
title: canvas
abbrlink: a59f6c18
date: 2018-06-25 09:49:44
tags:
---

### canvas
```js
ctx.fillStyle = '#f00'
ctx.strokeStyle
ctx.lineWidth

ctx.fill()
ctx.stroke()

ctx.lineJoin = 'round'
ctx.lineWidth = 20
ctx.fillRect(50, 50, 150, 100)
ctx.strokeRect(50, 50, 150, 100)
```

## base64
```js
const img2base64 = (url, crossOrigin) => {
  return new Promise(resolve => {
    const img = new Image()

    img.onload = () => {
      const c = document.createElement('canvas')

      c.width = img.naturalWidth
      c.height = img.naturalHeight

      const cxt = c.getContext('2d')

      cxt.drawImage(img, 0, 0)
      resolve(c.toDataURL('image/png'))
    }

    crossOrigin && img.setAttribute('crossOrigin', crossOrigin)
    img.src = url
  })
}
```

## 透明canvas 背景变黑
```js
var renderWhiteCanvas = function (ctx) {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imgData.data
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 255) {
      data[i] = 255
      data[i + 1] = 255
      data[i + 2] = 255
      data[i + 3] = 255
    }
  }
  ctx.putImageData(imgData, 0, 0)
}
```

http://ju.outofmemory.cn/entry/332635