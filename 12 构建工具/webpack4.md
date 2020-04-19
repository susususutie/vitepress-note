```js
// webpack.config.js

module.exports = {
  mode: 'production',
  entry: {
    main: './index.js'
  }
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
```


### mode

mode分为development（开发模式）和production（生产模式），webpack会根据模式不同做相应优化

### entry

webpack打包、构建依赖的一个或多个起点。多入口的使用场景有：

```js
// 单页面应用中，分离应用程序(app)和第三方库(vendor)入口
entry: {
  app: './src/app.js',
  vendors: './src/vendors.js'
}
// 在多页面应用中，为每个页面（即每个HTML文档）创建独立的资源
// 一个HTML文档一般只用一个入口
entry: {
  pageOne: './src/pageOne/index.js',
  pageTwo: './src/pageTwo/index.js',
  pageThree: './src/pageThree/index.js'
}

```

### output

只能指定一个输出配置

```js
  output: {
    filename: 'bundle.js',
    path: '/dist'//输出文件的绝对路径
  }
```

当有多个入口时，可以使用[占位符](#zhanweifu)使各个文件拥有不同名称

```js
output: {
  filename: '[name].js',
  path: __dirname + '/dist'//值当前文件所在绝对路径的dist文件夹
}
```

### loader

webpack只能识别、处理JS文件，loader可以在import时对文件进行预处理，使之能被webpack打包，从而构建相关依赖。

```js
// 首先安装对应loader
npm install --save-dev css-loader
npm install --save-dev ts-loader
// 然后在配置中指定何种文件用何种loader
module: {
  rules: [
    { test: /\.css$/, use: 'css-loader' },
    { test: /\.ts$/, use: 'ts-loader' }
  ]
}
```

也可指定一种文件使用多种loader

```js
// use为一个数组，按照从后往前的顺序使用loader
rules: [
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }
    ]
  }
]
```

### plugins

```js
plugins: [
  new webpack.optimize.UglifyJsPlugin(),
  new HtmlWebpackPlugin({template: './src/index.html'})
]
```


### <span id="zhanweifu"/>占位符</span>

```js

```

# webpack4

#### 介绍
慕课网webpack4学习笔记

#### webpack的安装

1. node 版本尽可能高
2. 创建项目文件夹
3. npm init / npm init -y ---> package.json
4. package.json 添加 private: true，将项目设为私有项目，同时删除main
5. 在项目文件夹中安装webpack: npm install webpack webpack-cli --savd-dev
6. npx webpack -v 验证是否正确安装
7. 创建.gitignore文件 添加一行/node_modules/让git忽略该文件夹