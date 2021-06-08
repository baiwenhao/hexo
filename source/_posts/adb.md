---
title: ADB
date: 2021-06-07 17:36:02
tags:
---

## mac 设置
```
IP: 192.168.1.5
子网掩码: 255.255.255.0
路由器: 192.168.1.4
```

## 基本命令
```js
adbkill-server 重启
adb start-server
adb kill-server
adb version
adb root
adb install
adb shell am start
adb devices
adb -s 10.129.164.6:5555 install test.apk
adb tcpip 5555 // 无线连接的端口
adb connect 192.168.1.4:5555 // 通过ip地址链接设备（关于手机，状态信息）
adb -s 192.168.1.4:5555 shell wm size // 获取屏幕分辨率
adb devices 确认链接状态（<device-ip-address>:5555 device）链接成功
adb kill-server 在重来
adb disconnect <device-ip-address> // 断开无线链接

adb shell pm list packages // 所有应用
adb shell pm list packages -s // 系统
adb shell pm list packages -3 // 第三方

adb uninstall packagename // 卸载
adb shell pm clear packagename // 清空缓存
adb shell dumpsys packagename // 查看详情
https://www.jianshu.com/p/2e98a5c0ec1e

adb remount
adb install -t /Users/wenhao/workSpace/ezia-fueling-fe-fueling/app/build/outputs/apk/debug/app-debug.apk
安装失败

冷启动
adb shell am start -S -W com.maezia.fawmqb.carwash/com.ezia.fawmqb.carwash.main.MainActivity

清除缓存
adb logcat -c

保存日志
adb logcat -v time >D:\log.txt
```
