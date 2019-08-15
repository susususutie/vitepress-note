## 引入

> `<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>`


## 选择器

```
$("#id")
$(".class")
$("element")
$("selector1, selector2, selectorN")
```


## 过滤器

`find("selector")`在元素集合中查找符合条件的元素，
`filter("selector")`在元素的子元素中查找符合条件的元素，
`siblings("selector")`在兄弟元素中查找，
`closest("selector")`符合条件的最近父元素，
`parent("selector")`在紧邻父元素中查找，
`parents("selector")`在所有的父级元素中查找,


## 表单

`val()`获取、设置input的值，
`focus()`input聚焦，可用于监听事件，
`blur`失去焦点，
`submit()`表单提交，


## 数组

`each(fun(index, ele))`遍历数组，对每个元素调用函数，
`map(arr, fun)`操作数组的每个元素，返回新数组，
`grep(arr, fun)`过滤，对数组每项调用函数，返回值为true的才会被保留，


## 操作DOM

`text()` 获取、设置文本内容，
`html()` 获取、设置HTML内容（包括标签），
`val()` 获取、设置input的value，

`attr("")`获取，设置属性，

`prepend()`在元素内部的开头插入新内容,
`apped()`在元素内部往后追加新内容,

`remove()`删除元素本身，
`empty()`清空元素内部，

`hide()`隐藏元素，
`show()`显示元素，
`toggle()`切换显示状态，


## 操作属性

`attr()`获取、设置属性的值，
`removeAttr()`移除属性，

`data()`获取附加数据，
`data("", "")`设置附加数据，
`data-*=""`给任意标签添加自定义的附加数据，相当于自定义属性，


## 操作样式

`addClass("name")`添加class，
`removeClass("name")`删除class，
`toggleClass()`切换class，

同时添加多个样式（建议增删class来修改样式）
```
$("selector")
  .css({
    "name1": "value1",
    "name2": "value2",
    "nameN": "valueN",
  });
```

判断是否有某一类名（返回布尔值）
```
$("selector")
  .hasClass("name")
```


## 效果

`fadeOut(number)`淡出，
`fadeIn(number)`淡入，
`fedeToggle()`切换，

`slideUp(number)`向上收起，
`clideDown(number)`向下滑出，
`slideToggle()`切换，


## jQuery事件

`on("event", callback`给jQuery对象绑定事件，
`on("event", "event.target", callback`jQuery事件委托，

|鼠标事件|键盘事件|表单事件|文档/窗口事件|
|--|--|--|--|
|click|keypress|submit|load|
|dblclick|keydown|change|resize|
|mouseenter|keyup|focus|scroll|
|mouseleave||blur|unload|


## node本地服务器

首先安装node，

`npm -v`、`node -v`查看node和npm版本号，检查是否正确安装，

`npm install http-server -g`全局安装http-server模块,

在文件目录打开命令行输入`http-server`打开虚拟服务器，命令行生成两个地址，浏览器输入地址即可访问，按CTRL-C关闭服务器,


## AJAX

```
$.ajax({
  url: "..."
  type: "POST/GET",
  date: {
    ...
  },
  cache: true,
  dataType: 'jsonp',
  success: function(date) {
    ...
  },
  error: function(date) {
    ...
  },
})
```

常用的的快捷方法：

```
$.post("url", {
  ...
})
$.get("url")
$.getJSON("url")
$.getScript("url")
```

cache: 是否缓存，默认true

dataType: json / jsonp, 当为jsonp时跨域

callback=myFun

jsonp: 后端jsonp的回调函数名 callback

jsonpCallback: 回调函数名 myFun

