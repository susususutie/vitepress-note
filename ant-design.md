
## Momentjs

> npm install moment

```
var moment = require('moment')
moment().format()
```

当前时间
> moment();

保存至变量获取非实时事件
> var old = moment()

字符串转换成时间对象

> momnet(String)

该字符串必须符合 IOS 8601 国际标准时间表示格式
2019_07_19
20190709

合法性校验

> moment(Stirng).isValid

指定格式的字符串解析，（时间、格式、地区标识、是否启用严格解析模式）

> moment(String, String, String, Boolean)

多格式

> moment(String, String[], String, Boolean);

匹配第一个正确的时间格式




























## Ant Design


### 安装

> npm install ant-design-vue --save











Object.is() === 判断是否相等，前者NaN与自身相等，且区分+-0

