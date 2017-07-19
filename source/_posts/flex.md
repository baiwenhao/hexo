---
title: flex
toc: true
abbrlink: 98a28c55
date: 2017-02-16 18:07:13
---

## 容器属性
### flex-direction
```
row | row-reverse | column | column-reverse 主轴的方向
```

### flex-wrap
```
nowrap | wrap | wrap-reverse 轴线
```

### justify-content
```
主轴对齐方式
flex-start 偏左 默认
flex-end 偏右
center 居中
space-between 左右对齐 item居中
space-around 每个item两端间隔相等
```

### align-items
```
交叉轴(垂直)上如何对齐
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
表示item在cross axis上的对齐方式,基于cross axis的顶部｜基于cross axis的底部｜基于cross axis的中部｜布满整个
```

### align-content
```
多根轴线的对齐方式
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```

### flex-flow
```
属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
```

## 项目属性

### order
```
1111
```

### flex-grow
```
1111
```

### flex-shrink
```
2222
```

### flex-basis
```
222
```

### flex
```
222
```

### align-self
```
flex-start | flex-end | center | stretch
它允许项目中当个item和其他itemsyou不一样的对齐方式，会覆盖alignitems的属性
```

#### 参考地址 https://css-tricks.com/snippets/css/a-guide-to-flexbox/
### https://github.com/baiwenhao/flex.git


http://zh.learnlayout.com/flexbox.html








