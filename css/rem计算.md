### rem

如果你没有在根元素指定参照值，那浏览器默认就是 1rem 为 16px，如果你指定了值假设为 20px，那 1rem 就为 20px。

html｛font-size: 87.5%;｝（也就是 14px） 14/16=87.5%

现在浏览器起步设置font-size 12px 也就是75%。

js计算rem
<pre>
void function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window)
</pre>

(http://www.jianshu.com/p/b00cd3506782)

简单计算rem  clientWidth*dpr/10

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
