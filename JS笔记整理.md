## BOM

BOM指浏览器对象模型，定义了js可以操作的浏览器各个功能部件的接口，是一种接口定义。
JS通过通过访问BOM对象来访问、控制、修改浏览器。
BOM对象的核心是window对象，window对象有一个属性是document，document属性的值就是document对象，因而通过window对象的document属性可以访问、修改文档的内容。
document对象是DOM模型的根节点，因此可以说BOM包含了DOM，浏览器提供出来的是BOM对象，JS从BOM对象访问到DOM对象，才能访问修改文档。
BOM没有正式标准，各个浏览器厂商在各自浏览器上有不同实现，除了DOM有W3C的标准限制，各浏览器对DOM的实现比较一致，兼容性尚可，BOM的其他方法兼容性很差。
所有对象都在window对象内，以下是window中的常用对象：

```
                        document: document对象
                        history: History对象
window: Window对象 ->   localStorage: Storage对象
                        navigator: Navigator对象
                        screen: Screen对象
                        location: Location对象（当前URL信息）
```
Window对象表示一个浏览器窗口或框架，window是全局变量，使用window的属性时不用加上window，如window.document可以直接写document，不必写Window.alert()，只写 alert()。

window的常用方法和属性如下：
```
innerheight
innerwidth
alert()
confirm()
prompt()
scrollBy()
scrollTo()
setInterval()
setTimeout()
clearInterval()
clearTimeout()
```

History对象常用属性方法：
```
length	    浏览器历史列表中的URL数量
back()	    后退
forward()	前进
go()	    加载指定页面。
```

Navigator对象常用属性：
```
appName	     浏览器名称"Netscape"
appCodeName	 浏览器代码名"Mozilla"
appVersion	 平台和版本信息"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
```

Screen对象属性（极少用）：
```
width	返回显示器屏幕的宽度
height	返回显示器屏幕的高度
```

Location对象常用属性：
```
href	    设置或返回完整的URL
protocol	设置或返回协议名
host	    设置或返回主机名和端口号
hostname	设置或返回主机名
port	    设置或返回端口号
pathname	设置或返回路径部分。
hash	    设置或返回从#开始的URL
```

## DOM

DOM指文档对象模型，定义了程序访问文档的接口，是W3C的标准。document对象是DOM的根节点，可以理解为BOM包含了DOM，浏览器提供的是BOM对象，js从BOM对象访问到DOM对象，js从而可以操作文档。


## 浏览器结构

1. shell
2. 内核
    - 渲染引擎
    - JS引擎
    - 其他模块


## 主流浏览器及其内核

| 浏览器  | 内核|
| :--     | :-- |
| IE      | trident |
| Chrome  | webkit/blink |
| firefox | Gecko |
| Opera   | presto |
| Safari  | webkit|


## 编译型语言 与 解释性语言

单线程（同步，一次只能处理一个事件）| 多线程（异步，可同时处理多个事件）

JS是单线程、伪异步。通过轮转时间片将多个事件切割成极小片段，穿插执行，伪造成异步效果。


## JS组成

- ECMAScript
- DOM
- BOM


## 数据类型

- 原始值：Number Boolean String undefined null

    存储在stack(栈),(first in last out)、先定义的变量放在栈底

- 引用指：arry Object function date RegExp ...

    存储在heap(堆)，仅在栈中存储一个指向堆的标记，类似于指针。


## 作用域链

作用域`[[scope]]`属性中存储了作用域链，也就是执行器上下文的集合，它们呈链式结构。当函数被调用，需要查找某个变量时，从该函数作用域链的顶端依次往下查找。

例如，当函数a()在全局作用域下被定义时，`a.[[scope]]`属性中存储了该函数的作用域链，此时的作用域链中只有第0位有值，存放的是全局GO，GO中包含了this、window、document、等属性，以及一些全局变量。

当函数a()被执行时，（在执行前一刻）会产生一个执行器上下文AO，AO被存放在`[[scope]]`属性的第0位，而全局对象GO则被移至第1位。这时的AO对象中存放了a()函数内部变量、参数、函数等（见函数预编译）。当运行a()需要某个变量时，会先从作用域链的第0位，也就是Aoki中查找，如果Aoki中没有这个变量，则在GO中查找，顺着作用域链从顶端依次向下。

