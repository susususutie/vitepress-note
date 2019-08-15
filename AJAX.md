### 原生JS的AJAX方法

1. 创建请求对象

var xhr = new XMLHttpRequest();

2. 指定请求方法、请求地址、是否异步

xhr.open("GET", "url", true)

23. 在POST请求中，须在此处设置发送数据的格式

JSON:
xhr.sentRequestHeader("Content-type", "application/json")

Form:
xhr.sentRequestHeader("Content-type", "application/x-www-form-urlencoded")

3. 注册响应函数，当服务器发生响应时（监控readystate变化）调用

xhr.onreadystatechange = function () {...}

4. 发送请求，POST请求时send需传入发送的数据

xhr.send()


### new

兼容性地创建请求对象
```
var xhr = null;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  // IE6 IE5
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
```

### open

xhr.open("GET", "url", true)
xhr.open("POST", "url", true)


### onreadystatechange

readystate是请求对象的属性，它反映了请求的状态。状态码（status）属性反映响应的状态，当readystste为4，且状态码为200时就表示响应已成功。

```
xhr.onreadystatechange = function() {
  if (xhr.readystate = 4 && xhr.status == 200) {
    ...
  }
}
```

readystate 从0到4变化,onradystatechange事件也会按顺序触发五次,为4时表示请求已完成且响应已就绪,才会执行if函数内的事件

status 响应状态,200表示OK,404表示未找到请求页面

### GET示例

使用回调函数的一个完整AJAX任务:

```
var r;
function loadXMLDoc(url,cfunc) {
  if (window.XMLHttpRequest) {
      r = new XMLHttpRequest();
  } else {
    r = new ActiveXObject("Microsoft.XMLHTTP");
  }
  r.onreadystatechange = myFunction;
  r.open("GET",url,true);
  r.send();
}

function myFunction () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    callBackFunction(r.response)
  }
}

function callBackFunction (data) {
  ...
}
```
