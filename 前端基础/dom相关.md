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