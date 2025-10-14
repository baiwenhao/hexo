---
title: Backstage
abbrlink: d61f529f
date: 2025-09-20 11:28:45
tags: fe
---

## Terminal
```js
npx @backstage/create-app@latest // create project
yarn new --select plugin // create plugin 
```

<a href="https://backstage.io/docs/" target="_blank">官方文档</a>
<a href="https://backstage.io/plugins/" target="_blank">插件市场</a>

## task
阅读官方文档：这是最全面的资源。https://backstage.io/docs/
探索现有插件：访问 Backstage 插件市场 看看社区已经构建了什么，并学习如何将它们集成到你的应用中
添加一个真实的后端：将默认的 SQLite 数据库转换为 PostgreSQL 以用于生产环境。
配置身份验证：集成 GitHub、Google 或 Okta 等身份提供商。
注册你自己的服务：为你团队的一个真实服务创建一个 catalog-info.yaml 文件，并将其导入到你的目录中。
尝试脚手架：修改一个现有的软件模板，或者创建一个新的，用于自动化你们团队的项目创建流程。

## error record
```js
// 数据路连接问题
Failed to connect to the database to make sure that 'backstage_plugin_app' exists, AggregateError
```