函数a()是全局作用域下的函数，当另有一个函数在a()中定义时，作用域链又会怎样连接呢？

在a()内部再定义一个函数b()，b()内部产生一个作用域链，完全与a()的相同，第0位是啊a()的AO，第1位是GO。在b()函数内部的a()函数的AO完全与a()函数内部的AO一样，也就是说这个AO在b()中被修改，a()中的AO也会被修改。同理，在函数a()中修改GO也能生效。这是很显然的，因为全局变量也是GO的属性，函数对全局变量的修改都是同步的。

当函数b()执行时，会生成自己的AO，并将它放在自己作用域链的第0位，函数a()的AO与全局GO也下移一位，这时在b()中查找变量就先在函数b()自己的AO中查找，其次是函数a()的AO，然后是GO，多层函数嵌套时作用域链就按这个规律排列。


## 高阶函数

高阶函数不是指一类函数，而是指一种概念。它指函数作为一个参数传递给另一个函数。

定义一个函数foo()，foo指函数本身，foo()是函数调用。函数本身可以赋值给变量，即var tem = foo，此时变量可以指向函数，可以通过这个变量来调用该函数，即tem()。函数名其实就是一个指向函数的变量。

定义函数有两种方式，一种是函数声明，形如function abc() {}，此时abc是函数名，通过abc()即可调用函数。

另一种是函数表达式，函数表达式又可分为命名函数表达式和匿名函数表达式，形如`var test = function abc() {}`就是命名函数表达式，这条语句的意思是将函数表达式赋值给变量test，在函数表达式中函数名abc会被忽略，无法通过abc()调用函数，只能通过变量test以test()形式调用函数，全局变量abc也不存在，只能通过test.name属性访问到abc，也就是说函数名依然是abc，只是此时它是函数test内部的一个属性，而不再指向函数本身。

由于命名函数表达式的函数名没有意义，因而常用匿名函数表达式，形如`var test = function () {}`，将匿名函数表达式赋值给变量test，可以通过test()调用函数，同时test.name属性的值也是test。


## JSON搭配localStorage实现本地存储

`JSON.parse()`将JSON对象解析成对象

`JSON.stringify()`将JS对象转换成JSON对象，其实就是给对象的属性名加上双引号，然后将整个对象变成字符串。

`localStorage.setItem("name","caibin") `存储数据

`localStorage.getItem("name")` 读取数据

`localStorage.removeItem("name")` 删除某一变量

`localStorage.hasOwnProperty('name')`  检查是否含有某一变量



## 立即执行函数：

当系统读到立即执行函数时就立即执行，它和普通函数的唯一区别在于执行完立即释放（被销毁），通常针对初始化功能的函数、只需执行一次的函数、避免占用空间的函数会把它们写作立即执行函数的形式。立即执行函数可以有很多种形式，归根结底是因为它不是系统定义的某一类函数，而是人为地利用语法规则制造出的，推荐使用的格式为`(function (形参) {函数体} (传参))`。

先明确一个概念，只有表达式才能被执行符号（也就是括号）执行。例如test()可被执行，而function () {函数体} ()不能，因为function () {} 是函数声明，不是表达式。而var test = function () {函数体} () 可以，因为var test = function () {函数体} 是一个函数表达式。被执行符号执行的函数表达式会自动放弃函数名称，也就成了立即执行函数。

在这个前提下，通过在函数声明前加一元运算符+（正）、-（负）、!（取反）使其变成表达式，就能达到变成立即执行函数的条件。括号也是一种运算符，用括号将函数声明function () {} 括起来，变成(function () {} ) ，再在末尾加执行符号() 也就得到常见立即执行函数的一个形式(function () {} ) ()，括号放在最外面也同样成立，就得到了常用的立即执行函数形式(function (形参) {函数体} (传参))。

