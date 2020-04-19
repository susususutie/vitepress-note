# Vue.js

<a name="au3Wf"></a>

# 安装

全局安装 Vue CLI 3.x

```bash
npm install -g @vue/cli
```

查看版本号确认安装

```bash
vue --version
```

可能的错误

```bash
vue : 无法加载文件 C:\Users\苏铁\AppData\Roaming\npm\vue.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。所在位置 行:1 字符: 1

* vue --version
* ~~~
    - CategoryInfo          : SecurityError: (:) []，PSSecurityException
    - FullyQualifiedErrorId : UnauthorizedAccess
```

windows 因为安全策略禁止运行脚本, 更改策略: 管理员身份打开 powershell

```bash
get-ExecutionPolicy
> Restricted
set-ExecutionPolicy RemoteSigned
> 执行策略更改
  执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
  中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
  [Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”):
y
```

即可, 再执行:

```bash
vue --version
> @vue/cli 4.1.2
```

表示 vue-cli 正常安装.

<a name="bU305"></a>

## 创建项目

```bash
vue create hello-world
```

创建项目后可选择预设的项目配置方案。

```bash
> ? Please pick a preset:
> default (babel, eslint)
  Manually select features
```

<a name="Z4C43"></a>

### ⚪ 选择默认预设

即可下载相关依赖. 依赖下载完成后进入项目，开启服务即可在本地预览项目.

```bash
 cd hello-world
 npm run serve
```

<a name="K2SC9"></a>

### ⚪ 选择自定义预设

```bash
? Please pick a preset:
  default (babel, eslint)
> Manually select features
```

选择项目配置

```bash
? Please pick a preset: Manually select features
? Check the features needed for your project:
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
>(*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

是否启用 history 模式路由

```bash
 ? Use history mode for router? (Requires proper server setup for index fallback in production
) (Y/n)
no
```

选择 css 预处理语言, 如果选择 Sass/SCSS (with node-sass)则还需安装 python

```bash
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
> Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus
```

选择代码校验与风格检查方式

```bash
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier
```

校验时机

```bash
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit
```

配置是否分开保存

```bash
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json
```

是否保存预设

```bash
? Save this as a preset for future projects? (y/N) n
```

配置完成，开始下载项目依赖，依赖下载完后即可本地预览项目.

<a name="5suUD"></a>

## CSS RESET

可使用第三方库进行样式初始化，此处以 normalize 为例。

1. 下载

```bash
npm i -S normalize
```

2. 在项目的  `main.js`  中引入

```javascript
// main.js
import "normalize.css/normalize.css"
```

<a name="jZoQ7"></a>

## 使用 axios

1. 安装

```bash
npm i -S axios
```

2. 使用

新建 api 文件夹，封装具体项目的 axios 方法后导出，在组件中按需引入使用。具体使用见 Axios 笔记。

```javascript
// src--> api
//         -- axios.js
//         -- index.js
```

axios.js 文件

```javascript
// 详细配置信息见axios笔记

import axios from "axios"
import Qs from "qs" // 用于参数序列化

// 1. 创建axios实例，定义响应超时时间和baseURL
// 2. 为实例创建请求拦截器
// 3. 为实例创建相应拦截器
// 4. 导出封装后的方法(get, post...)
```

index.js 文件

```javascript
// 具体示例代码见对应文件

// 5. 导入封装好的方法
// 6. 设置并导出不同api的请求方法
```

<a name="41VRS"></a>

## baseURL 配置

在根目录设置`.env.development` 和 `.env.production` 两个文件，定义对应环境下的 baseURL，使不同环境使用不同请求地址。

.env.development

```javascript
ENV = 'development'

# base api
VUE_APP_BASE_API = 'https://dev-api/'
```

.env.production

```javascript
ENV = 'production'

# base api
VUE_APP_BASE_API = 'https://pro-api/'
```

在其他文件中可通过  ` process``.``env``.``VUE_APP_BASE_API `  获取该值

<a name="gWEM0"></a>

## mockjs 的使用

1. 安装

```bash
npm i -D mockjs
```

2. 使用

src 下新建 mock 文件夹，其中新建 index.js mock.json

```javascript
// mock.json中定义固定的mock数据
{
  "code": 0,
    "data": {
    "name": "admin",
    "test": "外果技新务图身号件四织收须花不数消代都习照压出人支边通则代引酸"
  },
}

