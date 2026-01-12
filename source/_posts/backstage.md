---
title: Backstage
abbrlink: d61f529f
date: 2025-09-20 11:28:45
tags: fe
---

## environment and script
```js
// 简单项目
npx @backstage/create-app@latest --skip-install simple-backstage
npx backstage-cli --version

// 试运行
node -e "require('isolated-vm')"

// 启动
"start:frontend": "yarn workspace app start",
"start:backend": "yarn workspace backend start",

// 查看转发规则
curl -v http://localhost:3000/api/catalog/entities
curl -v http://localhost:7007/api/catalog/entities 
```

## FE 
```js
// ui
@backstage/core-components 
@mui/material

// 创建实例
import { createApp } from '@backstage/app-defaults' 
{
	apis: [],
	components: {},
	plugins: [],
	config: {},
	bindRoutes,
	theme: []
}
// 实例调用
app.createRoot() 

// style
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
  root: {
    padding: '16px',
  },
  button: {
    marginTop: '16px',
  },
})

const classes = useStyles()
className={classes.button} // 组件里面使用 

// backstage UI
import {
  // 页面布局组件
  Page, Header, Content, TabbedLayout,
  
  // 卡片组件
  InfoCard, Table, Status, StatusOK, StatusError,
  
  // 导航
  Sidebar, SubmenuItem,
  
  // 数据展示
  DependencyGraph, MarkdownContent,
  
  // 表单
  Select, CodeSnippet, ErrorPanel,
  
  // 反馈
  Progress, ResponseErrorPanel,
} from '@backstage/core-components';

// MUI
import {
  // 基础组件
  Button, TextField, Card, CardContent,
  
  // 布局
  Grid, Container, Box, Paper,
  
  // 导航
  Tabs, Tab, Drawer,
  
  // 反馈
  Dialog, Snackbar, Alert,
  
  // 数据展示
  Table, TableBody, TableCell, TableContainer,
} from '@mui/material';

```

## create fe plugin
```ts
// 选择 fe-plugin, 输入名称 dashboard
yarn new or yarn backstage-cli new

// App.tsx 
/*
	全局组件 AlertDisplay
	根布局 Root 组件
	路由配置 FlatRoutes
	插件集成 导入和配置各种插件页面
	认证和状态管理 通过上下文提供认证状态
*/
import { DashboardPage } from '@internal/backstage-plugin-dashboard'; 
<Route path="/dashboard" element={<DashboardPage />} />

// Root.tsx
/*
	定义整体布局 SidebarPage + Sidebar
	导航菜单管理 SidebarItem + SidebarGroup
	插件集成入口 添加插件导航项
	用户身份管理 UserSettingsSignInAvatar
	搜索功能集成 SidebarSearchModal
	主题样式控制 自定义样式类
*/
<SidebarItem icon={HomeIcon} to="/dashboard" text="dashboard" />

// 可以进入插件单独启动
yarn start

// 配置软件模板来创建页面
```

## template
请求 yaml 文件由 backend plugin @backstage/plugin-catalog-backend 来处理
```js
// metadata 原数据
// spec 规格
// @backstage/plugin-scaffolder 负责解析 template 实体

```

## Define the API
```ts
// 1. 定义数据类型
export interface ExampleItem {
  id: string;
  title: string;
  description?: string;
  owner: string;
  createdAt: string;
}

// 2. 定义API接口
import { createApiRef } from '@backstage/core-plugin-api';

export interface ExampleApi {
  getItems(options?: { limit?: number; offset?: number }): Promise<ExampleItem[]>; // 查询列表
  getItemById(id: string): Promise<ExampleItem>; // 查询详情
}

// 3. 创建全局可引用的 API Ref（就像一个唯一钥匙）
export const exampleApiRef = createApiRef<ExampleApi>({
  id: 'plugin.example.service', // 唯一标识符
});

```

## icon
```js
import CategoryIcon from '@material-ui/icons/Category';
import {
  CatalogIcon
} from '@backstage/core-components';
```

## error record
```java
// 数据路连接问题
Failed to connect to the database to make sure that 'backstage_plugin_app' exists, AggregateError

// portal 需要添加权限 
Authentication failed, AADSTS65005: The application '255a48c3-eb8b-4484-afec-4782995f123f' asked for scope 'user_impersonation' that doesn't exist. Trace ID: 495ffcad-eade-4240-8288-b82e68e14800 Correlation ID: 88caba0c-3915-4257-9db5-ab50d49570d6 Timestamp: 2025-10-14 06:02:31Z

// 用户没有登录权限
Authentication failed, AADSTS65005: The application '255a48c3-eb8b-4484-afec-4782995f123f' asked for scope 'Mxp.Users' that doesn't exist. Trace ID: 645796d4-ac28-400e-b750-6a6240974200 Correlation ID: fe600c8f-5f0c-4514-934d-8df2ad322beb Timestamp: 2025-10-14 06:01:34Z
```

## Net work
```js
// 查找占用端口的进程
lsof -i :3000

// 杀死占用进程
kill -9 $(lsof -t -i:3000)

// 或者换个端口启动
PORT=3001 yarn start
```

## How to write react components?
```tsx
// 1. 紧凑写法
export default function test({ 
  createdAt,
  onSelect,
}: { 
  createdAt: string;
  onSelect: () => void;
}) { 
  return (
    <button onClick={onSelect}>Created At: {createdAt}</button>
  );
}

// 2. 可复用
interface testProps { 
  createdAt: string;
  disabled?: boolean;
}
export default function test({ createdAt, disabled }: testProps) { // 为了函数内部方便引用
  return <button disabled={disabled}>Created At: {createdAt}</button>;
}

type testProps = {
  createdAt: string;  
};
export default function test({ createdAt }: testProps) {
  return (
      <span>Created: {createdAt}</span>
  );
}

// 3. 适合复杂场景
export default function test(props: { createdAt: string }) { 
  const { createdAt } = props;  
  return <span>Created At: {createdAt}</span>;
}


// 4. 泛型约束
export default function test<T extends { createdAt: string }>({ createdAt }: T) {
  return <span>Created At: {new Date(createdAt).toLocaleDateString('en-GB')}</span>;
}
interface Props {
  createdAt: string;
}
const test: React.FC<Props> = ({ createdAt }) => {
  return (
    <span className="mega-workspace-list-item-date">
      Created At: {new Date(createdAt).toLocaleDateString('en-GB')}
    </span>
  );
};

export default test; // import test from './test'; 
// export const test ... 
// import { test } from './test'
// <item createdAt={item.createdAt || ''} />
```

## 数据渲染
```tsx
{list?.length > 0 ? (
  <ul>
    {list.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
) : (
  <p>no data</p>
)}
// 等价的写法
{list?.length > 0 && (
  <div>显示列表内容</div>
)}

{!list?.length && (
  <div>显示空状态</div>
)}

// if else 写法
if (list?.length > 0) {
  return <div>有数据</div>;
}
return <div>无数据</div>;

// 使用变量
const hasItems = list?.length > 0;
return (
  <div>
    {hasItems ? (
      <List items={list} />
    ) : (
      <EmptyState />
    )}
  </div>
);
```

## Common components
```tsx

```