当函数内部还有一个函数，内部函数被保存到外部时，就形成了闭包。闭包会导致原有作用域链不释放，造成内存泄漏。这是因为，形成闭包后，内部函数一直未执行，它保存的外部函数的AO也就一直存在，
内存被这些AO占用，就叫内存泄漏。利用闭包可以实现很多独特的功能，意外触发闭包也会导致一些难以发觉的错误。

闭包的一个作用是当作缓存。当主函数内部有多个子函数都被保存到外部，这些子函数都与母函数形成闭包，这些闭包所保存的作用域链是一样的，都是主函数的AO，这些子函数都能操作主函数的变量，也就是AO内的变量，这样类似缓存结构。主变量存储数据，各个闭包函数操作数据。

另外，当主函数是一个立即执行函数时，主函数执行完就已被释放，它的变量在全局作用域内不存在，只存在于各个闭包函数的作用域链中，利用这个原理可以实现属性的私有化，也常用于模块化开发，防止个人变量污染全局变量。


## 构造函数：

构造函数与普通函数没有区别，只是人为定义用于构造某一类对象，为了避免构造函数与普通函数混淆，构造函数的命名必须严格符合大驼峰命名法。

小驼峰命名法：除第一个单词的首字母小写外，其余单词首字母需要大写。
大驼峰命名法：所有单词的首字母都需要大写。

构造函数内部的原理。构造函数原本只是普通函数，当前面加上new关键字后：

1. 在函数体最前面隐式地加上一个空对象this = {}
2. 执行`this.xxx = xxx` 使构造函数的属性和方法赋给this对象。
3. 在函数最后隐式地返回构造好的this对象。

通过这个过程，使用原型函数构造对象时，this对象就赋给了新构造出来的对象，从而使它有了原型函数的属性和方法。

对象是引用值，因而能有属性和方法，原始值是没有属性和方法的。当试图操作原始值的属性时，系统会隐式地进行new操作，根据这个原始值的原型生成一个对象，再操作这个对象的属性，操作完后再删掉这个对象。例如，对字符串str = "qwe"进行.length操作，系统会通过new String("qwe")构造一个新字符串对象，再进行.length操作返回结果3，然后删除这个对象。


## 原型

原型是function对象的一个属性，它定义了构造函数构造出的对象的公共祖先。原型属性prototype是一个对象，它有属性和方法，构造函数通过new关键字构造出的新对象可以继承prototype的属性和方法。对象是没有prototype属性的，那这些新对象是怎么和构造函数的prototype相联系的呢？答案是__proto__属性。

当构造函数生成新对象时，会先产生this对象，this对象有__proto__属性，__proto__属性的值是构造函数prototype属性的值。__proto__属性构成了原型链，它链接了子对象和构造函数的原型。访问子对象的某个属性或方法时，先从子对象本身寻找，如果没有再通过原型链在原型中寻找，如果构造函数的原型中也没有，会顺着原型链在构造函数的prototype属性的__proto__属性中寻找，也就是原型的原型，这就是__proto__串起的原型链的全貌。最终绝大多数对象（为什么不是所有？这与Object.create方法有关，下期会讲。）的最终原型都继承自系统自带的Object函数的原型Object.prototype，Object.prototype是原型链的顶端，它不再有__proto__属性。

在JS诞生之初，引入原型的概念是为了共享实例对象的共有属性与方法。构造函数构造出多个对象时，这些对象有一些属性是相同且一直不变的，这些属性在构造函数内部的`this.XXX = XXX`语句中，当创建新实例对象时，会执行这些语句，然后将this对象返回给新对象，新对象就有了这些属性，但每次构造新对象都会执行这部分语句，这无疑会浪费运算量，将这些共有属性和方法写在构造函数的prototype属性内，子对象就能通过继承使用这些属性和方法，这精简了构造函数的this代码。

原型的增删改查必须通过构造函数来实现，子对象无法修改构造函数的原型。另外对象有一个constructor（构造器）属性，用于查看它的构造函数是谁。


## 创建对象的两种形式

上期为什么说绝大多数对象最终都继承自Object.prototype，而不是所有？这里要先说说创建对象的两种形式。

1. 构造函数Object() 创建对象：`var obj = new Object()`
2. 对象自变量的方式：`var obj = {...}`

