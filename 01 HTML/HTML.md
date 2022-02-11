## 样式表的引入

三种引入样式表方法:

1.  外部样式表

    `<link>`标签引入:`<link rel="stylesheet" type="text/css" href="mystyle.css">`

2.  内联样式表

    在`head`内部通过`<style>`标签定义样式表

3.  内联样式

    在相关标签中使用`<style>`样式属性

## HTML 链接

`<a>`标签内可以是文字或图像

- `href`属性

  指向另一文档

- `name`属性

  指向本文档内的书签,定义锚(anchor)的名称,锚本身不会显示,常用于创建目录.

- `target`属性

  定义链接在何处打开,`target="_blank"`在新窗口打开.

锚的使用:

1.  对锚命名,创建书签

    命名锚的语法:

    `<a name="label">锚（显示在页面上的文本）</a>`

2.  同一文档中创建指向这个书签的链接

    `<a href="#label">返回书签处</a>`

3.  也可在其他页面创建指向该书签的链接

    `<a href="http://www.(书签所在文档地址)#label">返回书签处</a>`

## HTML 头部

- `<base>`标签为页面所有链接规定默认地址或默认目标`target`

  `<base href="url" /><base target="_blank" />`

- `<link>`元素定义文档与外部文档的关系

  常用`href`属性连接样式表

- `<meta>`标签没有结束标签,用于提供文档的元数据(metadata)

  1.  定义页面的描述 `<meta name="description" content="描述内容" />`

  2.  定义页面关键词 `<meta name="keywords" content="HTML, CSS, XML" />`

  3.  `charset`属性声明文档使用的字符编码,必须写在第一行,两种写法等价. `<meta charset="utf-8">`
      `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">`

  4.  禁止百度对网页自动转码 `<meta http-equiv="Cache-Control" content="no-siteapp" />`

  5.  `viewport`移动端页面布局 `<meta name="viewport" content="width=device-width, initial-scale=1.0">` `content`参数: `width` viewport 宽度
      (数值/device-width) `height` viewport 高度(数值/device-height) `initial-scale` 初始缩放比例 `maximum-scale` 最大缩放比例
      `minimum-scale` 最小缩放比例 `user-scalable` 是否允许用户缩放(yes/no)

  6.  优先使用最新 IE 版本 `<meta http-equiv="x-ua-compatible" content="ie=edge">` 更多`<meta>`标签用法
      在[这里](http://www.cnblogs.com/sunny-Fung/p/8665540.html)

## HTML 实体

为了显示预留字符,需使用字符实体`&entity_name`或`&#entity_number`实体名称对大小写敏感,浏览器对实体数字的支持更好. 常用字符实体如下,
在[这里](http://www.w3school.com.cn/tags/html_ref_entities.html)查看更多.

| 显示结果 | 实体名称 | 实体数字 |
| :------- | :------- | :------- |
| &lt;     | `&lt;`   | `&#60;`  |
| >        | `&gt;`   | `&#62;`  |
| &        | `&amp;`  | `&#38;`  |
| '        | `&apos;` | `&#39;`  |
| "        | `&quot;` | `&#34;`  |
| (空格)   | `&nbsp;` | `&#160;` |

## HTML URL

统一资源定位符,也就是网址,也可是 IP 地址,遵守以下语法规则:

`scheme://host.domain:port/path/filename`

- scheme 定义因特网服务的类型,http,https,ftp,file.
- host 定义域主机,http 的默认主机是 www.
- domain 定义因特网域名,如 w3school.com.cn.
- :port 定义主机上的端口号,http 默认端口号是 80.
- path 定义服务器上的路径,如果省略,则文档必须位于网站的根目录.
- filename 定义文档/资源的名称.

## HTML 表单

`<form>`标签定义表单,用于收集用户输入.

`<label>`标签的 for 属性中填入`<input>`标签的 id 值，即可与`<input>`绑定，点击`<label>`时，`<input>`也获得了焦点。

`<input>`元素是最重要的表单元素,根据不同 type 属性有很多形态：

    `<input type="text">`常规文本输入，
    `<input type="password">`密码输入，
    `input type="radio">`单选按钮，
    `<input type="submit">`提交按钮，

其中，必须设置一个 name 属性才能被提交，value 属性设置默认文本。

`<select>`下拉列表， `<option>`待选择的选项，

selected 属性定义预定义选项 `<option value="fiat" selected>Fiat</option>`
