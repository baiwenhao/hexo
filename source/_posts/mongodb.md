---
title: mongodb
abbrlink: '20475214'
date: 2017-02-07 11:19:33
---

## config.conf
logpath = /Users/baiwenhao/soft/log/mongod.log   #日志文件
dbpath = /Users/baiwenhao/soft/data   #数据文件
port = 27017   #链接端口
bind_ip = 127.0.0.1   #链接地址
maxConns = 100   #最大连接数
logappend = true   #写日志方式默认追加
fork = true   #后台启动
auth = false   #是否启动验证 window 下无效


## 查看端口
ps -e | grep mongod

## directory
/usr/local/Cellar #brew 安装的目录
ubantu /var/lib/mongodb

## start
sudo mongod --config mongodb.conf
/Users/baiwenhao/soft 存放目录
/usr/local/Cellar/ 安装目录

以修复方式启动 mongodb
mongod -f mongod.conf --repair

然后接着在启动一次
mongod -f mongod.conf --auth

## 查看进程是否运行
ps aux|grep mongo

## 关闭后台服务
use admin
db.shutdownServer()
db.shutdownServer({force : true})

## 创建用户
use test // 切换数据库
db.createUser({user:"admin",pwd:"admin",roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]})
db.createUser({user:"wenhao",pwd:"bwh2009",roles:[ "readWrite","dbAdmin"]})
db.createUser({ user: 'wenhao', pwd: 'bwh2009', roles: [{ role: 'readWrite', db: 'mock' }] }) // 创建用户，读取权限（root）
db.auth('root', '123') // 验证用户
db.dropUser('root') // 删除用户
db.removeUser("userName") // 删除用户
show users // 查看用户
show databases // 查询数据库
db.createUser({'user':'wenhao','pwd':'bwh2009','roles':[{role:'dbOwner',db:'mock'}]})

## 远程链接
mongo 134.567.345.23:27017/mock -u wenhao

## 命令
```js
use wenhao 创建库wenhao
db.user  数据集合
db.user.find() 查询全部数据，参数{age:32查询结果
show collections 当前表
show dbs 查看库
db.getName() 查看当前使用的数据库
db.version() 版本
db.addUser('root','root') 创建用户
db.user.insert({x:1}) 插入一条数据
db.user.save({name:'baiwenhao','age':32})  保存数据
db.user.save({_id:ObjectId("56ff85bff6927e15cd2c4f7f"),name:"haoke","age":40}) 更新一条数据
db.user.update({_id:ObjectId("56ff85bff6927e15cd2c4f7f")},{age:200}) 更新一个属性,此条数据其他属性也没了
db.user.update({_id:ObjectId("56ff85bff6927e15cd2c4f7f")},{$set:{name:'haoke'}})
db.user.find({ $or: [{id: '1'}] }).toArray()
db.nav.find().count() 查看多少条数据
db.user.remove({ name: 'boss' }) 删除一条数据
db.user.drop() 清除一个表
db.dropDatabase() 清除一个库
db.shutdownServer() 关闭数据库
db.resetError() 清除错误记录
```

## 索引

数据量很大时，查询使用索引可大幅度提高效率
1.db.imooc_collection.getIndexes() #查看集合的索引情况，初始情况下有_id一个索引
2.db.imooc_collection.ensureIndex({x:1}) #创建x字段索引，+1为升序，-1为降序，这里的1不再代表值
3.如果数据量非常大，创建索引需要消耗一定的时间，这时需要在使用数据库之前就将索引创建完毕，否则会对数据库性能造成较大影响

拷贝fe数据到本地
mkdir ~/fete_data_backup
mongodump -h 192.168.1.46 -d fete -o ~/fete_data_backup
mongorestore -h localhost -d fete ~/fete_data_backup/fete
rm -rf ~/fete_data_backup

## 客户端
https://robomongo.org/download

## sql
查询多个id
const items = await ctx.mongo.db(conf.mongodb.db).collection(item).find({ $or: [{id: 1}] }).toArray()

db.createUser({user:'admin',pwd:'password',roles:[{role:'root',db:'admin'}]})


/root/document/mongodb/data
/root/document/mongodb/log/mongod.log