第二种的对象不是通过构造函数new出来的，但它也有原型。两种创建对象方式的效果一样，因为系统会隐式地自动通过new创建。由于构造函数构造对象时无法添加属性和方法，因而一般常用第二种方式创建对象。通过其他构造函数构造对象时，这个构造函数地原型也是一个对象，这个对象的原型链顶端自然是Object.prototype，因此Object.prototype是原型链顶端。


## Object.creat()

Object.creat() 可用于按照指定原型创建对象。create后只能放对象或null，放对象时以此对象为原型创建对象var obj = Object.creat(Object.prototype或其他构造函数.prototype) ，放null时，就创建了一个不在原型链中的对象，它没有__proto__属性。所以，除了Object.creat(null) 创建出地对象外，其他对象都最终继承自Object.prototype。


## 方法的重写

使用对象的某个方法时，会先调用对象的该方法，如果对象没有这个方法，会再沿着原型链查找原型上的该方法。有时候我们不想使用原型上的该方法，可以给对象添加一个同名方法，以后调用该方法时就会调用对象的这个同名方法，而不是原型链上的。这就叫方法的重写。系统的toString() 方法就是被重写过的，不是原型链上的Object.prototype.toString() 方法。


## call与apply

一般函数在调用时会隐式地使用call() 方法，call的第二种使用方法是构造函数.call(对象, xx, xx)，此时call改变构造函数内this的指向，使this指向输入的这个对象，剩下的参数作为实参传入函数的形参。apply在功能上与call没有区别，只是在使用格式上有所区别，call需要把实参按照形参的个数传入，apply则需要传入一个实参列表，也就是arguments数组。


## 继承

实现继承的几种方式：

1. 通过原型链实现继承，缺点是继承了过多无用属性。
2. 通过构造函数call() 实现继承自定义的原型，缺点是不能继承构造函数本身的原型，且降低了运行效率。
3. 共有原型。构造函数1.prototype = 构造函数2.prototype 使多个构造函数共用一个原型，缺点是此后他们的原型都相同，各自没有独有原型属性。
4. 最终模式（其实应该叫圣杯模式，但我觉得这个叫法太中二）。通过给两个构造函数加一个中间层，使其既能共享原型，又能有自己的独有原型属性。

```
            公有原型：
        Father.prototype
        /          \
Father()            Song()
                    (Son.prototype = Father.Prototype)
```

```
            最终模式：
        Father.prototype
        /          \
Father()            function F() {}
                    (F.prototype = Father.prototype)
                        \
                        Son()
                        (Son.prototype = new F())
```

构造函数Son() 是通过中间函数F() new出来的，它能继承F() 的原型，也就是有构造函数Father() 的原型属性方法，当给Son() 的原型添加自己的属性方法时，不会影响到构造函数Father() 的原型。

这一整个过程可以封装成一个函数，

```
function inherit (Target, Origin) {
    function F () {};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.Uber = Origin.prototype;
}
```

通过调用 inherit (Son, Father) 使Son() 继承Father() 的原型。其中原型的指向关系如下：

`son.__proto__ --> new F().__proto__ --> Father.prototype`

> Target.prototype.constructor = Target

语句用于给Targe添加一个属性，指明它的真正构造器

> Target.prototype.Uber = Origin.prototype;

用于指明Target 真实继承关系


## 对象的枚举

`obj.fangfa --> obj[fangfa]`
当通过. 调用对象的某一个方法时，系统会在内部转换成[ ] 形式，如：

`for(var key in obj){console.log(obj[key]);}`
遍历对象的所有属性。

`obj.hasOwnProperty (key) `
用于判断某个属性是不是对象本身的属性，而不是原型的。

`obj instanceof Fun`用于判断该对象是不是该构造函数构造出来的。它本质上是判断该对象原型链上有没有该构造函数的原型，可能该对象不是它构造出来的，但原型链终端有该构造函数的原型，也会返回true，instanceof 不是父子判断，而是后代判断。


## this指向问题

在函数预编译的过程中，AO中有this指向window，当函数被当作构造函数new后，this才会指向新对象。

