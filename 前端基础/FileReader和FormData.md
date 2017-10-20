### FileReader
Data URL协议：提供一种将图片嵌入到HTML中的方法。图片转换成base64编码的字符串存在，存储在URL中。

Base64是一种任意二进制到文本字符串的编码方法，常用于在URL、Cookie、网页中传输少量二进制数据。

用记事本打开exe、jpg、pdf这些文件时，我们都会看到一大堆乱码，因为二进制文件包含很多无法显示和打印的字符，所以，如果要让记事本这样的文本处理软件能处理二进制数据，就需要一个二进制到字符串的转换方法。Base64是一种最常见的二进制编码方法。

![filereader](../images/filereader.jpg)

（http://www.zhangxinxu.com/wordpress/2013/10/understand-domstring-document-formdata-blob-file-arraybuffer/）

### FormData对象
使用formdata对象，当new FormData()不传参数时，是一个空的form，然后使用append方法进行添加。最后，在异步提交时，contenttype格式就是文件表单提交时的multipart/form-data;boundary=----boundary..。 所以对于有文件的表单异步提交，不需要自己去设置请求的contenttype。
