# NVM

注意:
nvm默认使用default版本的node, 这里的default只是一个别名. 当node发布新版本后, 当前安装的node版本不再是最新的, default别名指向的最新版未安装, 导致全局环境下无法使用node, 必须手动设置`nvm use <version>` 设置node版本后, 才可在当前文件夹下使用.此时应该手动设置nvm别名`nvm alias default <version>`, 使得default别名指向本地已安装的node版本, 这样下一次打开终端, nvm会默认加载default版本, 即可在全局环境使用默认版本了.
