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
导出图片的时候经常报画布被污染，用node做个中间层，保证在同一个域名，
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

// 图片来自网络
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

## download gif
```js
import download from 'downloadjs'

downImg () {
  const test = 'http://testimg.51biaoqing.com'
  const host = 'maketest.51biaoqing.com'
  let url = document.querySelector('#build_img').src
  if (location.host === host) {
    url = url.replace('http://image.51biaoqing.com', test)
  }
  const x = new XMLHttpRequest()
  x.open('GET', url, true)
  x.responseType = 'blob'
  x.onload = (e) => {
    download(e.target.response, (Math.random() + '').slice(2) + '.gif', 'image/gif')
  }
  x.send()
}
```

## Uint8Array to base64
```js
const Uint8ToString = (u8a) => {
  const CHUNK_SZ = 0x8000
  const c = []
  for (let i = 0; i < u8a.length; i += CHUNK_SZ) {
    c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SZ)))
  }
  return c.join('')
}

// 赋值src时要手动添加 data:image/gif;base64,
const base64 = btoa(Uint8ToString(data))

// Uint8Array
const u82 = new Uint8Array(atob(b64encoded).split('').map((c) => {
  return c.charCodeAt(0)
}))
```
https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string

## blob to base64
```js
const fr = new FileReader()
fr.onloadend = () => {
  console.log(fr.result)
  // dataUrl.split(',')[1]
}
fr.readAsDataURL(blob)
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

## 吸色
https://stackoverflow.com/questions/48249044/how-to-get-the-buffer-data-of-my-image-in-img


http://ju.outofmemory.cn/entry/332635
http://www.helloblogs.cn/blogs/?p=93  jsgif
https://www.tumblr.com/tagged/omg-gif

