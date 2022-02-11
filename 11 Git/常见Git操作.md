# 常见Git操作

教程地址 [https://www.yiibai.com/git](https://www.yiibai.com/git)

### 生成 ssh key

按照提示完成三次回车，即可生成 ssh key。

```javascript
ssh-keygen -t rsa -C "备注信息"
```

### 查看ssh key

```javascript
cat ~/.ssh/id_rsa.pub
```

### 设置/修改本地git账户

git账户密码会影响到推送时显示的推送者

1. 全局设置

```git
git config --global user.name '你的用户名'
git config --global user.email '你的邮箱'
```

2. 项目设置，只更改该项目内的git账户

```git
git config user.name 'XXXX'
git config user.email 'XXXX'
```

### 查看本地git账户

```git
git config user.name
git config user.email
```

### 查看远端库

```git
git remote
```

### 查看远端库详细信息

```git
git remote -v
```

### 添加远程仓库
给该远程仓库指定一个简写名以及仓库地址

```git
git remote add shortname url
```

