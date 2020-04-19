### WHY JSON

JSON(JavaScript对象表示法JavaScript Object Notation)是一种纯文本格式,具体为轻量级的文本数据保存与交换的格式.在AJAX中,数据交换是通过XML格式进行的,由于XML文档结构复杂,需要传输的字节数较多,于是JSON的轻量级优点显现出来.

### JSON 语法

- 数据保存在名称/值对中,多个数据由逗号分隔,名称/值在双括号中,值可以为数字,字符串,布尔值,数组,对象,null.
- 花括号代表对象.
- 方括号代表数组.

### JSON用法

JSON最常见的用法是从web服务器上读取JSON数据,转换为JavaScript对象后在网页中使用.

### eval()函数 （不使用）

由于JSON语法是JavaScript语法的子集,可以用JavaScript的eval()函数解析JSON文件,转换为JavaScript对象.需要把文本包含在括号中,才能避免语法错误.

> var obj = eval ("("+ txt +")");

### JSON解析器

因为eval()函数可以编译执行任意JavaScript代码,如果被插入恶意代码,可能存在安全问题,因此可以使用JSON解析器将JSON转换为JavaScript对象,JSON解析器只能识别JSON文本而不会编译脚本.

> var obj = JSON.parse(txt);
