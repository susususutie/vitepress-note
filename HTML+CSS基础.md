# 旧笔记（待整理）


## 样式表的引入

三种引入样式表方法:

1.  外部样式表

    `<link>`标签引入:`<link rel="stylesheet" type="text/css" href="mystyle.css">`

2.  内联样式表

    在`head`内部通过`<style>`标签定义样式表

3.  内联样式

    在相关标签中使用`<style>`样式属性

## HTML链接

`<a>`标签内可以是文字或图像

-   `href`属性

    指向另一文档

-   `name`属性

    指向本文档内的书签,定义锚(anchor)的名称,锚本身不会显示,常用于创建目录.

-   `target`属性

    定义链接在何处打开,`target="_blank"`在新窗口打开.

锚的使用:

1.  对锚命名,创建书签

    命名锚的语法:

    `<a name="label">锚（显示在页面上的文本）</a>`

2.  同一文档中创建指向这个书签的链接

    `<a href="#label">返回书签处</a>`

3.  也可在其他页面创建指向该书签的链接

    `<a href="http://www.(书签所在文档地址)#label">返回书签处</a>`

## HTML头部

-   `<base>`标签为页面所有链接规定默认地址或默认目标`target`

    `<base href="url" /><base target="_blank" />`

-   `<link>`元素定义文档与外部文档的关系

    常用`href`属性连接样式表