在全局作用域，也就是GO，this 也指向window。而call和apply能改变this的指向，使this指向调用的对象。


## 克隆（包括浅层克隆和深层克隆）

浅层克隆，原始值的克隆是在栈内存中直接复制值。克隆源和克隆体互不影响。

引用值的克隆只是在栈内存中复制了堆内存的地址，克隆源和克隆体都指向堆内存的同一个地址，改变这个值后，克隆源和克隆体都会改变。

深层克隆是为了让引用值克隆后克隆源与克隆体互不影响，解决思路是先判断克隆源的数据类型，原始值直接复制，引用值则通过遍历将引用值内部的原始值克隆。


## 三目运算符

> conditions ? statementA : statementB;

先判断条件，为true执行语句A，为false执行语句B。可用于代替简单的if else 结构。


## 数组

创建数组的两种方式：

1. var arr = [];    数组自变量
2. var arr = new Array();

当`new Array()`只传入一个参数时，这个参数会被当做新创建数组的长度，写入数组自变量中的一个参数则会被当作新创建数组的的参数，这是两种方式的唯一区别。

数组不能溢出读取，返回值为undefined，但可以溢出写入，写入后自动扩充数组长度。

数组的常见方法：

.push() 向数组尾部增添值（不限个数）

.pop() 剪下数组最后一项

.shift() 剪下数组第一项

.unshift() 向数组头部增添值（不限个数）

.reverse() 逆反数组

.splice() `arr.splice(x,y,item1,.....,itemX)` x必选，从第几位开始；y必选切除几位，为0则不切除；item可选，从切口处添加的数据。

.sort() 给数组排序。sort方法是按字符串排序，由于字符串比较是逐位比较ASC码，对数字排序会不准。

以上七种都是ES3.0的方法，只有他们能改变原数组，ES5.0新增了一些方法不能改变原数组，主要关注返回值。

.concat() 在数组后连接另一个数组（传参），生成新数组

.slice(a, b) 从第a位开始截取，截取到第b位，但不包括b，生成新数组

.join() 传参为字符串，用该字符串将数组每一位连接成一个新字符串


## 类数组

利用对象的属性可以自定义这个特点，用属性名表示索引值，用属性值表示元素，就可以用一个对象来模拟数组。这就叫类数组，或者是类数组对象。

属性为数字的索引属性，利用属性名模拟数组的特性，找到对应位的值。

必须有length属性，且length能根据类数组长度动态增长。

最好还定义了push()方法，调用push方法要能相应增加一位，且length对应改变。

```
var obj = {
    "0" : "a",
    "1" : "b",
    "2" : "c",
    "length" : 3,
    "push" : Array.prototype.push,
    "splice" : Array.prototype.splice,
}
```
这样就创建了一个类似数组的对象，它有length和push方法。也可以用遍历对象属性的方法来遍历这个类数组的各个元素


## try catch

```
try {

} catch (e) {

}

```

当try中代码出错后，系统不会抛出错误，只终止try中代码，跳过try执行catch中的语句和try catch之后的代码。catch用于捕捉错误信息，系统会传入参数e，也就是error对象，error对象包括error.name和error.message，try catch常用于输出错误信息。

error.name 有六种：

1. EvalError: eval的使用与定义不一致，不推荐使用eval，这个错误不常见。
2. RangeError: 数值越界（少见）
3. REferenceError: 应用错误，不能识别的引用值，如变量不声明就使用，函数不声明就调用。
4. SyntaxError: 语法解析错误
5. TypeError: 操作数类型错误
6. URIError: URI处理函数使用不当


## ES5严格模式

目前的浏览器主要基于ES3和ES5的新增语法，当二者向冲突时，以ES3为准，ES5严格模式能使浏览器按ES5的方法处理冲突。

在页面顶端写"user strict"启用全局严格模式，也可写在函数内部顶端，只使该函数在严格模式下。


## DOM基本操作

document object model 文档对象模型，它是一些方法的集合，由浏览器厂商定义，这些方法可以修改HTML，是对HTML编程的接口。

