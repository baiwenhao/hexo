---
title: vue
date: 2017-02-07 15:06:10
categories: javascript
---

## template
```
div.innerHTML = template
this.$parent.$compile(div)
this.$el.appendChild(div)
<my inline-template></my>
```


## vue
````
events: {targetParentEvent() {}}
this.$dispatch('targetParentEvent', params)

this.$router.go({name:'', query:{}})
this.$route.query.name
```


## 异步
    <switch :value.sync="status" :disabled="disabled"></switch>

## 路由
```
this.$router.go({
    name: 'detail', 
    params:{
        type: self.type,
        subEstateId: self.areaTest.estateId,
        building: self.building.buildingName,
        room: self.roomTest
    }, query: {
        userId: self.$route.query.userId
    }
});
v-link="{name: 'list', params: {taskId: v.taskId}, query: {userId: $route.query.userId}}”

http://www.jianshu.com/p/afd8e1db7d9b

不加跨域xhr会发起options请求
Vue.http.options.headers={
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
};
post的时候会把JSON对象转成formdata
Vue.http.options.emulateJSON=true;

then后面跟的函数
['finally'](function() {
  self.loading = false;
})

complete失败成功都会调用
finally 最后

可读性
1.上线代码不要有注释代码
2.页面静态数据 放到单独js文件维护

踩坑记录
<img :src="user.realName" />  不用:img={{d.d}}

{{d.name}}  当d.name的值为 null 会报错
过滤data中值等于null的对象即可, 存一个临时对象 然后赋值this.d = data

this.$emit('on-confirm', params)触发当前实例events事件 
1可以在父类events方法里定义方法
2子组件调用<confirm @on-confirm="methods"></confirm>
 父类可以在methods里面添加方法

this.$dispatch('events', params)在子类触发父类events事件

<a :href="'tel:' + data.hostVirtualPhone">拨打电话</a>

只要是按钮 ,1确定有多少种状态 2防止多次点击,比如支付 

this.$route.query取出来的值都是字符串包括数字

{{this.$route.query.type === '1' && '万'}} 这么写有错

v-for循环重复数据的时候加<span track-by="$index"

布局要么全部fixed 要么都别用，否则在苹果手机上上下滚动会很难看，
fixed定位的不会滑动，没定位的会滑上滑下

Toast 报错信息很多都是英文没有折行 因此加上word-break:break-all;

设置请求的超时时间Vue.http.options.timeout = 5000

不要直接用query参数,请求用到的参数都创建一个本地变量,

在支付页面添加网络提示语句
手机上两个事件会同时触发,只绑定断网就好
window.addEventListener("offline", function(e) {alert("离线");})
window.addEventListener("online", function(e) {alert("在线");})
if(window.navigator.onLine){
    alert('在线')}
else{
    alert('离线')
}

iphone6plus 字符串是.的时候不吃行高,要加vertical-align: top;

给window绑定匿名函数时在单页引用下,会绑定多次

当一个值被记录的时候要考虑他的进场 改变 出场 状态
```