-   `<meta>`标签没有结束标签,用于提供文档的元数据(metadata)

    1.  定义页面的描述
        `<meta name="description" content="描述内容" />`

    2.  定义页面关键词
        `<meta name="keywords" content="HTML, CSS, XML" />`

    3.  `charset`属性声明文档使用的字符编码,必须写在第一行,两种写法等价.
        `<meta charset="utf-8">`
        `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">`

    4.  禁止百度对网页自动转码
        `<meta http-equiv="Cache-Control" content="no-siteapp" />`

    5.  `viewport`移动端页面布局
        `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
        `content`参数:
        `width` viewport 宽度(数值/device-width)
        `height` viewport 高度(数值/device-height)
        `initial-scale` 初始缩放比例
        `maximum-scale` 最大缩放比例
        `minimum-scale` 最小缩放比例
        `user-scalable` 是否允许用户缩放(yes/no)

    6.  优先使用最新IE版本
        `<meta http-equiv="x-ua-compatible" content="ie=edge">`
        更多`<meta>`标签用法在[这里](http://www.cnblogs.com/sunny-Fung/p/8665540.html)

## HTML 实体

为了显示预留字符,需使用字符实体`&entity_name`或`&#entity_number`实体名称对大小写敏感,浏览器对实体数字的支持更好.
常用字符实体如下,在[这里](http://www.w3school.com.cn/tags/html_ref_entities.html)查看更多.

| 显示结果 | 实体名称     | 实体数字     |
| :--- | :------- | :------- |
| &lt; | `&lt;`   | `&#60;`  |
| >    | `&gt;`   | `&#62;`  |
| &    | `&amp;`  | `&#38;`  |
| '    | `&apos;` | `&#39;`  |
| "    | `&quot;` | `&#34;`  |
| (空格) | `&nbsp;` | `&#160;` |

## HTML URL

统一资源定位符,也就是网址,也可是IP地址,遵守以下语法规则:

`scheme://host.domain:port/path/filename`

-   scheme 定义因特网服务的类型,http,https,ftp,file.
-   host 定义域主机,http的默认主机是www.
-   domain 定义因特网域名,如w3school.com.cn.
-   :port 定义主机上的端口号,http默认端口号是80.
-   path 定义服务器上的路径,如果省略,则文档必须位于网站的根目录.
-   filename 定义文档/资源的名称.


## HTML 表单

`<form>`标签定义表单,用于收集用户输入.

`<label>`标签的for属性中填入`<input>`标签的id值，即可与`<input>`绑定，点击`<label>`时，`<input>`也获得了焦点。

`<input>`元素是最重要的表单元素,根据不同type属性有很多形态：

    `<input type="text">`常规文本输入，
    `<input type="password">`密码输入，
    `input type="radio">`单选按钮，
    `<input type="submit">`提交按钮，

其中，必须设置一个name属性才能被提交，value属性设置默认文本。

`<select>`下拉列表，
`<option>`待选择的选项，

selected 属性定义预定义选项
`<option value="fiat" selected>Fiat</option>`



## 基础

层叠次序:
1. 浏览器默认设置
2. 外部样式表
3. `<head>`标签内部`<style>`标签内的样式表
4. html元素内部的内联样式


## CSS选择器

- `*`通配选择符,选择所有元素

- ID选择器#仅使用一次

- 类选择器,可使用多个类名,顺序不限

- 属性attribute选择器
  [attribute]用于选取带有指定属性的元素
  [attribute=value]用于选取带有指定属性和值的元素,完整匹配
  [attribute~=value]属性值包含某个词,必须是整个单词
  [attribute|=value]以某词开头,必须是整个单词
  [attribute^=value]以某值开头
  [attribute$=value]以某值结尾
  [attribute*=value]包含某个值

- 元素选择器

- 后代选择器用空格隔开多个选择器,浏览器从右往左读,选择所有后代

- 子元素选择器 > 两边的空格可选,只能选择某元素的子后代元素

- 相邻兄弟选择器 + 选择紧接的第二个元素,两者有相同父元素

- 伪类选择器
 1. 锚伪类,链接的不同状态用不同的方式显示
 a:link 未被访问
 a:visited 已被访问
 a:hover 鼠标悬停,必须在link或visited后才能起作用
 a:active 活动,选定状态,必须在hover之后才能起作用  
 2. :first-child伪类
 选择作为第一个子元素的该元素,而不是该元素下的第一个子元素

- 伪元素,用于向某些选择器设置特殊效果,可与CSS类配合
  :first-line向文本首行设置特殊样式,只能用于块级元素,针对文本属性
  :first-letter首字母设置特殊样式,块级,也是文本
  :before在元素前面插入新内容
  :after之后
---
## CSS背景
background-repeat平铺:repeat-x,repeat-y.no-repeat

background-position定位:center,left,top等
  百分数表示时,同时作用于元素与图像,使两点对齐
  数值表示时,指图像左上角相对元素左上角的偏移

background-attachment是否随着页面滚动:scroll默认滚动,fixed不滚动,inherit继承父元素设置

---
## CSS文本
text-indent:
缩进,可使用负值,百分数时相对于父元素的宽度,可继承

text-align:
文本行的**水平**对齐,center

text-transform字符转换:
none,uppercase全部大写,lowercase全小写

text-decoration文本装饰:
none,underline下划线,overline上划线,line-through贯穿线,多种装饰可同时使用

---
## CSS框模型
![框模型](http://www.w3school.com.cn/i/ct_boxmodel.gif)

外边距合并:
只有普通文档流中块框的垂直外边距才会发生外边距合并,行内框浮动框或绝对定位之间的外边距不会合并

---
## 定位

static正常文档流.

relative相对定位.
元素相对原本占据的位置偏移,原先位置保留,元素偏移也不会与其他元素碰撞,而是叠加在正常文档流之上

![相对定位](http://www.w3school.com.cn/i/ct_css_positioning_relative_example.gif)

absolute绝对定位.
元素从文档流删除,相对文档页面或者上一个父级包含快定位,文档原先的位置不保留

![绝对定位](http://www.w3school.com.cn/i/ct_css_positioning_absolute_example.gif)

fixed与absolute类似.不同之处在于相对于浏览窗口定位,不随滑动条移动

overflow属性:规定当内容溢出元素框时如何处理,visible默认不修剪,在元素框外显示,hidden修剪超出隐藏,scroll修剪超出滚动

vertical-align元素对齐属性:设置元素的垂直对齐方式,baseline默认放在基线上,sub/super对齐文本下/上标,top/bottom元素顶/低端与行顶/低对齐,text-top/text-bottom与字体同上,middle父元素中部

z-index属性:设置元素堆叠顺序,仅在定位元素中生效,值越大离用户越近

---
## CSS浮动
待整理详见[w3school](http://www.w3school.com.cn/css/css_positioning_floating.asp)

---
## CSS 对齐
块级元素水平对齐:
宽度不为100%,设置左右margin为auto

---
## CSS3 新模块

### 框模型

border-radius:
边框圆角

box-shadow:
`box-shadow: h-shadow v-shadow blur spread color inset;`

|值|描述|
|-|-|
|h-shadow|必选,水平距离|
|v-shadow|必选,垂直距离|
|blur|可选,模糊距离|
|spread|可选,阴影尺寸|
|color|可选,颜色|
|inset|可选,默认外部阴影outset|

border-image:
边框图片,可使用图片创建边框

### 背景

background:url;设置图片
background-size:设置尺寸
background-origin:设置背景图片定位区域

### 文本效果

text-shadow:设置文本阴影
`text-shadow: h-shadow v-shadow blur color;`

### 字体

通过CSS3,web设计师可以使用网络上的任意字体

```
<style>
@font-face
{
font-family: myFirstFont;
src: url('Sansation_Light.ttf'),
     url('Sansation_Light.eot'); /* IE9+ */
}
div
{
font-family:myFirstFont;
}
</style>
```

### 2D转换

有如下方法

translate()
`ransform: translate(50px,100px);`
把元素从左侧移动 50 像素,从顶端移动 100 像素

rotate()
`transform: rotate(30deg);`
把元素顺时针旋转 30 度,允许负值

scale()
`ransform: scale(2,4);`
宽度转换为原始尺寸的 2 倍,把高度转换为原始高度的 4 倍

skew()
`ransform: skew(30deg,20deg);`
围绕 X 轴把元素翻转 30 度,围绕 Y 轴翻转 20 度

matrix()略

### 3D转换

### 过渡
方法:
1. 规定想改变的 CSS 属性上
2. 规定效果的时长
```
div
{
transition: width 2s;
-moz-transition: width 2s;	   // Firefox 4
-webkit-transition: width 2s; // Safari 和 Chrome
-o-transition: width 2s;	   // Opera
}
div:hover
{
width:300px;
}
```

如需向多个样式添加过渡效果,添加多个属性,用逗号隔开

### 动画

动画是使元素从一种样式逐渐变化为另一种样式的效果,可以改变任意多的样式任意多的次数,用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。0% 是动画的开始，100% 是动画的完成。为了得到最佳的浏览器支持，应该始终定义 0% 和 100% 选择器。

@keyframes 规则用于创建动画

```
@keyframes myfirst
{
from {background: red;}
to {background: yellow;}
}

@-moz-keyframes myfirst /* Firefox */
{
from {background: red;}
to {background: yellow;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
from {background: red;}
to {background: yellow;}
}

@-o-keyframes myfirst /* Opera */
{
from {background: red;}
to {background: yellow;}
}
```

@keyframes 中创建动画时，请把它捆绑到某个选择器，否则不会产生动画效果

通过规定至少以下两项 CSS3 动画属性，即可将动画绑定到选择器：

1. 规定动画的名称
2. 规定动画的时长

```
div
{
animation: myfirst 5s;
-moz-animation: myfirst 5s;	/* Firefox */
-webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
-o-animation: myfirst 5s;	/* Opera */
}
```
更多复杂用法见[这里](http://www.w3school.com.cn/css3/css3_animation.asp)



# 渡一html、css基础


## CSS选择器权重
权重值为256进制
| 选择器 | 权重值 |
| :--- | :--- |
| ！important | Intinity |
| 行间样式 | 1000 |
| id | 100 |
| class/属性/伪类 | 10 |
| 标签选择器 | 1 |
| 通配符 | 0 |


## 文本类属性元素
含有inline/inline-block属性的元素都为文本类属性元素。多个图片在同一行时，因为图片有文字特性，img标签间的换行会产生空格。这导致显示图片之间会有空格。愛しデイ


## margint塌陷与margin合并

通过给父级元素添加某些属性，触发元素的bfc(block format context 块级格式化上下文)改变元素盒模型的语法规则，解决margin塌陷。
```css
{
    position:absolute;
    display:inline-block;
    float:left/right;
    overflow:hidden;
}
```

触发bfc后，虽然解决了margin塌陷，但也引入了无关样式，影响了页面布局，实际运用中应选用对现有布局影响最小的方法。

margin合并指垂直方向的margin指会合并，按最大值显示，目前没有较好解决办法。实际开发中一般不处理，设置合适margin值即可。

## 浮动

浮动元素产生浮动流，只有块级元素看不到它们，触发了bfc的元素和文本类属性的元素能看到浮动元素。

浮动元素会脱离父级元素，若想让父级元素包含住子类浮动元素，常用`clear:both;`清楚浮动。

常用伪元素`::after`清除浮动，但伪元素默认为行内元素，需先设置为块级元素再清除浮动，且伪元素必须设置`content`属性才能生效。\

设置了`position:absolute;`和`float`属性的元素会从内部被转换成`inline-block`，宽高由元素内容决定，且元素边框紧贴内容。

## 文字溢出

1 单行文本，固定用法
```css
{
    white-space:nowrap;        //不换行
    overflow:hidden;           //超出隐藏
    text-overflow:ellipsis;    //多余文字打点显示
}
```

2 多行文本，只做截断，不做打点。通过设置文本框高度为行高整数倍，以便文字完整显示，文末手动输入...


## 图片代替文字
在图片加载不出来时显示文字，图片加载出来时不显示文字。常用两种方法：

1. 文字缩进图片宽度，把文字推出图片框+`white-space:nowrap;`禁止换行保证所有文字都被推出+`overflow:hidden;`隐藏文字。CSS正常加载时，文字被隐藏，图片以背景图片的形式显示出来。CSS加载不了时，背景图片无法显示，文字内容正常显示。
2. 设置内容高度为0，仅设置padding-top撑起内容框，图片以背景图片的形式显示出来，文本无法在内容区外，再利用`overflow:hidden;`隐藏文字。


## 块级元素与行级元素
行级元素只能嵌套行级元素，块级元素可以嵌套任意元素，只有两个例外：

1. p元素内不能嵌套块级元素
2. a标签不能嵌套a标签


## 行级元素的对齐
当行级块元素内包含文字时，同行的其他文字会与该行级块元素内的文字底对齐，而不是和行级块元素这个整体对齐。