### void

void后面跟一个表达式，void操作符会立即执行后面的表达式，并且统一返回undefined

<pre>
typeof void 0 //得到"undefined"
console.log(void 0) //输出undefined
</pre>

## why
undefined在js中不是保留字，只是个标识符，所以可以进行赋值修改
<pre>
function joke() {
    var undefined = "hello world";
    console.log(undefined); //会输出"hello world"
}
console.log(undefined); //输出undefined
</pre>
所以直接使用undefined可能并不稳妥，而使用void操作符可以保证获取到undefined
<pre>
_.isUndefined = function(obj) {
    return obj === void 0;
}
</pre>
void除了undefined，还可以填充href。对于超链接href，没有url时，如果不写值，那么会刷新整个页面，所以使用
href="javascript:void(0)"来确保点击它会执行void(0)


IIFE (Imdiately Invoked Function Expression)

函数声明变成函数表达式

(function(){})()

!function(){}()

void function(){}()

