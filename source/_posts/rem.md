---
title: rem
abbrlink: 83bde72b
date: 2017-02-17 11:19:14
tags:
---

小米5s 360px
![logo](frontEnd/2.jpeg)
- - -

iphone4s 320px
![logo](frontEnd/1.jpeg)

- 多数webapp都具有以下特点
 + 顶部 和 底部 的bar不管分辨率多大，高度和位置是固定的
 + 中间内容按照宽度不同平分即可，左右布局的话是中间宽度变化

- 典型的弹性布局开发原则
 + 文字流式
 + 空间弹性
 + 图片等比缩放

![logo](frontEnd/001.jpeg)
- - -
![logo](frontEnd/002.jpeg)

> 现在大多数设计师是按照iphone6 设备的宽出设计稿的，
iphone6宽度是375px，iphone4宽度是320px，
如果设计稿按照iphone6设计，那在iphone4上就显示不下，要做适配，如果就是用iphone4那直接用px，别用rem，避免增加复杂度

#### 网易首页
![logo](frontEnd/003.png)
> 可以看到用了rem做设备的大小适配
window.innerWidth / 7.5

```
// 不用rem
@media screen and (max-width:321px){
  .m-navlist{font-size:15px}
}
@media screen and (min-width:321px) and (max-width:400px){
  .m-navlist{font-size:16px}
}
@media screen and (min-width:400px){
  .m-navlist{font-size:18px}
}
<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

#### 淘宝首页
window.innerWidth / 10
还有一点，某个元素宽度150px，换算成rem是 150 / (window.innerWidth / 10) rem

1.动态设置viewport

```
var scale = 1 / devicePixelRatio;
document.querySelector('meta[name="viewport"]')
.setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

<meta name="viewport" content="initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no">
```

2.动态计算fontsize
```
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
```

3.布局的时候，各元素的css尺寸 = 设计稿标注尺寸/设计稿横向分辨率/10

4.font-size可能需要额外的媒介查询，并且font-size不使用rem，这一点跟网易是一样的

5.font-size可能需要额外的媒介查询，并且font-size不使用rem，这一点跟网易是一样的。

最后还有一个情况要说明，跟网易一样，淘宝也设置了一个临界点，当设备竖着时横向物理分辨率大于1080时，html的font-size就不会变化了，原因也是一样的，分辨率已经可以去访问电脑版页面了

##### 比较网易与淘宝的做法

>共同点：

都能适配所有的手机设备，对于pad，网易与淘宝都会跳转到pc页面，不再使用触屏版的页面
都需要动态设置html的font-size
布局时各元素的尺寸值都是根据设计稿标注的尺寸计算出来，由于html的font-size是动态调整的，所以能够做到不同分辨率下页面布局呈现等比变化
容器元素的font-size都不用rem，需要额外地对font-size做媒介查询
都能应用于尺寸不同的设计稿，只要按以上总结的方法去用就可以了
- - -
>不同点

淘宝的设计稿是基于750的横向分辨率，网易的设计稿是基于640的横向分辨率，还要强调的是，虽然设计稿不同，但是最终的结果是一致的，设计稿的尺寸一个公司设计人员的工作标准，每个公司不一样而已
淘宝还需要动态设置viewport的scale，网易不用
最重要的区别就是：网易的做法，rem值很好计算，淘宝的做法肯定得用计算器才能用好了 。不过要是你使用了less和sass这样的css处理器，就好办多了，以淘宝跟less举例，我们可以这样编写less：

关于这种做法的具体实现，淘宝已经给我们提供了一个开源的解决方案，具体请查看：
https://github.com/amfe/lib-flexible

我公司的做法：
```
const max = 640
const db = document.body
const dc = document.children[0]
const fn = () => {
  const w = window.innerWidth
  if (w < max) {
    dc.style.fontSize = w / 3.2 + 'px'
    db.classList.remove('vue-box')
  } else {
    dc.style.fontSize = max / 3.2 + 'px'
    db.classList.add('vue-box')
  }
}
window.addEventListener('resize', fn)
fn()
```