### BFC触发方式
float

position:absolute

display:inline-block

overflow:hidden

### em
相对于该元素font-size

1em = 1 * 该元素的font-size

### 溢出容器打点显示

单行文本： text-overflow: ellipsis

多行文本： 不打点 只截断 height和line-height

### float

### baseline
[链接](https://zhuanlan.zhihu.com/p/30759026)

小写字母x的下边缘

### vertical-align
垂直对齐方式
 
默认baseline，元素基线和父元素的基线对齐。

元素基线位置：
inline-level/element(内联级元素)，display不同时
* inline：元素baseline就是里面字母x的下边缘，没有字母可以想象一个
* inline-block，元素盒子没内容，baseline就是盒子的margin-bottom边界，没有mb的话就是盒子的下边界
* inline-block，元素盒子有内容，且overflow属性为visible(默认)，那么盒子的baseline是内部内容的最后一个内容元素的baseline
* inline-block，盒子有内容，且overflow属性为非visible(例hidden)，那么盒子的baseline是盒子的margin-bottom边界。和上面第二种情况一样。

父元素基线位置：

有子元素且有内容时，父元素基线位置是 子元素在默认位置时(可以理解为父元素中只有一个子元素)他们的基线和父元素顶部距离最大的那个位置，其它同行元素相对于父元素基线对齐。

属性值：
* baseline。
子元素的baseline和父元素的baseline对齐。所以，常见的image元素距底部有4px边框也由此而来。因为父元素baseline和最后的x字母的下边缘对齐，而字体有默认font-size，而多数浏览器对line-height设置的normal值是font-size*1.1 - 1.2之间的值，就是说x字母不会完全占满它的line-box，会有小间隙。在image的底部和x下边缘对齐时，就产生了间隙。可以通过设置font-size:0或line-height:0来解决。
* middle。
子元素的垂直中点和行盒子的baseline+字母x高度的一半对齐。也就是基线往上1/2个x-height高度。

* text-top。
子元素盒子的顶部和行盒子内容区域的顶部对齐
* text-bottom。
子元素盒子的】底部和行盒子内容区域的底部对齐
* top bottom
基本上和上面的没有差别。
* sub。
降低子元素盒子的基线到父元素盒子下标内容的基线位置，相对于正常基线再往下。
* sup。
同理。
* <percent>
百分比是根据自身的line-height来计算的。表示相对于自身的baseline升高或降低元素一定距离。0%就是baseline，为正就是往上提元素。
* 具体像素。

