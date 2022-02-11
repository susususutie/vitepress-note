# vue-router

## install 安装

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

## 起步

```html
<!-- 使用 router-link 组件来导航. -->
<!-- 通过传入 `to` 属性指定链接. -->
<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
<router-link to="/foo">Go to Foo</router-link>
<!-- 路由匹配到的组件将渲染在 `router-view` -->
<router-view></router-view>
```

定义路由

```javascript
const routes = [
  { path: '/foo', component: Foo }
]
```

在任何组件内通过 this.$$router 访问路由器，也可以通过 this.$$route 访问当前组件的路由

## 动态路由匹配

```javascript
// 冒号后即为动态参数，该参数会被传递给相应组件
// 在组件中通过 this.$route.params 访问参数
const routes = [
  { path: '/foo/:id', component: Foo }
]
```

## 


## 

