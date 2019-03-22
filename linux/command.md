### commands

* 查看系统内核版本 
```
uname -a

cat /proc/version
```
* 查看系统发行版信息
```
lsb_release -a  //LSB(linux standard base)
cat /etc/redhat-release // 只适合Redhat系的Linux
cat /etc/issue //适用于所有的Linux发行版
```

### 软件安装

https://blog.51cto.com/9738003/2121459

configure(生成makefile) make(执行makefile) make install(安装)