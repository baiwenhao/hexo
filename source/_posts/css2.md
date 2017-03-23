---
title: css
toc: true
abbrlink: '32978573'
date: 2017-02-16 18:21:13
---

## 字体
```
@ 宋体      SimSun
@ 黑体      SimHei
@ 微信雅黑   Microsoft Yahei
@ 微软正黑体 Microsoft JhengHei
@ 新宋体    NSimSun
@ 新细明体  MingLiU
@ 细明体    MingLiU
@ 标楷体    DFKai-SB
@ 仿宋     FangSong
@ 楷体     KaiTi
@ 仿宋_GB2312  FangSong_GB2312
@ 楷体_GB2312  KaiTi_GB2312
@ 说明：中文字体多数使用宋体、雅黑，英文用Helvetica
body { font-family: Microsoft Yahei,SimSun,Helvetica; }
font:120px bold 'Arial Rounded MT Bold'
```

## iconfont
```
http://fortawesome.github.io/Font-Awesome/examples/
<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
<i class="fa fa-camera-retro fa-globe"></i>
```

## text
```
加减号字体 monospace
大数字字体 Georgia 
p:first-line 首单词大写
p:first-letter 首字母大写
font-family:'Microsoft YaHei', arial,tahoma, 宋体, sans-serif
white-space: wpre 段落文本不换行
pointer-events:none 不接受事件
word-break : break-all 单词不被断开
text-transform:capitalize 首字大写
text-transform:uppercase 大写
text-transform:lowercase 小写
text-shadow x位移，y位移，阴影宽度（不能是负数），颜色 ，文字阴影
text-stroke 文字描边
text-fill-color 文字颜色填充
direction: ltr 文本排列方式
letter-spacing: 字间隔，英文是字母间隔
word-spacing: 英文单词间隔
word-break:break-all 强制英文单词断行
word-wrap:break-word 自动换行
white-space:nowrap 强制不换行
```

## table
```
cellpadding="0" cellspacing="0" border="0"
link visited hover active
border-collapse:collapse;
colspan rowspan
getElementsByTagName(' tbody')[0]         .tBodies[0]
getElementsByTagName('tr')[0].            .rows[0]
getElementsByTagName('td')[1].innerHTML;  .cells[1]
还有 tHead 和 tFoot
border-spacing ?
```

## data
```
data:,<文本数据>
data:text/plain,<文本数据>
data:text/html,<HTML代码>
data:text/html;base64,<base64编码的HTML代码>
data:text/css,<CSS代码>
data:text/css;base64,<base64编码的CSS代码>
data:text/javascript,<Javascript代码>
data:text/javascript;base64,<base64编码的Javascript代码>
data:image/gif;base64,base64编码的gif图片数据
data:image/png;base64,base64编码的png图片数据
data:image/jpeg;base64,base64编码的jpeg图片数据
data:image/x-icon;base64,base64编码的icon图片数据
```

## box-sizing
```css
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
-o-box-sizing: border-box;
-ms-box-sizing: border-box;
 border和padding则是被包含在宽高之内的
```

## link 
```
media="screen and(min-width:660px) and(max-width:900px)"
media="all and(orientation:portrait)" #竖
media="all and(orientation:landscape)" #横
media="only screen and (max-width:480px),only screen and(max-width:480px)"
@media screen and (min-width:600px) and(max-width:900px){}
@media screen and (max-device-width:488px){}
@media not screen and (max-device-width:480px) 
@media only screen and (max-device-width:480px) 
```

## 实例
```
textarea::-moz-placeholder{ // 默认
      color: red;
      opacity: 1;
}
textarea:focus::-moz-placeholder{ // 焦点事件
      color: blue;
}
.simpleBlock {
    width: calc(100% - 100px);
    background: #000;
    margin: 0 auto;
}
.complexBlock {
    width: calc(100% - 50% / 3);
    padding: 5px calc(3% - 2px);
    margin-left: calc(10% + 10px);
}
```

