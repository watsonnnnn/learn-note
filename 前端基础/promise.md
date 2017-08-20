### promise
<pre>
function IPromise(fn) {
  let state = "pending";
  let value = null;
  let deferreds = [];
  this.then = function(onFulfilled) {

    //括号里的直接定义函数，其实相当于在上面的then函数中进行的定义然后传到构造函数里。所以，这个函数中的标
    识符查找如果找不到，要到它的父作用域中找，也就是创建这个函数的作用域中，也就是then函数，而then函数中也
    找不到的话，继续上一级，就到了promise函数中，所以进行了then调用后，也就是在往调用then的promise中传参
    promise1.then(xxx)，在初次promise1中执行完后，调用then，就是往promise1中的变量进行赋值，也就是deferreds数组。
    return new IPromise(function(resolve) {
      handle({
        onFulfilled: onFulfilled || null,
        resolve: resolve
      });
    });
  }
  function handle(deferred) {
    if(state === "pending") {
      deferreds.push(deferred);
      return;
    }
    let ret = deferred.onFulfilled(value);
    if(ret) {
      deferred.resolve(ret); 
    } else {
      deferred.resolve(value);
    }
  }
  function resolve(newValue) {
    if(newValue && (typeof newValue === "object" || typeof newValue === "function")){
      var then = newValue.then;
      then.call(newValue, resolve);
      return;
    }else {
      state = "fulfilled";
      value = newValue;
      setTimeout(() => {
        deferreds.forEach((deferred) => {
          handle(deferred);
        });
      }, 0);
    } 
  }
  fn(resolve);
}
</pre>

<pre>
new IPromise(function (resolve){
setTimeout(function(){
resolve(2333)
},1000)
}).then(function(v1){console.log(v1)}).then(function(v2){console.log(v2)})
</pre>
<pre>
第一个then中的函数参数叫v1fun，第二个叫v2fun
拿这段代码去执行，流程大概是这样：第一次new promise，假设叫做p1，因为new的时候会调用传进来的函数，并把自身内部的resolve传给这个函数去调用，而因为有settimeout，所以不会立刻执行，这一次过程结束；然后是执行then，就有了第二次new promise，叫做p2，第二次new的时候同样是接收函数参数，因为new时候是有fn(resolve)，所以要执行这个参数的，所以会传一个resolve函数进去，这里的resolve已经是p2内部的resolve，但是因为function(resolve){handle...}，这个函数是在外面传进去到p2的，所以对于handle函数中的标识符，现在这个function里面找，找不到就去它上一级(词法层面)，也就是then函数，而then也找不到，就再向上找到了promise函数，这个函数的活动对象中存在handle里需要的变量，也就是说，在第二次new的时候，先生成一个对象，里面存两个属性，一个是构造p2时传的then方法中的参数，也就是function(v1){console.log(v1)}，另一个是p2的resolve方法，这时候的handle是在第一个new promise的函数中创建的，所以这时候handle中的作用域链查找就会在第一次的构造函数内部找到，其实可以假设换成说是p1中的变量，state、deferreds、value，就是说在第一次调用then的时候，会在最开始的p1的内部，将then的参数和第一次then生成的p2的resolve一块存到p1内部的deferreds，然后第一次then中的构造结束后，进入第二次then，在这里面再构造promise，这时候就会在p2中的deferreds中存入p3中的resolve和第二次then的参数(是个函数)，同时这次的handle是在p2中创建的，所以它里面用的state value就是p2中的。

全部then结束后，会有三个promise，p1 p2 p3，其中p1：{deferreds:[{resolve:p2.resolve,onfullfiled:v1fun}],state:'pending',value:null},p2：{deferreds:[{resolve:p3.resolve,onfullfiled:v2fun}],state:'pending',value:null},p3：{state:'pending',value:null}。这时候，由于第一个的resolve被暴露到外部，所以开始启动第一个promise，将值2333传进去，然后执行p1的resolve，改state，value，然后是handle它内部的deferreds，也就是开始执行第一个then中的方法，传value(2333)进去，同时启动p2，进行resolve，然后就是在对p2改state，value，然后就是执行第二个then中的方法，传p2中的value进去，完了执行resolve启动p3，传value进去，改value state，由于deferreds是空，所以到此结束。
</pre>
