### viewport(视口)
不管网页原始分辨率尺寸多大，都会将其缩小显示在手机浏览器上，尽可能完整显示网站。

visual viewport：上面的缩小，（猜测）是按照这个可视视口进行缩小的。

layout viewport：按照不同手机不同系统，布局视口都可能有所不同。

ideal viewport：理想视口，理想的布局视口，一般就是设备大小。

### BFC触发方式
float

position:absolute

display:inline-block

overflow:hidden

### em
相对于该元素父元素的font-size // wrong !!!!

1em = 1 * 父元素的font-size // wrong !!!!

https://www.zhihu.com/question/273415013/answer/368232426

https://zhuanlan.zhihu.com/p/30413803

非font-size的其它属性使用em为单位，相对于当前元素的font-size值

font-size属性使用em，相对于父元素的font-size。子元素font-size为2em，父元素font-size为16px，那么子元素的font-size实际是2*16，这种情况下其它的非fontsize依然遵循前面的规则。

### 溢出容器打点显示

单行文本： text-overflow: ellipsis

多行文本： 不打点 只截断 height和line-height

### float

### baseline
[链接](https://zhuanlan.zhihu.com/p/30759026)

小写字母x的下边缘

### inline-box的高度由自身的line-height或是继承来的line-height决定。默认自身的line-height是自身font-size的1.1-1.2倍。

line-height数值带单位时，em %，父元素行高为150%或1.5em时，子元素的行高会根据父元素字体大小计算出(父fontsize*lineheight,150%*16px)然后再让子元素继承。

如果不带单位，此时叫缩放因子。子元素继承这个系数，然后和自身元素的font-size动态计算出30*1.5。

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

属性值(主流浏览器)：
* baseline。
子元素的baseline和父元素的baseline对齐。所以，常见的image元素距底部有4px边框也由此而来。因为父元素baseline和最后的x字母的下边缘对齐，而字体有默认font-size，而多数浏览器对line-height设置的normal值是font-size*1.1 - 1.2之间的值，就是说x字母不会完全占满它的line-box，会有小间隙。在image的底部和x下边缘对齐时，就产生了间隙。可以通过设置font-size:0或line-height:0来解决。
* middle。
子元素的垂直中点和行盒子的baseline+字母x高度的一半对齐。也就是基线往上1/2个x-height高度的位置。

多行文本垂直居中，可以在标签里再加一个元素，两个设置vertical-align:middle

* text-top。
子元素盒子的顶部(如果有继承的line-height，盒子顶部就是算上line-height的顶部)和行盒子内容区域(content area，也就是说即使有继承的line-height，也只会按inline-box里面的content顶部来算)的顶部对齐
* text-bottom。
子元素盒子的底部和行盒子内容区域的底部对齐
* top bottom

子元素的顶部和当前line box的顶部对齐，这个元素不再决定行元素的基线，两边的inline boxes按照它们自己的规则决定对齐方式。(ps:line-height是可以继承的，即使是匿名inline-box，也是有继承来的或是默认的line-height，所以如果父元素是有line-height的话，里面的子元素在对齐方式变化时，都要考虑到line-height)
* sub。
降低子元素盒子的基线到父元素盒子下标内容的基线位置，相对于正常基线再往下。
* sup。
同理。
* <percent>
百分比是根据自身的line-height来计算的。表示相对于自身的baseline升高或降低元素一定距离。0%就是baseline，为正就是往上提元素。
对于图片这种非替换元素，它的line-height就是默认继承来的值，即使是显式设置了，也不会对该元素的大小有影响。
* 具体像素。

### 使用auto属性

## 非替换元素

margin width 有auto

margin指定显示值，width设置为auto，宽度会自动确定为某个值，达到父元素的内容宽度。

margin width都指定显示值的话，水平属性过分受限，重置右外边距。margin-right会自动确定某个值，从而让盒子达到最大宽度，margin-left margin-right 和width加起来就是父元素的width。

两个margin都为auto，width指定值，那么左右margin会自动计算，除去width后评分剩下的，也就是元素会居中。

默认情况下 margin为0，width为auto。如果margin和width都为auto，就和默认情况一样。

margin padding border width，加起来一共7个属性，总和等于父元素width，包括全部显示指定求和不够marginright补全的情况。

## 替换元素 replace-element 浏览器根据标签元素和属性来决定显示的内容。

如图片、表单元素之类的，标签不代表真正内容。width为auto时，宽度为内容宽度。width指定值时，height会按比例进行变化。

margin-top margin-bottom设置为auto的话，会自动重置为0

垂直方向margin穿透

父子元素发生margin穿透时，取的是同一外边距的最大值。

块元素height为auto时，且只有块级子元素时，默认高度是内部最高子元素的上外边框界到最低的下边框界，所以，子元素的外边距会超出包含这些子元素的元素；但是，如果父元素是有border或者padding的话，子元素的外边距会被纳入父元素高度的计算。

### transform 属性具有使元素脱离文档流的作用，因为这个属性的效果不会影响到文档里的其它元素


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

### 关于继承

不可继承的：display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi。
所有元素可继承：visibility和cursor。
内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。
终端块状元素可继承：text-indent和text-align。
列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
表格元素可继承：border-collapse。

!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

!important不具有继承性，所以即使在父元素加上它，子元素也还是按照自身的样式优先级来

### getComputedStyle
在window对象中

