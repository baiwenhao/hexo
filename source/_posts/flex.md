---
title: flex
abbrlink: 98a28c55
date: 2017-02-16 18:07:13
tags:
---

### container属性
flexDirection: row | column 主轴方向水平 | 垂直
flexWrap: wrap | nowrap 所有元素基于一行

alignIterms: flex-start | flex-end | center | stretch
表示item在cross axis上的对齐方式,基于cross axis的顶部｜基于cross axis的底部｜基于cross axis的中部｜布满整个

justifyContent: flex-start | flex-end | center | space-between | space-around
表示item在 main axis 上的对齐方式，基于主轴开始｜基于主轴结束｜居中｜左右两边对齐，item间隔相等｜每个item两端间隔相等

### item属性
flex: num 所占比例大小
alignSelf: flex-start | flex-end | center | stretch
它允许项目中当个item和其他itemsyou不一样的对齐方式，会覆盖alignitems的属性