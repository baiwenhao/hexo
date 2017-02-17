---
title: git
categories: javascript
abbrlink: 69c3279c
date: 2017-02-07 11:18:58
---

### 基本命令
```
git --version
git config --list显示当前配置信息
git config --global user.name bwh 增加 修改
git config --global user.email wehhao.bai@autonavi.com
git config --get user.name || git config user.name  查询
git config --list --global 列出所有的name
git config --list --global --unset user.name 删除
git config --global alias.st status 设置快捷键st
```

### 暂存区
```
git init 初始化一个目录
git add a 添加到暂存区
git reset HEAD a 历史记录里面已经没有a了
git checkout a 还原一个文件
git checkout -- fliename 恢复删除的文件
git rm --cached a 删除暂存区里的a
git commit -m "Initial commit" 暂存区的文件提交到历史记录
git commit -m "modify a" 把修改的a提交到历史记录
git rm a 同时删除暂存区和历史记录的a
git rm img -r -f 删除img文件夹及文件
git rm img -f 删除一个文件
git mv a c 把a重名名为c
创建.gitignore文件
*.[oa] .o或者.a结尾的文件不会给监控
**/res 所有目录下面的res都匹配到
```

### 分支
```
git branch test 创建一个分支
git branch -a 查看远程分支
git checkout -b test_merge 创建并切换到分支
git checkout dev 切换分支
git merge test 合并分支
git merge --abort 放弃合并
git branch -d name 删除本地分支
```

### 查看对比历史记录
```
git show HEAD 查看
git show master^2
git show --stat master^2
git show --oneline madter^2 
git show --oneline --stat master^2
git log --oneline --decorte --graph --all 查看历史示意图
git config --global alias.lol "log --oneline --decorate --graph --graph --all" 快捷键设置 lol
git diff  工作区和暂存区的区别
git diff --cached 暂存区和历史记录的区别
git diff HEAD HEAD~2 --master.txt 差异比较
git diff --color-words 差异的单词
git diff --word-diff
```

### 撤销修改
```
git reset --hard HEAD 撤销全部
git checkout -- .a.txt 撤销上一步工作区修改
git checkout HEAD -- a.txt 还原工作区和暂存区
git reset a.txt 撤销暂存区修改
git clean -n 将要移除的文件
git clean -f 移除
git clean -n -X 将要移除的.gitignore里的文件
git clean -n -f 移除
git revert HEAD撤销最近一次提交
git revert HEAD^撤销上上次提交
```

### 重写历史记录
```
git commit --amend
git rebase 
git reset
git reflog
```

### 远程操作
```
git clone  复制
git fetch origin master获取到本地
git fetch 获取远程分支到本地
git push 上传历史记录
git push origin dev
git pull origin dev
```

### 钥匙
```
ls ~/.ssh 查看秘钥 id_rsa id_rsa.put
ssh-keygen 生成秘钥
cat ~/.ssh/id_rsa.pub
```

### 拉取子模块一直要输入密码
```
进入工程里git submodule init 查看子模块，进SourceTree右键点击子模块，
更改源URL,加上自己的用户名 baiwnehao.sh@，然后 键入git submodule update
.gitmodules不要提交就可以
```

### 恢复备份数据
```
git stash 备份当前工作区内容,从最近一次提交中读取内容,让工作区保证和上次提交内容一致
git stash list 显示git栈内所有备份
git stash pop 读取最近保存的内容
git stash clear 清空git栈
```

### 本地仓库关联远程仓库
    git remote add origin git@github.com:baiwenhao/baiwenhao.github.com.git

### 这是全局忽略设置
```
$ git check-ignore -v index.html
/Users/baiwenhao/.gitignore_global:11:index.html  index.html
```

### 错误
```
error: The requested URL returned error: 403 Forbidden while accessing
nano .git/comfig  #然后添加url前面添加账户名称
url = https://baiwenhao@github.com/baiwenhao/vue_note.git
```
