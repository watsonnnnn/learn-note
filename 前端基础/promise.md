### promise
<pre>
function IPromise(fn) {
  let state = "pending";
  let value = null;
  let deferreds = [];
  this.then = function(onFulfilled) {

    //括号里的直接定义函数，其实相当于在上面的then函数中进行的定义然后传到构造函数里。所以，这个函数中的标识符查找如果找不到，要到它的父作用域中找，也就是创建这个函数的作用域中，也就是then函数，而then函数中也找不到的话，继续上一级，就到了promise函数中，所以进行了then调用后，也就是在往调用then的promise中传参
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
