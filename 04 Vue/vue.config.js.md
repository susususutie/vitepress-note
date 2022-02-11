# vue.config.js

vue项目的配置 vue.config.js

示例

```javascript
// vue.config.js
const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  /**
   * # publicPath [String] ('/')
   * ---
   * 该项设置会影响到index.html中引用js、css的路径, 也可根据不同环境设置不同路径：
   * publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/'  : '/'
   * 1. 绝对路径 '/':
   * index.html所在根目录的绝对路径，此时index.html中引用资源路径为："/static/js/app.js", "/static/css/app.css",
   * 1.1 以本地服务器打开(http://localhost:8080),此时index.html可通过绝对路径正确引用资源:css(http://localhost:8080/static/css/app.css),js(http://localhost:8080/static/js/app.js)
   * 1.2 以文件打开(file:///C:/Users/苏铁/Desktop/vshop/dist/index.html),由于此时根路径为c盘,index.html通过绝对路径无法引用资源:js(file:///C:/static/js/app.d130f157.js),css(file:///C:/static/css/app.789e67b7.css)
   * 2.有二级目录的绝对路径引用 '/my-app/'：
   * 2.1 index.html(http://localhost:8080/my-app/#/): js(/my-app/static/js/app.js-->http://localhost:8080/my-app/static/js/app.js)
   * 2.2 index.html(file:///C:/Users/苏铁/Desktop/vshop/dist/index.html): js(/my-app/static/js/app.d130f157.js --> file:///C:/my-app/static/js/app.d130f157.js) css(/my-app/static/css/app.789e67b7.css -->file:///C:/my-app/static/css/app.789e67b7.css)
   *
   * 3. 相对路径 './':
   * index.html所在根目录的相对路径，此时打包HTML引用的是相对于index.html的相对路径: "static/css/app.css" "static/js/app.js"
   * 不管以服务器应式打开还是以文件形式打开都能通过相对路径正确获取资源地址（即与index.html位于同一文件夹的static目录中）
   * 4. 有二级目录的相对路径 '/my-app/'：
   * 4.1 index.html(http://localhost:8080/my-app/): js(my-app/static/js/app.js)
   * 4.2 index.html(file:///C:/Users/苏铁/Desktop/vshop/dist/index.html): js(my-app/static/js/app.d130f157.js -> file:///C:/Users/苏铁/Desktop/vshop/dist/my-app/static/js/app.d130f157.js)
   */
  publicPath: "./",
  /**
   * # outputDir: [String] ('dist')
   * ---
   * 打包目录
   */
  outputDir: "dist",
  /**
   * # assetsDir: [String] ('')
   * ---
   * 打包静态资源相当于outputDir的路径
   */
  assetsDir: "static",
  /**
   * # indexPath: [String] ("index.html")
   * ---
   * 生成的index.html相当于outputDir的路径
   */
  indexPath: "index.html",
  /**
   * # filenameHashing: [Boolean] (true)
   * ---
   * 静态资源名添加hash后缀
   */
  filenameHashing: true,
  /**
   * # pages: [Object](undefined)
   * ---
   * 构建多页面应用时的各页面配置
   * todo
   */
  /**
   * # lintOnSave: [Boolean | 'error'](true)
   * ---
   * 是否在保存时进行eslint校验
   * true --> 将错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
   * 'error' --> 强制将错误输出为编译错误，同时 lint 错误将会导致编译失败。
   * 通过devServer.overlay字段可设置是否在浏览器显示警告和错误
   */
  lintOnSave: true,
  /**
   * # runtimeCompiler:[Boolean](false)
   * ---
   * 是否使用包含运行时编译器的 Vue 构建版本
   */
  runtimeCompiler: false,
  /**
   * # transpileDependencies: [Array<string | RegExp>]([])
   * ---
   * todo
   */
  /**
   * # productionSourceMap: [Boolean](true)
   * ---
   * 是否开启生产环境下的sourcemap
   */
  productionSourceMap: false,
  //  todo 剩余配置项待补充
  /**
   * # chainWebpack: [Function]
   * ---
   * 接收一个ChainableConfig实例，用于对webpack配置进行修改。
   * exp: 配置路径别名
   * config.resolve.alias
   * .set(key, value)
   * exp: 配置webpack优化
   * config.optimization.runtimeChunk('single')
   */
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("views", resolve("src/views"));
    config.optimization.runtimeChunk("single");
  },
  // configureWebpack: {
    // devtool: "source-map"
  // },
  /**
   * # devServer: [Object]
   * ---
   * 配置webpack-dev-server
   */
  devServer: {
    // 指定服务器host，默认为localhost，如果希望服务器外部可访问，则设置为"0.0.0.0"
    host: "0.0.0.0",
    // 端口
    port: 8080,
    // 模块热替换
    hot: true,
    // 在 server 启动后打开浏览器。默认禁用。
    // 或者: open: 'Google Chrome',
    open: true,
    // 是否在浏览器显示警告与错误，与lintOnSave字段对应
    overlay: {
      warning: false,
      error: true
    },
    // disableHostCheck: true,
    // 服务器代理，将请求转发至指定地址，用于跨域，更多：https://github.com/chimurai/http-proxy-middleware#http-proxy-options
    proxy: {
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
  }
};

```

