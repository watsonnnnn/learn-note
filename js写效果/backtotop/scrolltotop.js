void function(){
    var root = (typeof self == 'object' && self.self === self && self) ||
      (typeof global == 'object' && global.global === global && global) ||
       this || {}
    // 兼容低版本浏览器 http://www.webhek.com/post/requestanimationframe.html
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0, len = vendors.length; x < len && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 17 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

    //兼容低版本没有bind
    Function.prototype.bind = Function.prototype.bind || function (context) {
        if (typeof this !== "function") {
          throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var self = this;
        var args = Array.prototype.slice.call(arguments, 1);

        var fNOP = function () {};

        var fBound = function () {
            var bindArgs = Array.prototype.slice.call(arguments);
            self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
        }

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    }


}()