---
title: canvas
abbrlink: a233692e
date: 2017-02-07 15:36:40
---

### 绘制环境
    .get(0).getContext('2d') // 默认300*150


### 绘制方块
     oCantext.fillRect(50,50,50,50);//填充的
     oCantext.strokeRect(50,50,100,100);//线

### 设置绘图
     fillStyle填充颜色（注意大小写）
     lineWidth线宽度 同时影响画线path 和                     strokeRect(10,10,200,200)
     strokeStyle边线颜色

### 边界绘制
     lineJoin (round,bevel)边界连接点样式(圆角,斜角)

### 绘制路劲
     oCantext.beginPath();开始
     oCantext.moveTo(100,100);起点
     oCantext.lineTo(200,100);//绘制
     oCantext.closePath();//结束
     oCantext.stroke();//填充

### 绘制文本
     var text = 'hello';
     oContext.font = 'italic 12px impact';
     oContext.fillText (text,10,10,400);
     oContext.textAlign = 'center';

### 擦除画布
     oContext.clearRect( x, y, canvas.width, canvas.height );

### canvas填充浏览器
     function resizeCanvas(){
          canvas.attr( 'width', $(window).get(0).innerWidth );
          canvas.attr( 'height', $(window).get(0).innerHeight );
          context.fillRect(0, 0, canvas,width(), canvas.height() );
     }

### 保存和恢复
     oContext.save();//保存后只可回复一次,从最后一个开始
     oContext.restore();

### 变形
     oContext.translate(150, 150);平移
     oContext.scale(2, 2);缩放
     oContext.rotate(0.7854);// Math.PI/4
     oContext.transform(2,        0,       0,       2,       150,    150);
                                  x缩放, y倾斜, x倾斜, y缩放, x平移, y平移
### 全局阿尔法值
     oContext.globalAlpha = 0.5;  rgba的alpha 相乘

### 合成操作
     context.globalCompositeOperation = 'source-over';
     context.globalCompositeOperation = 'destination-over';
     context.globalCompositeOperation = 'source-atop';
     context.globalCompositeOperation = 'destination-atop';
     context.globalCompositeOperation = 'source-in';
     context.globalCompositeOperation = 'destination-in';
     context.globalCompositeOperation = 'source-out';
     context.globalCompositeOperation = 'destinaion-out';
     context.globalCompositeOperation = 'lighter';
     context.globalCompositeOperation = 'copy';
     context.globalCompositeOperation = 'xor';

### 阴影
     var gradient = context.createLinearGradient(0, 0, 0, canvas.height);//渐变起点x,y | 渐变终点x,y
     gradient.addColorStop(0, 'rgb(0, 0, 0)')
     gradient.addColorStop(1, 'rgb(255, 255, 255)')
     context.fillStyle = gradient
     context.fillRect(0, 0, canvas.width, canvas.height)

     var canvasCentreX = canvas.width/2
     var canvasCentreY = canvas.height/2
     var gradient = context.createRadialGradient(canvasCentreX, canvasCentreY, 0, canvasCentreX, canvasCentreX, 250)
     gradient.addColorStop(0, 'rgb(0, 0, 0)')
     gradient.addColorStop(1, 'rgb(150, 150, 150)')
     context.fillStyle = gradient
     context.fillRect(0, 0, canvas.width, canvas.height)

### 圆形
     context.beginPath()
     context.arc( 230, 90, 50, 0, Math*2, false)
     context.arc( x, y, radius, startAngle, endAngle, anticlockwise)
     context.closePath()
     context.fill()
     圆弧原点(x,y)坐标值，圆弧半径，开始角度，结束角度，布尔值

     oContext.setTransform(1, 0, 0, 1, 0, 0)
     var xScale = Math.cos(0.7854)
     var ySkew = -Math.sin(0.7854)
     var xSkew = Math.sin(0.7854)
     var yScale = Math.cos(0.7854)
     var xTrans = 200
     var yTrans = 200

     oContext.transform(xScale,ySkew,xSkew,yScale,xTrans,yTrans)
     oContext.fillRect(-50, -50, 100, 100)


### 灰色方块充满canvas
     $(document).ready(function() {
     var canvas = $("#myCanvas")
     var context = canvas.get(0).getContext("2d")

     $(window).resize(resizeCanvas)
          function resizeCanvas() {
               canvas.attr("width", $(window).get(0).innerWidth)
               canvas.attr("height", $(window).get(0).innerHeight)
               context.fillRect(0, 0, canvas.width(), canvas.height())
          }
          resizeCanvas()
     })
     resizeCanvas()
