import{_ as t,o as a,c as d,b as e,d as n}from"./app.1cf6bae8.js";const h=JSON.parse('{"title":"NVM","description":"","frontmatter":{},"headers":[],"relativePath":"fed/nvm.md","lastUpdated":1679383956000}'),o={name:"fed/nvm.md"},s=e("h1",{id:"nvm",tabindex:"-1"},[n("NVM "),e("a",{class:"header-anchor",href:"#nvm","aria-hidden":"true"},"#")],-1),r=e("p",null,[n("注意: nvm默认使用default版本的node, 这里的default只是一个别名. 当node发布新版本后, 当前安装的node版本不再是最新的, default别名指向的最新版未安装, 导致全局环境下无法使用node, 必须手动设置"),e("code",null,"nvm use <version>"),n(" 设置node版本后, 才可在当前文件夹下使用.此时应该手动设置nvm别名"),e("code",null,"nvm alias default <version>"),n(", 使得default别名指向本地已安装的node版本, 这样下一次打开终端, nvm会默认加载default版本, 即可在全局环境使用默认版本了.")],-1),c=[s,r];function l(i,m,_,f,u,v){return a(),d("div",null,c)}const x=t(o,[["render",l]]);export{h as __pageData,x as default};
