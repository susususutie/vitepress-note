import{_ as e,c as a,o as s,a as l}from"./app.b8f1973a.js";const y=JSON.parse('{"title":"安装多版本Chrome浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"fed/install-multi-version-chrome.md","lastUpdated":1680965877000}'),o={name:"fed/install-multi-version-chrome.md"},n=l(`<h1 id="安装多版本chrome浏览器" tabindex="-1">安装多版本Chrome浏览器 <a class="header-anchor" href="#安装多版本chrome浏览器" aria-hidden="true">#</a></h1><p>本文旨在介绍如何在Windows电脑上同时安装多个Chrome浏览器.</p><h2 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-hidden="true">#</a></h2><ol start="0"><li><p>前提: 已下载chrome指定版本的<strong>离线安装包</strong>, 本文以chrome71版本为例.</p></li><li><p>新建一个空文件夹, 以下以<code>chrome71</code>为例,</p></li><li><p>解压<code>.exe</code>的安装包, 将得到的<code>Chrome-bin</code>文件夹放至<code>chrome71/APP/</code>, 当前文件结构如下:</p></li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chrome71</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">APP</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Chrome-bin</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>在<code>https://portableapps.com/apps/internet/google_chrome_portable</code>下载Chrome启动器, 解压提取其中的<code>GoogleChromePortable.exe</code>文件, 移动至<code>chrome71</code>, 当前文件结构如下:</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chrome71</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">APP</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Chrome-bin</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GoogleChromePortable.exe</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>双击<code>GoogleChromePortable.exe</code>启动71版本的chrome, 此时会自动在<code>chrome71</code>文件夹下生成<code>Data</code>文件夹, 用于存放chrome相关数据, 以此即可实现多版本浏览器数据隔离, 此时文件结构如下:</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chrome71</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">APP</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Chrome-bin</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GoogleChromePortable.exe</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Data</span></span>
<span class="line"></span></code></pre></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-hidden="true">#</a></h2><ol><li>下载的所有安装包资源, 都需要验证数字签名, 避免被植入恶意代码.</li><li>以下列出的chrome离线安装包下载地址仅供参考, 本文不对其完整性和安全性负责.</li></ol><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/weixin_43882265/article/details/125928571" target="_blank" rel="noreferrer">同一操作系统中安装多个不同版本谷歌Chrome浏览器</a></li><li><a href="https://portableapps.com/apps/internet/google_chrome_portable" target="_blank" rel="noreferrer">下载Chrome启动器</a></li><li><a href="https://liubing.me/article/other/chrome-multiple-versions.html" target="_blank" rel="noreferrer">手动制作 Chrome 浏览器多版本共存，可快速切换各个版本</a></li><li><a href="https://www.cnblogs.com/xiangyuecn/p/10583788.html" target="_blank" rel="noreferrer">自己制作Chrome便携版实现多版本共存</a></li><li><a href="https://www.chromedownloads.net/" target="_blank" rel="noreferrer">Chrome浏览器最新离线版下载</a></li><li><a href="https://www.jianshu.com/p/ce848fd3674e" target="_blank" rel="noreferrer">同一操作系统安装多个不同版本谷歌chrome浏览器</a></li><li><a href="https://www.slimjet.com/chrome/google-chrome-old-version.php" target="_blank" rel="noreferrer">Google Chrome Older Versions Download (Windows, Linux &amp; Mac)</a></li></ul>`,13),r=[n];function t(p,c,i,h,d,C){return s(),a("div",null,r)}const _=e(o,[["render",t]]);export{y as __pageData,_ as default};