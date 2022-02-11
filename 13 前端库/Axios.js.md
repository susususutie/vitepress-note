# Axios.js

在vue项目中的使用

## 配置示例

1. src/api/axios.js和src/api/index.js 两个文件，前者中封装好各种请求方法后导出至后者，后者根据实际api配置与项目相关的具体请求，并导出供各组件使用。

### ⚪ axios.js

```javascript
import axios from "axios";
import Qs from "qs";

/**
 * 1. 创建一个axios实例
 * ---
 * 配置参数。。。
 */
const $axios = axios.create({
  // 1. `url` 是用于请求的服务器 URL, 唯一必填项
  // url: "/user",

  // 2. `method` 是创建请求时使用的方法，默认get
  // method: "get",

  // 3. 基础url，会在请求url中自动添加前置链接
  baseURL: process.env.VUE_APP_BASE_API,

  // 4. `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  // transformRequest: [
  //   function (data, headers) {
  //     // 对 data 进行任意转换处理
  //     return data;
  //   }
  // ],

  // 5. `transformResponse` 在传递给 then/catch 前修改响应数据
  // transformResponse: [
  //   function (data) {
  //     // 对 data 进行任意转换处理
  //     return data;
  //   }
  // ],

  // 6. `headers` 设置请求头
  // headers: { "X-Requested-With": "XMLHttpRequest" },

  // 7. `params` 请求参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  // params: {
  //   ID: 12345
  // },

  // 8. `paramsSerializer` 对参数进行序列化
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer: function(params) {
  //   return Qs.stringify(params, { arrayFormat: "brackets" });
  // },

  // 9. `data` 'PUT', 'POST', 和 'PATCH'的请求数据
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  // data: {
  //   firstName: "Fred"
  // },

  // 10. `timeout` 指定请求超时的毫秒数(0 表示无超时时间)，超时请求会被中断
  timeout: 20000,

  // 11. 表示跨域请求时是否需要使用凭证，默认false
  // withCredentials: false,

  // 12. 自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  // adapter: function(config) {
  //
  // },

  // 13. 使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  // auth: {
  //   username: "janedoe",
  //   password: "s00pers3cret"
  // },

  // 14. 服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream', 默认json
  // responseType: "json",

  // 15. 请求编码 默认utf-8
  responseEncoding: "utf8"

  // 16. `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  // xsrfCookieName: "XSRF-TOKEN", // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  // xsrfHeaderName: "X-XSRF-TOKEN", // default

  // `onUploadProgress` 允许为上传处理进度事件
  // onUploadProgress: function(progressEvent) {
  //   // Do whatever you want with the native progress event
  // },

  // `onDownloadProgress` 允许为下载处理进度事件
  // onDownloadProgress: function(progressEvent) {
  //   // 对原生进度事件的处理
  // },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  // maxContentLength: 2000,

  // 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则被 rejecte
  // validateStatus: function(status) {
  //   return status >= 200 && status < 300; // default
  // },

  // ! 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  // maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  // socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  // httpAgent: new http.Agent({ keepAlive: true }),
  // httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  // proxy: {
  //   host: "127.0.0.1",
  //   port: 9000,
  //   auth: {
  //     username: "mikeymike",
  //     password: "rapunz3l"
  //   }
  // },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  // cancelToken: new CancelToken(function(cancel) {})
});

/**
 * 2. 为实例创建请求拦截器
 * ---
 */
$axios.interceptors.request.use(
  config => {
    console.log("interceptors --> request config: ", config);
    return config;
  },
  error => {
    console.log("interceptors --> request err");
    return Promise.reject(error);
  }
);

/**
 * 3. 为实例创建相应拦截器
 * ---
 */
$axios.interceptors.response.use(
  response => {
    //
    return Promise.resolve(response);
  },
  error => {
    console.log("interceptors --> response err");
    return Promise.reject(error);
  }
);

/**
 * 4. 导出封装后的方法
 * ---
 */
export default {
  /**
   * ## get
   * @param {String} api 请求api
   * @param {String} params 请求参数
   */
  get(api, params) {
    return $axios({
      method: "get",
      url: api,
      params
    });
  },
  post(api, data) {
    return $axios({
      method: "post",
      url: api,
      data: Qs.stringify(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
  }
  // delete() 等其他请求方法...
};

```

### ⚪ index.js

```javascript
import $axios from "./axios";
// axios 集合了多个封装好的方法 {get, post, ...}

// 使用时只需在vue文件中引入指定方法即可
// import { getLists } from "@/api";

export function getLists(param) {
  const api = "/list";
  return $axios.get(api, param);
}
// ...

```

