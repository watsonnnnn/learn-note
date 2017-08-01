### markdown简单语法

首先，markdown是兼容html的，所以html的标签在这里是都可以用的。
<hr/>

### 标题
用1到6个#，对应标题1到6阶，也可以用=和-

#### 标题标题(### 标题标题)

小标题(======)
======

<hr/>

### 段落
用>打头
> 这里开始是段落段落这里开始是段落段落这里开始是段落段落这里开始是段落段落这里开始是段落段落这里开始是段落段落这里开始是段落段落这里开始是段落段落这里开始是段落段落这里开始是段落段落。
<hr/>

### 列表
<pre>无序列表使用*,-,+这三个都可以，* xxx,- xxx, + xxx</pre>
* red 这里是列表red 这里是列表red 这里是列表red 这里是列表red 这里是列表red 这里是列表red 这里是列表red 这里是列表red 这里是列表red 这里是列表

* green 这里是列表green 这里是列表green 这里是列表green 这里是列表green 这里是列表green 这里是列表green 这里是列表green 这里是列表green 这里是列表
* blue
<hr/>

### 分隔线
用三个以上的星号、减号、底线来做分隔线
<pre>* * *, ***, ******, ---, ------------</pre>
***

### 链接

行内：要建立一个行内式的链接，只要在方块括号后面紧接着圆括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如：

This is \[an example](http://example.com/ "Title") inline link. 

\[This link](http://example.net/) has no title attribute.

***
### 强调
Markdown 使用星号（*）和底线（_）作为标记强调字词的符号，被 * 或 _ 包围的字词会被转成用 \<em> 标签包围，用两个 * 或 _ 包起来的话，则会被转成 \<strong>，例如：
\*single asterisks\*

*single asterisks*

### 图片
很明显地，要在纯文字应用中设计一个「自然」的语法来插入图片是有一定难度的。

Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： 行内式和参考式。

行内式的图片语法看起来像是：

\!\[Alt text](/path/to/img.jpg)

\!\[Alt text](/path/to/img.jpg "Optional title")

详细叙述如下：

* 一个惊叹号 !
* 接着一个方括号，里面放上图片的替代文字
* 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的 'title' 文字。

参考式的图片语法则长得像这样：

!\[Alt text]\[id]
「id」是图片参考的名称，图片参考的定义方式则和连结参考一样：

[id]: url/to/image  "Optional title attribute"
到目前为止， Markdown 还没有办法指定图片的宽高，如果你需要的话，你可以使用普通的 <img> 标签。
***
### 其它

###自动链接

Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用方括号包起来,  Markdown 就会自动把它转成链接。一般网址的链接文字就和链接地址一样，例如：

\<http://example.com/> 

<http://example.com/>

\<address@example.com>

<address@example.com>
***
### todolist
<pre>
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


- [x] 支持 @提到某人、#引用、[链接]()、**格式化** 和 <del>标签</del> 等语法
- [x] 需要使用列表语法来激活（无序或有序列表均可）
- [x] 这是一个已完成项目
- [ ] 这是一个未完成项目
</pre>
效果
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


- [x] 支持 @提到某人、#引用、[链接]()、**格式化** 和 <del>标签</del> 等语法
- [x] 需要使用列表语法来激活（无序或有序列表均可）
- [x] 这是一个已完成项目
- [ ] 这是一个未完成项目




