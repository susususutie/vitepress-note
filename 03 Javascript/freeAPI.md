# 免费API

## AcgClub-API

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



## uploadbeta-API

原网站：https://uploadbeta.com/  
API文档：https://uploadbeta.com/picture-gallery/faq.php#api

### 一般使用

1. 根据指定关键字获取该关键字下图片总数

可直接使用汉字关键字：`https://uploadbeta.com/api/pictures/count/?key=车模`

也可先对汉字进行转码：`https://uploadbeta.com/api/pictures/count/?key=%E8%BD%A6%E6%A8%A1`

```js
encodeURI('车模') 				// --> "%E8%BD%A6%E6%A8%A1"
decodeURI('%E8%BD%A6%E6%A8%A1') // --> "车模"
```

返回JSON
```json
["24"]
```

2. 根据该关键字下图片总数count配置查询参数

```
https://uploadbeta.com/api/pictures/search/?key=%E8%BD%A6%E6%A8%A1&start=0&offset=24&sort=0
```
|键|值|
| -- | -- |
|key|key|
|start|开始索引，设置为0即可|
|offset|结束索引，设置为该关键字的图片总数，即上一步的count|
|sort| 搜索结果排序方式，不设置则默认为0

0: 按`count` -- `created` -- `last`的顺序排序  
1: `last` -- `count` -- `created`  
2: `search` -- `last` -- `count` -- `created`  
3: `search` -- `last` -- `count` -- `created`  
4: 随机

返回JSON
```json
[
  {
    "id": "9812",
    "url": "upload/2016/03/14/a3ea258ac339cd03b4750ffe3d9a755d.jpg",
    "flag": "3",
    "created": "1457964049",
    "count": "468",
    "search": "97",
    "last": "1568565990",
    "title": "大胸 非常性感 的车模",
    "width": "700",
    "height": "931",
    "size": "236280",
    "filename": "车模.jpg [Car model]",
    "comment": "This image is uploaded by anonymous at Monday 14th of March 2016 01:59:33 PM.<BR/>\r\n黑色性感连衣裙\r\n高跟 我的最爱",
    "ip": "90.152.1.212",
    "checksum": "a3ea258ac339cd03b4750ffe3d9a755d",
    "picgroup": "大胸 非常性感 的车模"
  },
  {
    "id": "16277",
    "url": "upload/2016/08/31/23a3349ce92db0c1c86bd3c6cb765ce9.jpg",
    "flag": "3",
    "created": "1472630501",
    "count": "147",
    "search": "49",
    "last": "1567737330",
    "title": "车模兽兽复出最新性感代言写真(图2)",
    "width": "490",
    "height": "652",
    "size": "54432",
    "filename": "/tmp/UploadBetaFK4mlS [车模 妹纸 Car Models] url = http://7su.me/wp-content/uploads/zngirls/2016/08/31/00/2016083116697.jpg",
    "comment": "车模兽兽复出最新性感代言写真(图2) 车模兽兽复出最新性感代言写真 车模 妹纸 Car Models group:车模兽兽复出最新性感代言写真",
    "ip": "VPS Server",
    "checksum": "23a3349ce92db0c1c86bd3c6cb765ce9",
    "picgroup": "车模兽兽复出最新性感代言写真"
  },
  // ...共24项
  {
    "id": "16705",
    "url": "upload/2016/08/31/f209e890d3cbe4ebbc1636df8020403c.jpg",
    "flag": "3",
    "created": "1472631412",
    "count": "19",
    "search": "41",
    "last": "1552746075",
    "title": "车模李佳娜车展上扮演纯美数码宝贝(图6)",
    "width": "620",
    "height": "866",
    "size": "70257",
    "filename": "/tmp/UploadBetautx3di [车模 妹纸 Car Models] url = http://7su.me/wp-content/uploads/zngirls/2016/08/31/00/2016083116288.jpg",
    "comment": "车模李佳娜车展上扮演纯美数码宝贝(图6) 车模李佳娜车展上扮演纯美数码宝贝 车模 妹纸 Car Models group:车模李佳娜车展上扮演纯美数码宝贝",
    "ip": "VPS Server",
    "checksum": "f209e890d3cbe4ebbc1636df8020403c",
    "picgroup": "车模李佳娜车展上扮演纯美数码宝贝"
  }
]
```

此时即已得到该关键字下的所有图片，每一图片可能来自相同或不同套图，需根据`picgroup`字段对其进行筛选，去除`picgroup`重复的图片就得到该关键字下的所有套图。

3. 查看某一套图的所有图片，将该套图的`picgroup`设为查询关键字重复步骤1，2，即可得到该套图下的所有图片。注意，按`picgroup`搜索的结果可能会有部分图片的`picgroup`与搜索关键字不符，需对搜索结果剔除。

4. 获取图片url

得到剔除后的套图数据后，根据`https://uploadbeta.com/_s/`+`url`字段拼接图片正确地址。若只想预览显示低质量图片，可将`url`改为`url+500.jpg`，如：

```js
https://uploadbeta.com/_s/upload/2016/08/31/23a3349ce92db0c1c86bd3c6cb765ce9.jpg
https://uploadbeta.com/_s/upload/2016/08/31/23a3349ce92db0c1c86bd3c6cb765ce9.jpg500.jpg
```

## 其他

按关键字获取随机图片：`https://uploadbeta.com/api/pictures/random/?key=`

必应每日壁纸图片关键字：`BingEverydayWallpaperPicture`，以此关键字搜索的结果中`picgroup`均为`BingEverydayWallpaperPicture`。