任何方法都无法修改样式表，常规修改样式的本质是在HTML标签上增减某些预定义好的类名，或给HTML增加属性覆盖样式，总之无法直接修改CSS样式表。

Document.prototype上定义了documentElement属性，指代文档根元素。在HTML文档中指代HTML文档，即document.documentElement --> HTML

HTMLDocument.prototype定义了一些常用属性。body，head分别指代HTML中的body和head标签，即document.body --> body，document.head --> head

增：
- document.creatElement()创建元素节点，填入字符串，如"div"
- document.creatTextNode()
- document.creatComment()注释
- document.creatDocumentFragment()最小文档片段，节点占位符

插入：
- appenChild()往父节点插入子元素
- insertBefore(a, b)往父节点中b标签前插入a标签

删：
- parentnode.removeChild()在父结点中移除某个子结点
- childnode.remove()移除子结点自身

替换：
- parentnode.replaceChild(a, b)用a元素替换b元素

Element节点属性：

- innerHTML
- innerText读写标签内文本内容，写入会覆盖该标签内的所有子标签

Element节点方法：

- setAttribute("属性名", "属性值")给元素设置属性
- getAttribute("属性名")获得属性值


## 对节点的增删改查

查看文档节点（document代表整个文档）：
- document.getElementById()
- document.getElementsByTagName()
- document.getElementsByName()
- document.getElementsByClassName()

以下两个方法不常用，因为选择结果不是实时的，dom节点发生改变后，它们无法同步更改
- document.querySelector()
- document.querySelectorAll()

遍历节点树

包括文本节点，注释节点的全部节点树：
- parentNode
- childNodes
- firstChiild
- lastChiild
- nextSibling后一个兄弟节点
- previousSibling前一个兄弟节点

只包含元素节点（基本不兼容IE）：
- parentElement
- children唯一常用方法，兼容IE
- childElementCount子结点个数（===children.length）
- firstElementChild
- lastElementChild
- nextElementSibling
- previoElementusSibling


## 节点的属性和方法

1. nodeName元素标签名，一个自读字符串
2. nodeValue只有文本和注释节点有的属性，指元素内容，可读写
3. nodeType判断节点类型，返回一个代表节点类型的数
4. attributes返回属性的集合
5. hasChildNodes()判断是否有某个子结点的方法

nodeType的返回数值与对应的节点类型：

1：元素节点

2：属性节点

3：文本节点

8：注释节点

9：document

11：Document Fragment


## 日期对象

> `var date = new Date()`

创建一个新日期对象，它所保存的事件是它被创建时的时间

方法：

getFullyear()
getMonth() 0-11
getDate()
getDay()星期，0-7
getHours()
getMinutes()
getSeconds()
getMilliSeconds()
getTime()返回计算机零点至今的毫秒数，计算机零点是90年1月1日零点


## 定时器（定时循环执行）

setInterval (fun, MilliSeconds)

每隔多少毫秒执行一次，这里的时间只读取一次，无法动态更改时间来更改函数执行速率

定时器都有一个返回值，是该定时器的唯一标识，可用于清除定时器：

var timer1 = setInterval (fun, MilliSeconds);
clearInterval(timer1);

## 定时器（定时执行一次）

setTimeout (fun, MilliSeconds)

清除：

var timer2 = setTimeout (fun, MilliSeconds);
clearTimeout(timer2);


## 事件操作

绑定事件处理函数：

ele.onXXX = function () {...}

句柄绑定方式，因为它相当于将JS写在HTML行间，兼容性很好，但一个事件只能绑定一个处理函数

ele.addEventListener (type, fun, false)
false也可省略，以上两种方法中，事件处理函数的this都指向被绑定的DOM元素本身

ele.attachEvent ("on" + type, fun)

此时的this指向window

解除事件处理程序：

ele.onclink = false/""/null

ele.removeEventListener(type, fun, false)

ele.detachEvent("on" + type, fun)

由于解除时必须输入事件处理函数的函数名，因而不能解除匿名函数


## 事件处理模型

事件冒泡：

