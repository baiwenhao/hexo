---
title: egg
abbrlink: 4837d942
date: 2022-12-08 18:07:29
tags:
---

### create project
```js
npm init egg --type=ts
  simple - Simple egg app boilerplate
  microservice - Microservice app boilerplate based on egg
  sequelize - egg app with sequelize
  ts - Simple egg && typescript app boilerplate
  empty - Empty egg app boilerplate
  plugin - egg plugin boilerplate
  framework - egg framework boilerplat
```

### package
<a href="https://www.eggjs.org/zh-CN/core/deployment">deployment</a>
ignore-stderr 忽略启动期的报错

```json
{
  "script": {
    "start": "eggctl start --port=7001 --daemon --title=egg-server-ude-server ./dist/server",
    "stop": "eggctl stop --title=egg-server-ude-server"
  },
  "dependencies": {
    "cross-env": "^5.2.0",
    "egg": "^2.6.1",
    "egg-cors": "^2.2.3",
    "egg-redis": "^2.4.0",
    "egg-scripts": "^2.6.0",
    "egg-session-redis": "^2.1.0",
  },
  "devDependencies": {
    "egg-bin": "5.0.0",
    "egg-ci": "^1.8.0",
    "egg-mock": "^3.16.0",
    "egg-ts-helper": "^1.25.5",
    "egg-view-nunjucks": "^2.2.0",
    "tslib": "^1.9.0",
    "tslint": "^5.0.0",
    "tslint-config-egg": "^1.0.0",
    "typescript": "^4.8.4"
  }
}
egg-alinode
egg-cluster
```

### log
```js
// controller
this.logger.debug('current user: %j', this.user)

// service
this.ctx.logger.debug('debug info from service')

// app/init.js
app.logger.debug('app init')
```

### app/extend
```js
module.exports = {
  set token (value: string) {
    this.set('Content-Security-Policy', value);
  },
  set policy (value: string) {
    this.set('Referral-Policy', value);
  },
  set hsts (value: string) {
    this.set('Strict-Transport-Security', value);
  },
};
ctx.response['hsts'] = 'max-age=31536000; includeSubdomains; preload';
ctx.response['policy'] = 'no-referrer-when-downgrade';
ctx.response['token'] = "default-src obs.maezia.com 'unsafe-inline' data:; font-src data:; connect-src 'self';"
config.ignoreDirs = [ 'extend' ];
```

### csrf
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

// SameSite
SameSite=None：无论是否跨站都会发送 Cookie
SameSite=Lax：允许部分第三方请求携带 Cookie
SameSite=Strict：仅允许同站请求携带 Cookie，即当前网页 URL 与请求目标 URL 完全一致
  https 成功 http 不行

// Secure
Cookie 只有在 HTTPS 协议下才会发送给服务
true, false

// HttpOnly
Cookie 将无法被 JavaScript 访问，从而避免 XSS 攻击

### Load template
```js
{{ helper.loadCss('main') | safe }}
{{ helper.loadJs('main') | safe }}
```

### Config
<a href="https://www.eggjs.org/zh-CN/basics/structure" __blank="target">目录文档</a>

```
1. function name not use config
2. {% not add space
3.
```

egg-project
├── package.json
├── app.js（可选）
├── agent.js（可选）
├── app
|   ├── router.js
│   ├── controller
│   │   └── home.js
│   ├── service（可选）
│   │   └── user.js
│   ├── middleware（可选）
│   │   └── response_time.js
│   ├── schedule（可选）
│   │   └── my_task.js
│   ├── public（可选）
│   │   └── reset.css
│   ├── view（可选）
│   │   └── home.tpl
│   └── extend（可选）
│       ├── helper.js（可选）
│       ├── request.js（可选）
│       ├── response.js（可选）
│       ├── context.js（可选）
│       ├── application.js（可选）
│       └── agent.js（可选）
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js（可选）
|   ├── config.local.js（可选）
|   └── config.unittest.js（可选）
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
