## 使用

1. 通过link引入bootstrap样式表（V3.3.7）

> `<link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">`

2. 直接给html元素添加bootstrap预设的类名，就可直接使用bootstrap预制样式。通过改类名也可快速更改样式。


## 栅格

栅格系统通过row（行）和column（列）的组合来构成页面

实例：
```
<div class="row">
    <div class="col-md-2">.col-md-2</div>
    <div class="col-md-7">.col-md-7</div>
    <div class="col-md-3">.col-md-3</div>
</div>
```

`.row`（行）可包含在`.container`（固定宽度）或`.container-fluid`（100% 宽度）中。

`.row`（行）中创建的多个`.col-md-n`（列），n的和为12。

根据需要显示的屏幕尺寸，有`.col-xs-n`、`.col-sm-n`、`.col-md-n`、`.col-lg-n`。


## 表单

实例：
```
<form>
    <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control">
    </div>
    <div class="form-group">
        <label>密码</label>
        <input type="password" class="form-control">
    </div>
    <div class="form-group">
        <label>充值金额</label>
        <div class="input-group">
            <span class="input-group-addon">￥</span>
            <input type="number" class="form-control">
        </div>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
</form>
```

表单控件和label元素包裹在`.form-group`中。

需给表单控件添加`.form-control`类。

用`.input-group`包裹input元素，构成输入控件组

`input-group-addon`给input添加按钮控件

`.input-sm/md/xs/lg`改变输入控件大小


## 按钮类

实例：
```
<button class="btn btn-default">Button</button>
```

为`<a>`、`<button>`或`<input>`元素添加btn（按钮类）即可使用 Bootstrap 提供的样式,建议尽可能使用`button`元素。

样式类：
- `.btn-default`（默认）
- `.btn-primary`（首选项）
- `.btn-success`
- `.btn-info`
- `.btn-warning`
- `.btn-danger`

尺寸类：
`.btn-lg/sm/xs`

`.btn-block`使按钮宽度为父元素100%宽度


## 其他常用样式

`.well`嵌入效果:
> `<div class="well">...</div>`

`.container`使内容固定宽度，居中显示

`.container-fluid`使内容按100%宽度显示

`.active`使按钮、链接处于激活状态
> `<button class="btn btn-primary active">按钮</button>`

`.disable`使按钮、连接处于禁用状态
> `<button class="btn btn-primary disable">按钮</button>`

`.text-muted`文本颜色状态之一，使文本变灰

`.clearfix`给父元素添加，清除子元素浮动

`.caret`显示一个向下的三角符号
> `<span class="caret"></span>`


## 表格

```
<table class="table">
    <tr>
        <td class="active">active</td>
        <td class="success">success</td>
        <td class="info">info</td>
        <td class="warning">warning</td>
        <td class="danger">danger</td>
    </tr>
</table>
```

`.table`基类

给`<table>`标签添加的样式类:
- `.table-stript`（条纹状表格）
- `.table-hover`
- `.table-border`

给单行 `<tr>` 或单元格 `<td>` 添加的状态类：
- `.active`
- `.success`
- `.info`
- `.warning`
- `.danger`


## 面板

实例：
```
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">Panel title</h3>
    </div>
    <div class="panel-body">
        ...
    </div>
    <div class="panel-footer">Panel footer</div>
</div>
```

`.panel`基类

结构：
- `.panel-tittle`面板标题，放在`.panel-heading`中
- `.panel-body`面板主题内容
- `.panel-footer`注脚

状态类：
- `.panel-default`（默认）
- `.panel-primary`（首选项）
- `.panel-success`
- `.panel-info`
- `.panel-warning`
- `.panel-danger`


## 警告框

实例：
```
<div class="alert alert-success">...</div>
```

`.alert`基类

修饰类（alert没有默认类）：
- `.alert-success`
- `.alert-info`
- `.alert-warning`
- `.alert-danger`


## 路径导航（面包屑）

实例：
```
<ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li>Data</li>
</ol>
```

`.breadcrumb`基类


## 分页

实例：
```
<ul class="pagination">
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
</ul>
```

`.pagination`基类

只有上一页和下一页的翻页:

实例：
```
<ul class="pager">
    <li><a href="#">上一页</a></li>
    <li><a href="#">下一页</a></li>
</ul>
```

`.pager`基类


## 标签

实例：
```
<span class="label label-default">New</span>
```

`lable`基类

样式类：
- `.label-default`
- `.label-primary`
- `.label-success`
- `.label-info`
- `.label-warning`
- `.label-danger`

## 徽章

实例：
```
<span class="badge">
```

`.badge`基类


### （全局）导航栏

实例：
```
<nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">LOGO</a>
        </div>
        <ul class="nav navbar-nav">
            <li><a href="#">主页</a></li>
            <li><a href="#">次主页</a></li>
            <li><a href="#">次主页</a></li>
            <li><a href="#">次主页</a></li>
        </ul>
        <form class="navbar-form navbar-left">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="请输入关键字">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
        </ul>
    </div>
</nav>
```

`.navbar`基类

导航栏可用`.container`包裹，使其居中显示

`.navbar-default`导航栏默认样式

`.navbar-fixed-top`使导航栏固定在页面顶部

`.navbar-fixed-bottom`使导航栏固定在页面底部

用`.navbar-header`包裹`.navbar-brand`，`.navbar-brand`用于显示LOGO

给导航栏中的ul导航添加`.nav`和`.navbar-nav`类

给导航栏中的form元素添加`.navbar-form`类，用`.navbar-left`和`.navbar-right`控制其左右浮动。


## （局部）导航

实例：
```
<ul class="nav nav-tabs">
    <li><a href="#">LINK0</a></li>
    <li><a href="#">LINK1</a></li>
    <li><a href="#">LINK2</a></li>
</ul>
```

`.nav`基类

样式类：
- `.nav-tabs`（内凹式）
- `.nav-pills`（胶囊式）

可同时添加的其他样式类：
- `.nav-justified`使标签页等宽
- `.nav-stacked`使其垂直排列（只能给`.nav-pills`添加）


## 列表组

实例：
```
<ul class="list-group">
    <li class="list-group-item">第一条新闻</li>
    <li class="list-group-item">第二条新闻</li>
    <li class="list-group-item">第三条新闻</li>
    <li class="list-group-item">第四条新闻</li>
</ul>
```
`.list-group`和`.list-group-item`都是必需


### 按钮组

实例：
```
<div class="btn-group">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
</div>
```

用`.btn-group`包裹按钮组，被包裹的按钮须有`.btn`类，使其变成水平排列的按钮组。也可用`.btn-group-vertical`包裹按钮组，使其变成垂直按钮组。

可以把一组`.btn-group`组合进一个`.btn-toolbar`形成更复杂的按钮组件。

给`.btn-group`添加尺寸类`.btn-group-*`使得按钮组中的按钮都能同时拥有对应尺寸。

同时给`.btn-group`添加`.btn-group-justified`类，使按钮组平均分配父元素宽度。
