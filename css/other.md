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

### ui伪类和结构化伪类
link visited hover active
e:focus
e:target a标签href指向其它元素时，那个元素就是target，用:target伪类选中那个元素。比如

<pre>
<a href="#abc" >a标签href到#abc</a>
</pre>

对应元素<div id="abc"></div>，规则 div#abc{background:#eee}，用户点击a标签转到元素时生效。就是说 作为target的e的样式。

### 伪元素
e::first-letter 选中e元素的第一个字符
e::first-line 选中文本（一般是段落）第一行

### background-position

元素分成前景层和后景层，前景包括border font color等属性，后景就是background。background-position就是来调整背景位置，一般都是背景图位置。

 background-position: left top, top left, 0 0 是等价的。如果只写一个值，那么第二个就是'center'

background和元素的左上顶点默认是重复的，所以调background-position就是调的背景图的左上顶点在x和y轴上的位置。

当用百分比作单位时，百分比的计算规则和其它元素不一样。

background-position-x: (容器宽-元素宽)*百分比。就是说容器去掉元素的剩下的空白部分为百分比的计算基础。同理y的position就是高度相减计算。

### VSP（厂商前缀）属性
border-image,translate,transition,linear-gradient,radial-gradient(放射性渐变),transform,transform-origin

### linear-gradient
<pre>
背景色渐变
.grad1{
    background:linear-gradient(#e86a43 20%, #fff 50%, #e86a43 80%); 
}
.grad2{
    background:linear-gradient(#64d1dd, #fff 50%, #64d1dd); 
}
</pre>

渐变色默认从center top位置开始。

开始位置和结束位置不指定百分比的话，默认是0%和100%。

如果不用百分比或其他声明式指定位置的话，默认分布就是0 50% 100%。

如果中间指定了百分比，但是没有开头和结尾指定，那么像grad1的情况就是从0到20%用的都是#e86a43，80%到100%都是#e86a43


### font
字体栈指定使用的字体列表。可以被继承。

写字体族font-family时，最后一个写的最好的通用字体，serif,Sans-serif，这种通用字体类。

font-variant: small-caps  // 小写英文字母转大写。

百分比、em、rem设置字体尺寸时，相对的是最近的被设定过字体大小的祖先元素来确定。
