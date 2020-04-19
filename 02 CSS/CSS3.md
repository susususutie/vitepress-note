# CSS3

## 动画

### @keyframes

使用规则为:使用动画属性控制动画外观，将动画与选择器绑定.

语法:

> @keyframes animationname {keyframes-selector {css-styles;}}

- animationname 必需,定义动画的名称
- keyframes-selector 必需,动画时长的百分比(0-100%|from与0%相同|to与100%相同)
- css-styles 必需,一个或多个合法的 CSS 样式属性

首先创建一段动画,并且命名,然后在花括号中设置动画变化的每项内容,格式是用百分比表示动画进度,写下这一进度时的样式,表示动画在某一点时状态如何,好几个这样的进度点连贯起来形成完整的动画.表示进度的百分比可任意分割,但起点(0%)与终点(100%)必须要有,不同浏览器表示方法不同,注意浏览器的兼容性.

例子:

```
@keyframes myanimation
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}
```

### animation属性

animation是一个简写属性,用于设置六个动画属性,其中名称和时长必须规定.与需要发生动画的元素绑定后,@keyframes创建的动画就能在该元素上发生.

语法:

> animation: name duration timing-function delay iteration-count direction;

name 需要绑定到该元素的动画名(由@keyframes创建)

duration 默认0s,没有动画,完成一次动画需要的时间

timing-function 默认ease,动画的速度曲线

- ease 动画以低速开始,然后加快,在结束前变慢
- linear 动画从头到尾速度相同
- cubic-bezier(n,n,n,n) 三次贝塞尔(Cubic Bezier)函数生成速度曲线,函数中的值从0到1
- 更多预定义值以及贝塞尔函数具体用法[查表](http://www.w3school.com.cn/cssref/pr_animation-timing-function.asp)

delay 默认0,规定在动画开始之前的延迟,允许负值,负值表示跳过动画前几秒

iteration-count 默认1,定义动画的播放次数(n或infinite无限次)

direction 默认normal,定义是否应该轮流反向播放动画,如果把动画设置为只播放一次,则该属性没有效果.normal动画正常播放,alternate动画在奇数次正常播放,偶数次反向播放
