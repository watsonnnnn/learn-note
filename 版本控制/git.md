https://segmentfault.com/q/1010000008914409/a-1020000008916703

https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-Git-%E5%AF%B9%E8%B1%A1

git snapshot
每次提交对每个文件内容和文件header进行一次sha1，假设d670460b4b4aece5915caf5c68d12f560a9fe3e4，放到.git/objects下，就是d6/70460b4b4aece5915caf5c68d12f560a9fe3e4，内容处理压缩成blob后放入新文件中，也就是snapshot(当时文件内容)。相同内容的sha1相同，就不会去重新生成，复用之前的，类似immutable的结构共享。