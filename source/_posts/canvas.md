---
title: canvas
abbrlink: a59f6c18
date: 2018-06-25 09:49:44
tags:
---

## canvas
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

## toDataURL
导出图片的时候经常报画布被污染，最终是用node做个中间层，保证在同一个域名，
```js
const request = require('request')
const resolve = (dir) => path.join(__dirname, '..', dir)
const cors = require('cors')
const path = require('path')

app.get('/getFaceImg', cors(), (req, res) => {
  const _url = req.query.url
  // const _url = 'http://image.51biaoqing.com/templet/preview/2b7d926d9d7c42dda19db51b9a3bbcdc.png'
  const arr = _url.split('/')
  const name = arr[arr.length - 1]
  const abs = resolve('../dist/' + name)
  request(_url).pipe(fs.createWriteStream(abs))
  res.json({ url: 'dist/' + name })
})

/* --- 前端 --- */
img.setAttribute('crossOrigin', 'Anonymous')
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

## 阅后即焚
source-over 默认。在目标图像上显示源图像
source-atop 在目标图像顶部显示源图像,源图像位于目标图像之外的部分是不可见的
source-in 在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的,
source-out  在目标图像之外显示源图像,只会显示目标图像之外源图像部分，目标图像是透明的,
destination-over  在源图像上方显示目标图像,
destination-atop  在源图像顶部显示目标图像,源图像之外的目标图像部分不会被显示,
destination-in  在源图像中显示目标图像,只有源图像内的目标图像部分会被显示，源图像是透明的,
destination-out 在源图像外显示目标图像,只有源图像外的目标图像部分会被显示，源图像是透明的,
lighter 显示源图像 + 目标图像。
copy  显示源图像。忽略目标图像。
xor 使用异或操作对源图像与目标图像进行组合
```js
ctx.globalCompositeOperation = 'source-atop'
```

关于圆角
```js
ctx.lineJoin = 'round'
ctx.lineWidth = 20
ctx.strokeRect(50, 100, 100, 50) // 正对 stroke 有效果

// 还是靠path了
// https://blog.csdn.net/sarkuya/article/details/49793531
```


http://ju.outofmemory.cn/entry/332635