## example
```
移动
div{
     width:100px;
     height:100px;
     background:red;
     position: absolute;
     animation: myfirst 1s linear 2s infinite alternate;
     -o-animation: myfirst 1s linear 2s infinite alternate;
     -moz-animation: myfirst 1s linear 2s infinite alternate;
     -webkit-animation: myfirst 1s linear 2s infinite alternate;
}
@keyframes myfirst{
     0%   {left:0px;}
     100% {left:100px;}
}
@-moz-keyframes myfirst{
     0%   {left:0px;}
     100% {left:100px;}
}
@-webkit-keyframes myfirst{
     0%   {left:0px;}
     100% {left:100px;}
}
@-o-keyframes myfirst{
     0%   {left:0px;}
     100% {left:100px;}
}

跷跷板
.iNewsBtn {
    background: #000;
    position: absolute;
    left: 289px;
    top: 229px;
    width: 100px;
    height: 26px;
    transform: perspective(100px) rotateY(0deg);
    transform-origin: center;
    transition: all 0.5s ease;
}
.iNewsBtn:hover {
    transform: perspective(200px) rotateY(-40deg);
}

滑板
#footerNav{
     height: 36px;
     line-height: 36px;
     background: #000;
     color: #fff;
}

#footerNav a {
    float: left;
    display: block;
    width: 100px;
    height: 36px;
    line-height: 36px;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.2s ease 0s;
}
#footerNav strong {
    display: block;
     transform: translateZ(8px);
}
#footerNav em {
    left: 0;
    top: 16px;
    position: absolute;
    transform: translateZ(8px) rotateX(-90deg);
    transform-origin: center top;
}
#footerNav:hover a {
     transform: rotateX(90deg);
}
<div id='footerNav'> 
     <a>
          <em>111111111</em>
          <strong>22222222</strong>           
     </a>
</div>

三角形
.trapezoid {
     position: absolute;
     left: 0;
     top: 0;
     border-right: 900px solid #669;
     border-top: 184px solid transparent;
     overflow: hidden;
     height: 0;
     width: 0;
}

多列
.node{
     column-count: 4;
     -webkit-column-count: 4;
     -webkit-column-gap: 30px;
     column-gap: 30px;
     column-rule: 5px outset #ff0000;
     -webkit-column-rule: 5px outset #ff0000;
}

瀑布流样式
.container{
     column-width: 250px;
     column-gap: 5px;
     -webkit-column-width : 250px;
     -webkit-column-gap: 5px;
}
.container img{
     width: 250px;
}
.container div{
     width: 250px;
     margin: 5px 0;
     border: 1px solid #ddd;
}

backgroundSize
body {
    background: #000 url(1.jpg) center center fixed no-repeat;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
/*1024px X 768px */
@media only all and (max-width: 1024px) and (max-height: 768px) {
    body {  
    -moz-background-size: 1024px 768px;
    -webkit-background-size: 1024px 768px;
    -o-background-size: 1024px 768px;
    background-size: 1024px 768px;
    }
}
/*640px X 480px*/
@media only all and (max-width: 640px) and (max-height: 480px) {
    body {  
    -moz-background-size: 640px 480px;
    -webkit-background-size: 640px 480px;
    -o-background-size: 640px 480px;
    background-size: 640px 480px;
    }
}

animation
#rotate {
        margin: 0 auto;
        width: 600px;
        height: 400px;
        /* 确保我们是在一个 3-D 空间 */
        -webkit-transform-style: preserve-3d;
        /*让整个行使用x-轴旋转、7秒中的动画、无限次播放以及线性 */
        -webkit-animation-name: x-spin;
        -webkit-animation-duration: 7s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
}
/* 定义要调用的动画 */
@-webkit-keyframes x-spin {
        0% { -webkit-transform: rotateX(0deg); }
        50% { -webkit-transform: rotateX(180deg); }
        100% { -webkit-transform: rotateX(360deg); }
}

亮光
.light{position:  absolute; left: 0px; top: 0; width: 50%; height: 100%;
 background-image: -webkit-linear-gradient(0deg,
  rgba(255, 255, 255, 0),
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0));  
 -webkit-transform: skewx(-25deg);
 -webkit-transition:0s;
 background-image: -moz-linear-gradient(0deg,
  rgba(255, 255, 255, 0),
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0));  
 -moz-transform: skewx(-25deg);
 -moz-transition:0s;
}

苹果开机
body{background:#000;}
.box{
 padding: 0 240px;
 font-size:130px;
 font-family:"微软雅黑";
 color:rgba(255,255,255,0.2);
 background:-webkit-linear-gradient(0,
  rgba(255,255,255,0.1) 1%,
  rgba(255,255,255,0.5) 5%,
  rgba(255,255,255,1) 10%,
  rgba(255,255,255,0.5) 15%,
  rgba(255,255,255,0) 20%);
 -webkit-background-clip:text;
 -webkit-transition:1s linear all;
}
.box:hover{background-position:700px 0;}
<div class="box">iPhone</div>

伪类使用
p.login a {
    display: inline-block;
    width: 200px;
    height: 60px;
    background: #F98183;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    border-radius: 30px;
    color: white;
    text-shadow: 0 1px 0 #F8474F;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 50px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -mz-user-select: none;
    user-select: none;
}
p.login a:active {
 background: #FF6161;
 -webkit-transform: scale(0.95);
 transform: scale(0.95);
}

p.login a:before {
    content: ' ';
    display: block;
    background: rgba(255, 255, 255, .2);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    transform: scale(0, 1);
    -webkit-transform: scale(0, 1);
    transition: transform 0.3s ease;
    -webkit-transition: -webkit-transform 0.3s ease;
}

p.login a:hover:before {
    transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
}
<p class="login"><a>马上开启</a></p>

滚动条
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: none;
}
::-webkit-scrollbar-thumb {
  background: -webkit-linear-gradient(left, #547c90, #002640);
  border: 1px solid #333;
  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.4);
}



顶部阴影
body:before {
 content: "";
 position: fixed;
 top: -10px;
 left: 0;
 width: 100%;
 height: 10px;
 -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
 -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
 box-shadow: 0px 0px 10px rgba(0,0,0,.8);
 z-index: 100;
}

圆角效果
.wrapper {
  margin: 50px auto;
  width: 280px;
  height: 370px;
  background: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px rgba(0,0,0,0.3);
  -moz-box-shadow:    0px 0px 8px rgba(0,0,0,0.3);
  box-shadow:         0px 0px 8px rgba(0,0,0,0.3);
  position: relative;
  z-index: 90;
}
 
.ribbon-wrapper-green {
  width: 85px;
  height: 88px;
  overflow: hidden;
  position: absolute;
  top: -3px;
  right: -3px;
}
 
.ribbon-green {
  font: bold 15px Sans-Serif;
  color: #333;
  text-align: center;
  text-shadow: rgba(255,255,255,0.5) 0px 1px 0px;
  -webkit-transform: rotate(45deg);
  -moz-transform:    rotate(45deg);
  -ms-transform:     rotate(45deg);
  -o-transform:      rotate(45deg);
  position: relative;
  padding: 7px 0;
  left: -5px;
  top: 15px;
  width: 120px;
  background-color: #BFDC7A;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#BFDC7A), to(#8EBF45));
  background-image: -webkit-linear-gradient(top, #BFDC7A, #8EBF45);
  background-image:    -moz-linear-gradient(top, #BFDC7A, #8EBF45);
  background-image:     -ms-linear-gradient(top, #BFDC7A, #8EBF45);
  background-image:      -o-linear-gradient(top, #BFDC7A, #8EBF45);
  color: #6a6340;
  -webkit-box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
  -moz-box-shadow:    0px 0px 3px rgba(0,0,0,0.3);
  box-shadow:         0px 0px 3px rgba(0,0,0,0.3);
}
 
.ribbon-green:before, .ribbon-green:after {
  content: "";
  border-top:   3px solid #6e8900;  
  border-left:  3px solid transparent;
  border-right: 3px solid transparent;
  position:absolute;
  bottom: -3px;
}
 
.ribbon-green:before {
  left: 0;
}
.ribbon-green:after {
  right: 0;
}
<div class="wrapper">
       <div class="ribbon-wrapper-green"><div class="ribbon-green">NEWS</div></div>
</div>

描边转动效果
.bb,
.bb::before,
.bb::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.bb {
    width: 200px;
    height: 200px;
    margin: auto;
    background: no-repeat 50%/70% rgba(0, 0, 0, 0.1);
    color: #69ca62;
    box-shadow: inset 0 0 0 1px rgba(105, 202, 98, 0.5);
}
.bb::before,
.bb::after {
    content: '';
    z-index: -1;
    margin: -5%;
    box-shadow: inset 0 0 0 2px;
    animation: clipMe 8s linear infinite;
}
.bb::before {
    animation-delay: -4s;
}

@keyframes clipMe {
    0%,
    100% {
        clip: rect(0px, 220px, 2px, 0px);
    }
    25% {
        clip: rect(0px, 2px, 220px, 0px);
    }
    50% {
        clip: rect(218px, 220px, 220px, 0px);
    }
    75% {
        clip: rect(0px, 220px, 220px, 218px);
    }
}
<div class="bb"></div>

谷歌垃圾桶
-webkit-transform-origin: -7% 100%;
-webkit-transition: -webkit-transform 150ms;

移动
transition: -webkit-transform .5s ease;
-webkit-transform:translate3d(0, 0, 0);

-webkit-transform:translate3d(500px, 0, 0);

奇怪
border-radius:20px 40px 80px 100px/20px 40px 80px 100px;
div{
    width:300px;
    height:300px;
    background:url(./shuaige.jpg) center no-repeat ;
    border-image-source:url(./border.png);/*边框图片属性*/
    border-image-width:27px;/*边框图片宽度属性*/
    border-image-slice:27;/*边框图片切割属性*/
    border-image-outset:0px;/*边框图片扩展属性*/
    border-image-repeat:stretch;/*边框图片重复属性*/
}

原点渐变
.ez-lamp.on{opacity : 1;background : -webkit-radial-gradient(30% 30%,white 5%,red 95%);}

右键选不中
<div class="test" onselectstart="return false;" unselectable="on">选择我试试，你会发现怎么也选择不到我，哈哈哈哈</div>

灰色img
img.desaturate {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
}
```

LESS
darken(#26b095,10%)

## demo
```
5环相连
http://www.cnblogs.com/lianjun/archive/2011/03/11/1981606.html
```

参考:
http://isux.tencent.com/css3/?animation-fill-mode
http://www.17sucai.com/boards/73928.html
http://www.cnblogs.com/chocking/p/4672191.html

