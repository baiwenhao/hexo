---
title: egg
abbrlink: 4837d942
date: 2022-12-08 18:07:29
tags:
---

## EGG
```js
// 开启
config.security = {
    csrf: {
        enable: true,
        headerName: 'x-csrf-token',
        cookieName: 'csrf-token',
        cookieOptions: {
            sameSite: 'Strict',
        },
    },
    domainWhiteList: [ '.abc.com' ],
};
config.onerror = {
  html(err, ctx) {
    ctx.status = 500;
    ctx.body = `<h1>Rainbow CMS Error: ${ctx.status}</h1>
      <hr /><p>Message: ${escape(err.message)}</p>`;
  },
};
```

## 缺少SameSite的Cookie
SameSite=None：无论是否跨站都会发送 Cookie
SameSite=Lax：允许部分第三方请求携带 Cookie
SameSite=Strict：仅允许同站请求携带 Cookie，即当前网页 URL 与请求目标 URL 完全一致
