设置/修改本地git账户用户名、邮箱

```
git config --global user.name '你的用户名'
git config --global user.email '你的邮箱'
```

查看本地git账户用户名、邮箱

```
git config user.name
git config user.email
```

生成 sshkey: 按照提示完成三次回车，即可生成 ssh key。

`ssh-keygen -t rsa -C "备注信息" `

查看sshkey:

`cat ~/.ssh/id_rsa.pub`