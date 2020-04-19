// 克隆函数,深层克隆
function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                // 判断 obj 子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    // 如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}




// type方法
function type(target) {
    var ret = typeof (target);
    var template = {
        "[object Array]": 'array',
        "[object Object]": 'object',
        "[object Number]": 'number-object',
        "[object Boolean]": 'boolean-object',
        "[object String]": 'string-object',
    }
    if (target === null) {
        return "null";
    } else if (ret == "object") {
        var str = Object.prototype.toString.call(target);
        return template[str];
    } else {
        return ret;
    }
}



// 数组去重 在原型链上编程
// 利用对象属性值的覆盖
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = 'q';
            arr.push(this[i]);
        }
    }
    return arr;
}



// 兼容性 求滚动距离getScrollOffset()
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}



// 返回浏览器可视区窗口的尺寸getViewportOffset()
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if (document.compatMode === "BackCompat") {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}



// getStyle(elem, prop) 获取任意元素的样式
function getStyle(elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}



// 用于绑定任意对象 任意事件类型 任意事件处理函数 addEvent(elem, type, handle)
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}



//封装一个兼容性的阻止冒泡函数 stopBubble(event)
function stopBubble(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}



// 兼容性的阻止默认事件函数 cancelHandler(event)
function cancelHandler(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}



//拖拽函数,调用拖拽函数的元素能被鼠标自由拖拽
function drag(elem) {
    var disX,
        disY;

    addEvent(elem, 'mousedown', function (e) {
        var event = e || window.event;
        disX = event.pageX - parseInt(elem.style.left);
        disY = event.pageY - parseInt(elem.style.top);
        addEvent(document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);
        stopBubble(event);
        cancelBubble(event);
    });

    function mouseMove(e) {
        var event = e || window.event;
        elem.style.left = event.pageX - disX + "px";
        elem.style.top = event.pageY - disY + "px";
    }

    function mouseUp(e) {
        var event = e || window.event;
        document.removeEventListener('mousemove', mouseMove, false);
        document.removeEventListener('mouseup', mouseUp, false);
    }
}



//异步加载JS文件
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState) {
        Script.onreadystatechange = function () {
            if (Script.readyState == "complete" || Script.readyState == "loaded") {
                callback();
            }
        }
    } else {
        Script.onload = function () {
            callback();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}

//当与函数库配合使用时，函数库是一个对象，它的方法时所需执行的函数 tools {text : function...} 使用text方法时
// function loadScript(url, callback) {
//     var script = document.createElement('script');
//     script.type = "text/javascript";
//     if (script.readyState) {
//         Script.onreadystatechange = function () {
//             if (Script.readyState == "complete" || Script.readyState == "loaded") {
//                 tools[callback]();
//             }
//         }
//     } else {
//         Script.onload = function () {
//             tools[callback]();
//         }
//     }
//     script.src = url;
//     document.head.appendChild(script);
// }
// loadScript('tools.js', 'text');



// 使用正则表达式将字符串形式的金额加点
function jiadian (str) {
    var str = str;
    var reg = /(?=(\B)(\d{3})+$)/g;
    return str.replace(reg, ".");
}



// 控制台输出被按下的鼠标按键，同时移除右键默认菜单
addEvent(document, 'mousedown', function (e) {
    var e = e || window.event;
    addEvent(document, 'contextmenu', function (e) {
        var e = e || window.event;
        cancelBubble(e);
    });
    if (e.button == 0) {
        console.log("左键");
    } else if (e.button == 2) {
        console.log("右键");
    } else if (e.button == 1) {
        console.log("鼠标滚轮");
    }
});

//控制台显示键盘上按下的字符按键 addEvent fromCharCode
addEvent(document, 'keypress', function (e) {
    var e = e || window.event;
    console.log(String.fromCharCode(e.charCode));
});



// randomWord 产生指定长度的随机字母和数字的组合
// rFlag -> true  -> [min, max]
//       -> false -> [min, min]
function randomWord(rFlag, min, max) {
    var result = "",
        rLength = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (rFlag) {
        rLength = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < rLength; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        result += arr[pos];
    }
    return result;
}



// 阶乘 factorial(n) -> n！(0! == 1)
function factorial(n) {
    n = parseInt(n),
        answer = 1;
    for (var i = 1; i <= n; i++) {
        answer *= i;
    }
    return answer;
}



// fibonacci(n) --> [1, 1, ...] 斐波那契数列
// 第n项斐波那契数为 fibonacci(n)[n - 1]
function fibonacci(n) {
    var n = parseInt(n),
        arr = new Array();
    arr[0] = 1;
    arr[1] = 1;
    if (n > 2) {
        for (var i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    };
    return arr;
}



// myAdd(x, y, ...) --> sum 任意个参数的加法
function myAdd(x, y) {
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}



// 输入阿拉伯数字，逆转并输出汉字形式
// numToRevChi(123) --> 叁贰壹
function numToRevChi(num) {
    var numToArr = function (num) {
        var x = parseInt(num);
        var arr = new Array();
        var l = x.toString().length;
        for (i = l - 1; i >= 0; i--) {
            arr[i] = x % 10;
            x = parseInt(x / 10);
        }
        return arr;
    }
    var cNum = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    var marr = numToArr(num).reverse();
    var revChi = "";
    for (i = 0; i < marr.length; i++) {
        revChi += cNum[marr[i]].toString();
    }
    return revChi;
}



// 正向输入三位数，反向输出
// shuZf(123) --> 321  
function shuZf(n) {
    var n = parseInt(n);
    var g = n % 10,
        s = n % 100 - g,
        b = n % 1000 - s - g;
    return g * 100 + s + b / 100;
};



// cookie操作方法，可链式操作
var manageCookie = {
    setCookie: function (name, value, maxAge) {
        document.cookie = `${name}=${value}; max-age=${maxAge}`;
        return this;
    },
    removeCookie: function (name) {
        return this.setCookie(name, "", -1);
    },
    getCookie: function (name, callback) {
        var cookiesArr = document.cookie.split("; ");
        for (var i = 0; i < cookiesArr.length; i++) {
            var item = cookiesArr[i].split("=");
            if (item[0] == name) {
                callback(item[1])
                return this;
            }
        }
        callback(undefined)
        return this;
    }
}



// 防抖函数
// debounce(fun, time) fun-->目标函数 time-->消抖时间
function debounce(func, time) {
	var timer = null;
	return function () {
		var _this = this;
		var funcArgu = arguments;
		clearTimerout(timer);
		timer = setTimeout(function () {
			func().apply(_this, funcArgu)
		}, time)
	}
}



// 节流函数
function throttle(fn) {
    // 通过闭包保存一个标记
    let canRun = true;
    return function () {
        // 在函数开头判断标志是否为 true，不为 true 则中断函数
        if (!canRun) {
            return;
        }
        // 将 canRun 设置为 false，防止执行之前再被执行
        canRun = false;
        // 7、定时器
        setTimeout(() => {
            fn.call(this, arguments);
            // 执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
            canRun = true;
        }, 1000);
    };
}