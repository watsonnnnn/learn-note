### MutationObserver 变动观察者

监听DOM变化，触发回调。IE 11+ 有效

<pre>
observer = new MutationObserver(callback)

callback: function(mutationRecords,observer){
// 参数1 发生变动的所有记录 参数2 观察者本身

它等待所有脚本任务DOM操作完成后，才会运行，即采用异步方式。
它把 DOM 变动记录封装成一个数组进行处理，而不是一条条地个别处理 DOM 变动。
它既可以观察发生在 DOM 的所有类型变动，也可以观察某一类变动。
}
</pre>

observe(selector:HtmlElement,option:object)
开始监听。

option为指定观察的变动类型，要观察哪种变动，就设置那种为true
<pre>
options:

childList：子节点的变动。
attributes：属性的变动。
characterData：节点内容或节点文本的变动。
subtree：所有后代节点的变动。
attributeOldValue：类型为布尔值，表示观察attributes变动时，是否需要记录变动前的属性值。
characterDataOldValue：类型为布尔值，表示观察characterData变动时，是否需要记录变动前的值。
attributeFilter：类型为数组，表示需要观察的特定属性（比如['class','src']）。
</pre>

disconnect()
停止观察。调用后，DOM发生变动不会触发观察者

takeRecords()
清楚变动记录，不再处理未处理的变动。返回变动记录的数组。清空观察者对象的记录队列,并返回里面的内容