// index.js
// 引入mock 与定义的mock数据
const Mock = require("mockjs");
const data = require("./data");

const url = api => process.env.VUE_APP_BASE_API + api;
// 1. 针对指定接口返回固定数据
Mock.mock(url("/list"), "get", data);
```

则针对该接口的请求不会发出，在浏览器 Network 面板中也不会有请求数据，请求数据直接通过 mockjs 返回。

或者，也可返回不固定随机数据

```javascript
// mock.json中利用mock语法和占位符@创建随机数据
{
  "code": 0,
  "data": {
    "menu|1-9": [
      {
        "uid": "@id",
        "name": "@ctitle(2,10)",
        "desc": "@cparagraph(1,9)",
      }
    ]
  }
}
```

或者，也可使用函数与 Mock.Random 方法生成自定义的 json 数据，返回给 Mock.mock()方法。

[更多配置信息](https://github.com/nuysoft/Mock/wiki)

<a name="54ede5d9"></a>

## 引入 element-ui

1. install

```bash
npm i element-ui -S
```

2. import

⚪ 整体引入，引入同时可对 element-ui 进行配置

```javascript
// main.js中引入js和样式
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
// 对element-ui 进行配置，目前仅支持 size 字段，用于改变组件的默认尺寸
Vue.use(Element, { size: "small" })
// 也可不配置，直接使用
Vue.use(ElementUI)
```

⚪ 部分引入

```bash
# 安装babel-plugin-component
npm install babel-plugin-component -D
# 实现路由懒加载
npm install @babel/plugin-syntax-dynamic-import -S
```

更改 babel.config.js 配置

```javascript
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "mint-ui",
        style: true,
      },
      "syntax-dynamic-import",
    ],
  ],
}
```

引入指定组件及样式

```javascript
// main.js
import { Button } from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
// element-ui全局配置
Vue.prototype.$ELEMENT = { size: "small" }
Vue.use(Button)
```

快速更改样式

创建自定义 scss 文件，引入默认 scss 样式，并按需更改 scss 变量,覆盖 element-ui/packages/theme-chalk/src/common/var.scss 的默认值,import 和变
量顺序不能更改，然后 main.js 中引入该文件即可

```javascript
// @/style/element-variables.scss

$--color-primary: rgb(255, 64, 64);
/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import "element-ui/packages/theme-chalk/src/index";
```

main.js 引入

```javascript
// import "element-ui/lib/theme-chalk/index.css";
import "@/style/element-variables.scss"
```

<a name="96a5c28b"></a>

## 配置反向代理跨域

利用 vue.config.js 的 devServer 字段中 proxy 进行反向代理

```javascript
proxy: {
  // 此处"/api"为经axios合并后的请求完整地址，故此时的baseURL没有www...等
  "/api": {
    target: "http://127.0.0.1:8090",
    changeOrigin: true,
    ws: true,
    secure: false,
    pathRewrite: {
      "^/api": ""
    }
  }
}
```

所有以"/api"开头的请求都会转发到 target 下，需要更改 axios 请求配置配合生效。因为 axios 配置常会设置 baseURL，在页面中发出请求后自动拼接。例
如，VUE_APP_BASE_API = 'www.dev-test:8080', 请求地址为"/list"，会被自动拼接为"www.dev-test:8080/list", 这会导致请求无法被替换为预期 target，
因而应将 axios 开发环境下的 baseURL 设为空，合并后的请求地址即为"/api/list"，能被 proxy 设置匹配到，从而进行替换重写。

示例：

```javascript
// .env.development.js
VUE_APP_BASE_API = '/api'
// vue页面请求
$axios.get("/list") // 实际请求地址为 /api/list
// vue.config.js
"/api": { //  匹配到 /api/list
  target: "http://127.0.0.1:8090", // 转发目标地址
  changeOrigin: true,
  ws: true,
  secure: false,
  pathRewrite: {
    "^/api": "" // 路径重写 /api/list --> /list
    // 最终实际转发请求地址为 "http://127.0.0.1:8090/list"
  }
}
```

<a name="xNy9A"></a>

# 文档
