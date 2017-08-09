>p 游1：定义组件时使用的标签名中不能有大写字母，而且如果全局注册的组件，必须在挂载元素实例化之前注册，否则会报do you register component correctly?

>p 游2：组件的标签名一定要写完整，<comp></comp>，要是这种形式，如果只是<comp/>这样的形式，会出现只渲染出第一个组件的情况，因为组件不知道什么时候结束。

>p 游3: slot用来进行内容填充，在组件中定义时用<slot>xxx</slot>这种形式，如果不指定name属性的话，在上面使用的时候，组件里面的内容会替换全部的slo(但是
这种多个slot不带name会报错)；如果是指定的name属性，比如<omponent><span slot="header">xxxx</span></component>，这样的组件里的填充内容只会替换
掉组件定义时指定name的slot，相当于插槽的意思。

>p 游4：vm.$el 元素 vm.$data data数据 vm.$mount vm.$destroy手动挂载销毁 vm.$options 除data外的属性

>p 游5：使用template作模板标签，将标签整个放到挂载元素外面就不会被渲染，放在里面的话，就会直接渲染出template里面的内容。

>p 游6：使用$emit向父组件进行传值，需要先注册一个事件，然后手动出发this.$emit(事件名，参数1，参数2...)