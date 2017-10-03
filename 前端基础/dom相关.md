### offset
先贡献链接，写的挺好的
http://www.cnblogs.com/jscode/archive/2012/09/03/2669299.html
offset是相对的意思

offsetwidth在不同浏览器中盒模型解释是不一样的，所以会有不同的值，以chrome来说是border+padding+width

offsetParent是相对父节点，寻找时有两条规则

1、如果当前元素的父级元素没有进行CSS定位（position为absolute或relative），offsetParent为body。

2、如果当前元素的父级元素中有CSS定位（position为absolute或relative），offsetParent取最近的那个父级元素。

offsetLeft就是返回对象元素边界的左上角顶点相对于offsetParent的左上角顶点的水平偏移量，左偏移距离。
既然是偏移，就应该是从相对父元素的pandding开始算，也就是父padding+本身margin


### compatMode
compatMode属性返回浏览器处理文档的模式，可能的值为BackCompat（向后兼容模式，怪异模式）和CSS1Compat（严格模式）。

一般来说，如果网页代码的第一行设置了明确的DOCTYPE（比如<!doctype html>），document.compatMode的值都为CSS1Compat

当document.compatMode等于BackCompat时，浏览器客户区宽度是document.body.clientWidth；
当document.compatMode等于CSS1Compat时，浏览器客户区宽度是document.documentElement.clientWidth。

<pre>
if (document.compatMode == "BackCompat") {
cWidth = document.body.clientWidth;
cHeight = document.body.clientHeight;
sWidth = document.body.scrollWidth;
sHeight = document.body.scrollHeight;
sLeft = document.body.scrollLeft;
sTop = document.body.scrollTop;
}
else { //document.compatMode == "CSS1Compat"
cWidth = document.documentElement.clientWidth;
cHeight = document.documentElement.clientHeight;
sWidth = document.documentElement.scrollWidth;
sHeight = document.documentElement.scrollHeight;
sLeft = document.documentElement.scrollLeft == 0 ? document.body.scrollLeft : document.documentElement.scrollLeft;
sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
}
</pre>


