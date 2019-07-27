#### URL

* 获取所有类别的壁纸

  `https://rabtman.com/api/v2/acgclub/pictures`

* 获取指定类别的壁纸

  `https://rabtman.com/api/v2/acgclub/category/{type}/pictures`

#### 支持格式

> JSON

#### HTTP请求方式

> GET

#### 请求参数

| 参数     | 必选    | 类型     | 说明                                       |
| :----- | :---- | :----- | ---------------------------------------- |
| {type} | false | string | 路径参数，通过该参数获取指定类型的壁纸；目前支持的类别：`moeimg`、`cosplay`、`gamersky` |
| offset | false | int    | 请求的页码，默认值为：1                             |
| limit  | false | int    | 每一页返回的结果数，默认值为：20，取值范围：20~60             |
| query  | false | string | 搜索关键字                                    |

#### 返回字段

| 返回字段      | 字段类型          | 说明          |
| :-------- | :------------ | :---------- |
| title     | string        | 壁纸名称        |
| type      | string        | 壁纸所属类别      |
| thumbnail | string        | 壁纸展示缩略图     |
| sort      | string or int | 壁纸顺序id      |
| imgUrls   | array         | 该主题下所有的壁纸地址 |

#### 接口示例

> 地址：https://rabtman.com/api/v2/acgclub/category/gamersky/pictures?query=%E8%BF%9C%E5%9D%82%E5%87%9B
```json
{
	"message": "请求成功",
	"data": [{
		"thumbnail": "http://imgs.gamersky.com/upimg/2018/201802031433291315.jpg",
		"title": "《Fate/Stay night》官方公布远坂凛生日壁纸",
		"type": "gamersky",
		"sort": 1010964,
		"imgUrls": [
			"http://img1.gamersky.com/image2018/02/20180203_ljt_220_5/gamersky_01origin_01_201823142764B.jpg",
			"http://img1.gamersky.com/image2018/02/20180203_ljt_220_5/gamersky_02origin_03_2018231427A25.jpg"
		]
	}]
}
```

#### 其他说明

壁纸每天更新一次，大概在凌晨5点完成更新，建议进行适当的缓存。

## 附录

### 返回的基础字段

| 返回字段    | 字段类型            | 说明                 |
| :------ | :-------------- | :----------------- |
| message | string          | 请求响应的信息            |
| data    | object or array | 响应的结果信息，可能为一个对象或数组 |

### 请求限制

为减轻服务器压力，对请求的频率进行了限制。

目前api请求限制为：`30/分钟`、`3/秒`

### 状态码

| 状态码  | 描述     |
| ---- | ------ |
| 200  | 请求成功   |
| 400  | 参数异常   |
| 404  | 找不到该页面 |
| 500  | 服务器异常  |