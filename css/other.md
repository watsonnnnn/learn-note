transform 属性具有使元素脱离文档流的作用，因为这个属性的效果不会影响到文档里的其它元素


### 元素权重
!important infinity
行间样式 1000
id      100
class|属性|伪类 10
标签选择器|伪元素 1
通配符 0

多个选择器作用同一元素时，会将所有选择的权重值相加计算出来，然后权重大的会覆盖小的。

### inline inline-block的元素会自带文本效果
<pre>

<img />
<img />
=========
<img /><img />

设置了img为inline-block，对于前面一种的会有文字间距，也就是空的文本结点，渲染出来的图片直接会有间隔，而后面的不会。
</pre>

### em rem
em 相对单位,相对当前使用对象内文本的字体尺寸，如果当前行内文本字体尺寸未被人为设置，那么就相对于浏览器的默认字体尺寸。

### 清除浮动影响，让父元素包围其中浮动的子元素

浮动清楚的是float对元素自身的影响。比如说前一个元素浮动了，后一个块元素要上去，使用clear来清除使用的这个元素本身被前一个元素浮动所影响的效果。

1.父元素添加overflow:hidden
2.父元素一起浮动,不过要对之后的元素进行clear both
3.父元素中添加元素，clear:both left right，因为父容器要考虑非浮动子元素的位置，而这种子元素肯定出现在浮动元素下方，所以显示出来，父容器就把所有子元素都包括了进去；或者直接给父元素添加clearfix类 ，也就是.container:before after这种
 .container:after{content:'.';display:block;height:0;visibility:hidden;clear:both},这样也可以清楚浮动效果。

### float和position:absolute的元素可以当成是inline-block 

### after before
伪类元素，是添加到选择器选中的元素里的内容前或后，也就是相当于元素的子，而不是在元素标签外。