在结构上呈嵌套关系的元素会存在事件冒泡，也就是事件触发在子元素身上，会一级级向父级传递，使父级也触发该事件，并不是所有事件都有冒泡模型。

事件捕获：

与事件冒泡相反，父元素会先捕获到事件，先于子元素触发，将以上事件处理方法中的false改为true就是事件捕获模型，一个对象的一个事件类型只存在一个事件模型，要么是冒泡，要么是捕获，目前，事件捕获旨在chrome浏览器上实现。


## 取消冒泡，阻止默认事件

取消冒泡：

在事件处理函数中，系统会默认传入一个参数，事件对象，这个对象的方法和属性可用于阻止冒泡。

event.stopPropagation();
event.cancelBubble = true;

阻止默认事件：

在事件处理函数中return false

document.oncontextmenu = function () {
    return false;
}

在系统的“鼠标右键菜单”事件中，return false能阻止默认事件。这是句柄式的绑定事件方法，在非句柄式的绑定事件方法中不生效。

event.preventDefault();IE9以下不兼容
event.returnValue = false;可兼容IE

因为a标签的href属性中可直接执行JS代码，阻止a标签默认跳转事件常在href属性中写入"javasdript:void()"，相当于在句柄写入return false。

事件源对象：

在事件对象中，有一个事件源对象属性，记载了哪个子元素触发的事件引起了冒泡。IE中为window.event，因而常用兼容性写法event || window.event。

event.target火狐专有，事件源对象
event.srcElementIE专业
以上两种，chrome都支持

事件委托：

利用事件冒泡和时间源对象机制，当需要给多个子元素绑定事件时，可直接绑定在父元素上，子元素的事件最终会通过冒泡触发父元素，而通过事件源对象也可很轻易的找到触发该事件的子对象。它的优点是不需要循环绑定所有子元素，子元素的额数量发生变化时也不影响事件绑定。

## 鼠标事件

click包含了mousedown和mouseup，且是先触发mousedown再触发mouseup，最后触发click事件。

contextmenu右键产生菜单事件，它的唯一用处是取消右键默认事件，而不是用于绑定右键事件。

mousemove鼠标移动事件

mouseover、mouseout鼠标移入移出

mouseenter、mouseleaverHTML的新方法，用处同上

鼠标左右键区分：

只有mousedown和mouseup两个事件能区分鼠标左右键，在这两个事件的事件对象中，有一个button属性，值为0时是左键，为1时是鼠标滚轮，为2时是鼠标右键。

## 键盘事件

按键按下时先触发keydown，再触发keypress，如果按键不抬起则继续反复触发这两个事件，直到按键抬起，触发keyup。

ketdown可以响应任意按键，但对字符类按键的识别不够精准，例如无法区分大小写，keypress只能响应字符类按键，返回ASCⅡ码。

keypress的时间源对象中有一个charcode属性，表示该键的ASCⅡ码，Unicode编码包含了ASCⅡ码，String.fromCharCode()方法可将Unicode编码转换成相应字符，因而就能将ASCⅡ码转换成对应字符。


## JSON

JSON本质上就是对象，被用作传输数据的样板，认为规定给它的属性名也加上双引号，以便于与普通对象区分，就像构造函数与普通函数的区别。

常用方法：

JSON.parse()将字符串解析成JSON格式
JSON.strigify()将JSON格式转换成字符串

浏览器解析HTML结构生成DOM树时，遵循深度优先原则，即将DOM树的一条枝干完全解析后再解析另一条，生成DOM树的过程也叫DOM节点的解析，不必等元素所有资源都加载完，只需识别到该元素就行，因而当DOM树生成，也就是所有DOM节点都解析完后，图片等资源不一定都加载完了。

在DOMTree生成后再生成CSSTree，然后合并生成randerTree，浏览器的渲染引擎才开始按照randerTree绘制页面。JS对DOM节点的增删改会改变DOMTree，重新生成randerTree，这叫reflow重排或者重构，重排极大影响效率。DOM节点的增删改，DOM节点的宽高变化，位置变化，display变化，offsetWidth、offsetLeft等都会导致重构。字体颜色背景的变化引起repaint重绘，重绘对效率的影响不及重排。