---
title: vue
toc: true
abbrlink: f8e09374
date: 2017-02-07 15:06:10
---

https://github.com/lzxb/vue2-demo/blob/master/docs/2.md
//  未完待续
https://vuefe.cn/v2/guide/forms.html#在组件中使用-v-model
## vue
````
events: {targetParentEvent() {}}
this.$dispatch('targetParentEvent', params)

:value.sync="status" :disabled="disabled"

不加跨域xhr会发起options请求
Vue.http.options.headers={
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

post的时候会把JSON对象转成formdata
Vue.http.options.emulateJSON = true

// vue-resource
['finally'](function() {
  self.loading = false;
})
complete失败成功都会调用
finally 最后

// vue-router
this.$router.go({name:'', query:{}})
this.$route.query.name
```

## vue2
生命周期
created

```js
// 模板 表达式
<span v-once>发生变动list不会发生变化: {{ list }}</span>
{{ ok ? 'YES' : 'NO' }}
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>

// 修饰符
<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model.lazy="msg" >
<input v-model.trim="msg">
<input v-model.number="age" type="number">

// 样式
:style="{'width': w}"

// 父类调用子类方法
this.$refs.child.reset()
<child-component ref="child"></child-component>

// 子类调用父类方法
this.$parent.$emit('reset')

// 或者父类在子组件上注册事件,子类可以在内部调用
<child-component @load='reset'></child-component>
this.$emit('load')

// 过滤关键字 存储的时候记得存原始对象
Vue.filter('hightKey', function(key, word) {
  const r = eval("/" + word + "/gi")
  key.replace(r, function(code) {
    return '<font color="green">' + code + '</font>'
  })
  return key
})
<span>{{item.name | hightKey(searchname)}}</span> // 多个过滤器将从左到右依次执行
<!-- <span v-html="item.names"></span> -->

// 关于路由
this.$route.params
this.$route.query
```

## 踩坑记录
```
<img :src="user.realName" />

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

iphone6plus 字符串是.的时候不吃行高,要加vertical-align: top

给window绑定匿名函数时在单页引用下,会绑定多次

当一个值被记录的时候要考虑他的进场 改变 出场 状态

即使带宽zaikuai,所有的loading 都添加一点延迟

// 数组
初始化一个data对象位，当数据返回null或者string,在组件内部循环data数组就会报错，webview报错就会推出
因此即使status给的是0,也要加上res.data.length >= 1 的判断

actions 触发的动作事件，不建议放到对应组件内部触发，如果组件多个地方用到，有些页面不需要初始化设置高亮 或者 默认高亮的 逻辑 就不好写了


```

参考
https://github.com/lzxb/vue2-demo 登录注册









