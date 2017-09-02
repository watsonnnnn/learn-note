function PPromise(fn) {
    var state = 'pending',
        value = null,
        deferreds = [];

   this.then = function (onFulfilled) {
    return new PPromise(function (resolve) {
        handle({
            onFulfilled: onFulfilled || null,
            resolve: resolve
        });
    });
};

function handle(deferred) {
    if (state === 'pending') {
        deferreds.push(deferred);
console.log(deferreds)
        return;
    }

    var ret = deferred.onFulfilled(value);
    deferred.resolve(ret);
}

    function resolve(newValue) {
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (typeof then === 'function') {
            then.call(newValue, resolve);
            return;
        }
    }
    
    setTimeout(function () {
state = 'fulfilled';
    value = newValue;
        deferreds.forEach(function (deferred) {
            handle(deferred);
        });
    }, 0);
}

    fn(resolve);
}