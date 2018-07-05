---
title: npm and yarn
abbrlink: 99791dcb
date: 2017-02-07 11:19:11
---

## npm
全局包的安装目录
/usr/local/lib/node_modules   不在此目录

dependencies生产环境依赖包
devDependencies开发环境依赖包
两者的区别是devDependencies是模块开发过程的依赖包（如：grunt只在开发时有用的模块），并且当其他模块需要依赖当前模块时，当通过npm install <package-name>时会自动下载安装dependencies的包而不会下载devDependencies的包

查看包的package.json
npm view ejs

查看所有node包
npm list

帮助信息
npm help

查看包依赖关系
npm view ejs dependencies

查看包的源文件地址
npm view ejs repository.url

查看包依赖的Node版本号
npm view ejs engine

用于更改包内容后进行重建
npm rebuild ejs

检查要更新的过时包
npm outdated

更新
npm update ejs
npm update -g ejs

卸载
npm uninstall ejs
npm uninstall -g pjs

包安装路径
npm root

全局包安装路径
npm root -g

查看配置信息
npm config ls    |    npm config ls -l

修改配置信息
.npmrc文件
npm config set 
npm config set registry http://registry.npm.taobao.org/
npm config set proxy http://proxy.com:8081/

发布包
```
站在使用者的角度，掌握上述章节的内容已经足够了，但当我们开发出好玩的项目而且又想和大家分享时，那么下面的内容就不得不了解了！
  1. 注册一个registry帐号， npm adduser ，然后根据引导输入帐号、密码和邮箱地址。
  2. 登录registry帐号， npm login ，登录信息会保存在客户端。
  3. 发布项目， npm publish 。（建议发布版本从1.0.0开始）

经过上述步骤我们就可发布模块了。但这个时候你也许会考虑到项目中部分目录和文件不应该被发布出去，应该有一个像.gitignore的文件来配置这些排除项。看来你猜对了，那就是.npmignore文件，不过npm做得更灵活一些！
  
  1. 默认不带.npmignore文件，若项目中带.gitignore则使用.gitignore文件内容的配置项
  2. 若带.npmignore文件则不使用.gitignore文件中的配置项
  3. 即使配置.npmignore文件，也无法排除package.json和README.*文件
```

路径
  /usr/local/n/versions/node/5.5.0



## yarn
yran add -D
yran add -S
yarn bin
yarn ls
yarn remove



