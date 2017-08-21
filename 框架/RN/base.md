### cloneWithRows declaration
<pre>
cloneWithRows(
    dataBlob: Array<any> | {[key: string]: any},
    rowIdentities: ?Array<string>
)
</pre>

### refs
[this.refs和ReactDOM.findDOMNode区别](https://segmentfault.com/q/1010000006198939/a-1020000006201898)
当ref设置到组件上，拿到的是组件实例；设置到dom元素上，拿到的是DOM。现在建议使用ref callback

ReactDOM.findDOMNode，参数是DOM，返回就是该DOM；参数是Component，获取的就是该Component的render中的DOM。参数一般是由ref而来。该方法只在mounted组件中调用，如果你在组件的render()方法中调用React.findDOMNode()就会抛出异常。

（未验证：当使用 ref={child => this._child = child} 时，this.refs是没有该节点的，也就不能使用this.refs取到该节点了，而是用 this._child）

### 事件
touchstart中的e.touch[0].pageY是开始滚动时位置距离顶部的长度
touchmove中的e.touch[0].pageY是滚动中每个点位置距离顶部的长度

滚动过程中的e有一个e.scroller.getValues()