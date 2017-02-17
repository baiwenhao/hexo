---
title: history
abbrlink: e80749d7
date: 2017-02-17 15:57:07
tags:
---

##### 历史记录
```
window.history.pushState({
  name: 'xieyi'
}, "", "#xieyi")

window.addEventListener('popstate', function(e) {
  if (history.state && history.state.name == 'xieyi') {
  } else {
  }
}, false)
```
