### ENTRYPOINT和CMD
使用方法相同

ENTRYPOINT ["executable", "param1", "param2"]  ENTRYPOINT command param1 param2

CMD ["executable","param1","param2"]  CMD command param1 param2(用这种的话，会在命令前加/bin/sh -c，用数组就不会出现，所以推荐用数组的形式)

多个CMD只会有最后一个起效。

docker run 最后带参数的话，会完全覆盖CMD中内容，包括command和后面的选项，就是说只要传参了，CMD就等于不存在了。

ENTRYPOINT不会被覆盖掉，也就是说，当有ENTRYPOINT时，run容器后的参数都会被传到这里的command后。

如果两个共存，那么CMD的指令会作为参数传到ENTRYPOINT中去，不管在dockerfile中CMD和ENTRYPOINT的书写顺序。

如果Dockerfile指定的基础镜像中是ENTRYPOINT指定的启动命令，则该Dockerfile中的CMD依然是为基础镜像中的ENTRYPOINT设置默认参数

https://blog.csdn.net/liukuan73/article/details/60880137

### VOLUME
用来作数据共享，包括容器间共享、宿主机和容器文件共享。

docker run -v 宿主机目录:容器目录 

docker run --name test -it -v /home/xqh/myimage:/data ubuntu /bin/bash
(路径要使用absolute path，$PWD代表pwd)

在容器上设置一个挂载点/data，并和主机目录关联，两个目录都指向同一主机目录，在主机上的操作就会同步到容器中。

docker run --name test1 -it -v /data ubuntu /bin/bash，在容器中设置一个挂载点，主机上的目录自动设定，其目的不是让在主机上修改，而是让多个容器共享。docker inspect可以看到
<pre>
"Mounts": [
        {
            "Name": "0ab0aaf0d6ef391cb68b72bd8c43216a8f8ae9205f0ae941ef16ebe32dc9fc01",
            "Source": "/var/lib/docker/volumes/0ab0aaf0d6ef391cb68b72bd8c43216a8f8ae9205f0ae941ef16ebe32dc9fc01/_data",
            "Destination": "/data",
            "Driver": "local",
            "Mode": "",
            "RW": true
        }
    ],
</pre>

在dockerfile中，不能指定主机目录，自动生成
<pre>
#test
FROM ubuntu
MAINTAINER hello1
VOLUME ["/data1","/data2"]
</pre>
指定两个挂载点
<pre>
"Mounts": [
        {
            "Name": "d411f6b8f17f4418629d4e5a1ab69679dee369b39e13bb68bed77aa4a0d12d21",
            "Source": "/var/lib/docker/volumes/d411f6b8f17f4418629d4e5a1ab69679dee369b39e13bb68bed77aa4a0d12d21/_data",
            "Destination": "/data1",
            "Driver": "local",
            "Mode": "",
            "RW": true
        },
        {
            "Name": "6d3badcf47c4ac5955deda6f6ae56f4aaf1037a871275f46220c14ebd762fc36",
            "Source": "/var/lib/docker/volumes/6d3badcf47c4ac5955deda6f6ae56f4aaf1037a871275f46220c14ebd762fc36/_data",
            "Destination": "/data2",
            "Driver": "local",
            "Mode": "",
            "RW": true
        }
    ],
</pre>
