---
title: flex
toc: true
abbrlink: 98a28c55
date: 2017-02-16 18:07:13
---

## 容器属性

flex-direction 决定主轴的方向
```js
row | row-reverse | column | column-reverse
```

flex-wrap 轴线
```
nowrap | wrap | wrap-reverse 不换行，第一行在上，第一行在下
```

flex-flow 是 flex-direction 和 flex-wrap 的简写形式
```
flex-flow: <flex-direction> || <flex-wrap>;
```

```css
/*  水平方向 */
justify-content : flex-start 偏左 默认
justify-content : flex-end 偏右
justify-content : center 居中
justify-content : space-between 左右对齐 item居中
justify-content : space-around 每个item两端间隔相等
```

```css
/* 垂直方向 */
align-items : flex-start; /* 交叉轴的起点对齐 */
align-items : flex-end; /* 交叉轴的终点对齐 */
align-items : center; /* 交叉轴的中点对齐 */
align-items : baseline; /* 项目的第一行文字的基线对齐 */
align-items : stretch（默认值）/* 如果项目未设置高度或设为auto，将占满整个容器的高度 */
/*
  表示item在cross axis上的对齐方式,基于cross axis的顶部
  ｜基于cross axis的底部
  ｜基于cross axis的中部
  ｜布满整个
*/
```


```
to do
多根轴线的对齐方式
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```

flex-flow
```
属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
```

## 子容器属性

```css
flex-grow  : 0; /* 索取剩余空间 */
flex-shrink: 1; /* 压缩比例 */
flex-basis : 0; /*  替代width */
flex: 0 1 0;
```

1、剩余空间＝父容器空间－子容器1.flex-basis/width - 子容器2.flex-basis/width
2、超出父容器，就走压缩 flex-shrink，否则走flex-grow
3、容器在任何时候都不被压缩f lex-shrink: 0
4、子容器flex-basis 为 0, 那么计算剩余空间的时候将不会为子容器预留空间
5、子容器flex-basis 为 auto, 那么计算剩余空间的时候将会根据子容器内容的多少来预留空间

 align-self
```
flex-start | flex-end | center | stretch
它允许项目中当个item和其他itemsyou不一样的对齐方式，会覆盖alignitems的属性
```

参考地址 https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://github.com/baiwenhao/flex.git
https://www.w3cplus.com/css3/flexbox-layout-and-calculation.html

http://zh.learnlayout.com/flexbox.html








