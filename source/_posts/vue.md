---
title: vue
toc: true
abbrlink: f8e09374
date: 2017-02-07 15:06:10
---

1 异步更新队列
Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MutationObserver

## error

```js
vuex.esm.js?edaa:336 [vuex] unknown action type: searchItem
// 说明你的 actions层 没有 searchItem 方法
```

## filter
```js
Vue.filter('hightKey', function(key, word) {
  const r = eval("/" + word + "/gi")
  key.replace(r, function(code) {
    return '<font color="green">' + code + '</font>'
  })
  return key
})
<span>{{item.name | hightKey(searchname)}}</span> // 多个过滤器将从左到右依次执行
<!-- <span v-html="item.names"></span> -->
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

## 条件渲染
```js
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

// v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件不太可能改变，则使用 v-if 较好

v-for="(value, key, index) in object"
v-for="item of items"

v-bind:key="item.id" // 组件内部key是必须的
```

## 修饰符
```js
<form v-on:submit.prevent="onSubmit"></form> // 会在 submit 调用 event.preventDefault()
v-on:keyup.enter
```

## 计算setter
```js
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

参考
https://github.com/lzxb/vue2-demo 登录注册
https://github.com/opendigg/awesome-github-vue/blob/master/README.md // resource
https://github.com/lzxb/vue2-demo/blob/master/docs/2.md
//  未完待续
https://vuefe.cn/v2/guide/forms.html#在组件中使用-v-model


<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model.lazy="msg" >
<input v-model.trim="msg">
<input v-model.number="age" type="number">


## Transition Classes

```js
v-enter 插入元素之前添加,插入完成之后移除
v-enter-active 插入元素之前添加,动画结束之后移除
v-enter-to 插入元素之后添加,(移除v-enter),动画结束之后移除

v-leave 触发离开式过渡时添加,一帧之后移除
v-leave-active 触发离开式过渡时添加,动画完成之后移除
v-leave-to 离开式过渡的结束状态,在触发离开式过渡之后一帧添加,同时,移除 v-leave,在过渡/动画完成之后移除

v-enter-active 和 v-leave-active 可以指定不同的进入/离开过渡 easing 曲线

/* 进入和离开动画可以分别 */
/* 设置不同的持续时间(duration)和动画函数(timing function) */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
```

## 生命周期
beforeCreate 初始化前
created 初始化后

beforeMount 挂载前
mounted 挂载后

beforeUpdate 数据更新前
updated 数据更新后

activated keep-alive 组件激活时调用
deactivated keep-alive 组件停用时调用

beforeDestroy 实例销毁前
destroyed 实例销毁后

## vue-router
最新版本 <a target="_blank" href="https://unpkg.com/vue-router/dist/vue-router.js">vue-router</a>
匹配引擎 <a target="_blank" href="https://github.com/pillarjs/path-to-regexp">path-to-regexp </a>

```js
const userId = 123
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// This will NOT work
router.push({ path: '/user', params: { userId }}) // -> /user
// 提供了path,params会被忽略

// 命名路由
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>


```

## 匹配
| Article | Article |
|:-------------:|:-------------:| :-------------:| :-------------:| -----:|
|[CSS 语法参考](http://tympanus.net/codrops/css_reference)|[CSS3动画手册](http://isux.tencent.com/css3/index.html)|


## vuex
store容器，保存着程序中大部分的状态，组件从store中读取state，如果state在store中发生变化，相应的组件也会得到更新

```js
const store = new vuex.Store({
  state: {
    count: 0
  },
  getters：{
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  },
  actions: {
    incrementAsync ({ commit, state }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  },
  mutations: {
    increment (state) {
      state.count += 1
    }
  }
})

store.commit('increment', { amount: 10 })
store.commit({ type: 'increment', amount: 10 }) // handler 函数仍然保持不变
store.dispatch('incrementAsync', { amount: 10 })
store.dispatch({ type: 'incrementAsync', amount: 10 })

```

### mapState
辅助函数帮助我们生成计算属性
```
// 
computed: mapState({
  // 箭头函数可使代码更简练
  count: state => state.count,

  // 传字符串参数 'count' 等同于 `state => state.count`
  countAlias: 'count',

  // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  countPlusLocalState (state) {
    return state.count + this.localCount
  }
})

```

### mapGetters
从 store 中的 state 中派生出一些状态, 如对列表进行过滤并计数
```js
getters: {
  doneTodos: (state, getter) => {
    return state.todos.filter(todo => todo.done)
  }
}

store.getters.doneTodos

computed: {
// 使用对象展开运算符将 getter 混入 computed 对象中
  ...mapGetters([
    'doneTodosCount',
    'anotherGetter',
    // ...
  ])
}

```

### mapMutations 
辅助函数将组件中的 methods 映射为 store.commit
```js
methods: {
  ...mapMutations([
    'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

    // `mapMutations` 也支持载荷：
    'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
  ]),
  ...mapMutations({
    add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
  })
}
```

### mapActions 
```js
methods: {
  ...mapActions([
    'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

    // `mapActions` 也支持载荷：
    'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
  ]),
  ...mapActions({
    add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
  })
}
```


### module


