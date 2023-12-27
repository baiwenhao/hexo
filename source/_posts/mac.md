---
title: mac
abbrlink: 2f5ead85
date: 2017-02-07 11:19:11
---

##### 权限开启
sudo chown -R $USER /usr/local/Cellar/  

##### 添加全局变量
```
sudo nano ~/.bash_profile;
```

##### chrome插件
一键禁用所有扩展-加强版
Octotree git插件
command + shift + n 隐身模式

##### host文件位置
/private/etc/ 

##### 权限
chmod 777 catalina.sh
sudo chown 'baiwenhao' /usr/local’;

##### 重置蓝牙
Command+Option+P+R键

##### 刷新finder
killall Finder

##### 显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder

##### 不显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder

#### skecth
没有出现任何来源时 在终端输入
sudo spctl --master-disable

#### brew update
报错 Warning: git 2.15.1_1 is already installed
安装 xcode-select --install
等待 brew update

## Terminal command (sublime and vscode)
```
vi ~/.bash_profile
alias subl=\''/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl'\'

command + shift + p
install code ...
```

## font location
```
/Users/wenhao/Library/Fonts
~/Library/Fonts
```

## zsh
安装zsh，切换zsh，安装必要字体(https://github.com/powerline/fonts)，安装onmyzsh，

```

cat /etc/shells // 查看终端shell
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" // install on my zsh
subl ~/.zshrc
source ~/.zshrc
ZSH_THEME="agnoster"

prompt_context() {
  emojis=("🔥" "😎" "🦄" "🌈" "🍻" "🎉" "🔑" "🌙")
  RAND_EMOJI_N=$(( $RANDOM % ${#emojis[@]} + 1))
  prompt_segment black default "${emojis[$RAND_EMOJI_N]} "
}

prompt_dir() {
  prompt_segment blue $CURRENT_FG '%1~'
}

chsh -s /bin/bash // 还原 bash
```

detail
https://zhuanlan.zhihu.com/p/66226220

color presets 导入进去
https://github.com/mbadolato/iTerm2-Color-Schemes

font ttf 安装
https://github.com/ryanoasis/nerd-fonts#option-4-homebrew-fonts

语法高亮插件
https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md

## 架构图软件
Axure Graffle
Sketch Keynote

## mongodb install
```js
// 下载安装
cd /usr/local
curl -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.9.tgz
tar -zxvf mongodb-osx-ssl-x86_64-4.0.9.tgz
mv mongodb-osx-x86_64-4.0.9/ mongodb

// 配置变量
vim ~/.bash_profile
export PATH=/usr/local/mongodb/bin:$PATH
// export PATH=${PATH}:/usr/local/MongoDB/bin
source .bash_profile
mongod -version
```

待查看
https://zhuanlan.zhihu.com/p/34497527


## openJDK mac的位置，需要填到 project structure
/usr/local/Cellar/openjdk@8/1.8.0+282/libexec/openjdk.jdk


# zshrc
```
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# subl
alias subl=\''/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl'\'
```

## Charles MacOs Proxy
Charles cannot configure your proxy settings while it is on a read-only volume.
Perhaps you are running Charles from the disk image?
If so, please copy Charles to the Applications folder and run it again.
Otherwise please ensure that Charles is running on a volume that is read-write and try again.

solution: charles resource folder 的权限
```
sudo chown -R root "/Applications/Charles.app/Contents/Resources"
sudo chmod -R u+s "/Applications/Charles.app/Contents/Resources"
```

## Activate Charles
<a href="https://www.java.com/en/download/">安装java8</a>, 运行kenjar.jar, 生成key, 填入Help注册, 随后提示注册成功

### Packet capture
https://juejin.cn/post/7065119125466513416