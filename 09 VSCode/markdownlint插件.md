# markdownlint

> 供 vscode 使用的 markdown 代码校验与风格检查插件。

## 前言

markdown 这种标记语法被设计得易读、易写且易于理解。它很成功，但它的灵活性既是优
点又是缺点。由于风格的多样化，导致格式化几乎变为不可能。有一些语法因为无法在语法
分析器中完美展现只能被废弃。比如，这里列举了一些常见的令人讨厌的 markdown 语法。

markdownlint 是一款提供了一个 markdown 语法规则库的 vscode 插件，这些语法规则鼓
励使用标准、一致性的 markdown 语法。插件由 markdown for Node.js 提供支持，后者基
于 markdown for Ruby。

## 安装

1. 打开 VScode
2. 按下 Ctrl+P 打开快捷输入面板
3. 输入 ext install markdownlint 查找这款插件
4. 点击 install 按钮安装插件，安装好后再点击 Enable 按钮启用插件

或者

1. 按下 Ctrl+Shift+X 打开活动栏插件选项
2. 输入 markdownlint 查找到这款插件
3. 点击 install 按钮安装插件，安装好后再点击 Enable 按钮启用插件

或者

1. 打开命令行工具
2. 输入 code --install-extension DavidAnson.vscode-markdownlint

## 使用

安装好 markdownlint 后，在编辑器编辑 markdown 文档时，任何一行违反了
markdownlint 的规则都会在编辑器显示警告。警告会用绿色波浪下划线指出，并且按下
Ctrl+Shift+m 可以打开错误和警告面板。鼠标移到下划线上或者按下 F8 或 Shift+F8 能
在所有报错处来回切换（markdownlint 的报错均以 MD+数字开头），将光标移至报错部位
，点击电灯图标或者按下 Ctrl+.能查看关于警告的更多信息。点击其中一条警告信息将会
在默认浏览器中打开该规则的帮助页面。

> 详细教程请
> 见[Build an Amazing Markdown Editor Using Visual Studio Code and Pandoc](https://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/)。

## 规则

- MD001 heading-increment/标题递增-标题层级一次只能增加一级
- MD002 first-heading-h1/顶级标题需要是一级标题
- MD003 heading-style/
- ...
- MD047/single-trailing-newline/文件末尾需要有一行空白行阿萨

[点击查看规则的更多细节](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md)

下面这些规则可以被自动修复。

- ...

上述所有违规可以在命令行面板通过运行命令 markdownlint.fixAll 一次性全部修复，命
令面板可通过编辑器的查看|命令面板选项打开，或者 Ctrl+Shift+P 快捷键打开，然后搜
索 markdownlint。

在保存文档时自动修复违规，可通过更改 vscode 设置的 editor.codeActionsOnSave 字段
：

```json
"editor.codeActionsOnSave": {
    "source.fixAll.markdownlint": true
}
```

自动修复可通过编辑器菜单编辑|撤销选项或者 Ctrl+Z 撤销。

## 配置

markdownlint.config

默认配置禁用了规则 MD013/line-length，因为多数文件都包含超过 80 个字符的长行。

```json
{
  "MD013": false
}
```

> MD002/first-heading-h1 默认也被禁用，因为该规则在 markdownlint 里已被废弃。

规则可以被启用、禁用、也可通过在项目目录创建一个名为.markdownlint.json 的 json
文件或者一个名为.markdownlint.yaml（或者.markdownlint.yml）的 yaml 文件进行定制
。文件创建的规则将会被作用于同级目录（或者没有自己单独 markdownlint 配置的子级目
录）的 markdown 文件。

> 只有项目打开时配置文件才会生效

