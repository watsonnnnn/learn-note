### promise

function IPromise(fn) {
  let state = "pending";
  let value = null;
  let deferreds = [];
  this.then = function(onFulfilled) {
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
