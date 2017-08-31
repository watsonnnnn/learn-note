### 单入口文件
<pre>
//////////////////////////  dist/index.js 打包后的文件
var path = require('path')
module.exports = {
    entry: {'index':'./index.js'},
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    }
}
///////////////////////// 源文件 index.js
module.exports.qaqaqa=1

</pre>
只有一个入口的文件，打包后生成的代码是这样的
<pre>
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports.qaqaqa=1

/***/ })
/******/ ]);
</pre>
首先是一个立即执行函数,是这样的
<pre>
(function(modules){...})([function(module, exports){module.exports.qaqaqa=1}])参数modules是个数组

函数里面是定义一个函数__webpack_require__，然后在函数上面添加一些可配置可读的属性，最后的是调用这个函数
__webpack_require__(__webpack_require__.s = 0)
这个调用，首先函数要是已存在的。括号里的 相当于是先赋值，再传值，调用时传的是0，代表的是主模块所在的数组位置
再看函数本身
var installedModules = {};
function __webpack_require__(moduleId) {
		// Check if module is in cache
        //  首次调用时moduleId为0
 		if(installedModules[moduleId]) { //undefined
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
         // 存module，id为0
 		var module = installedModules[moduleId] = {
 			i: moduleId, //id
 			l: false,  // loaded
 			exports: {}
		};

 		// Execute the module function
         // 执行modules[0]，在函数内部处理了这里的module={i:0,l:false,exports:{qaqaqa:1}}
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
		module.l = true;//加载完成

 		// Return the exports of the module
 		return module.exports;
 	}
</pre>

### 在入口文件中引入其他模块
<pre>
// index.js
var t = require('./chunk1.js')
console.log(t)
module.exports.qaqaqa=1

//chunk1.js
var ccc={q:22}
module.exports = ccc
</pre>
生成代码前面基本不变，自执行函数的参数发生改变
<pre>
[
/* 0 */
(function(module, exports, __webpack_require__) {
var t = __webpack_require__(1)
console.log(t)
module.exports.qaqaqa=1
}),
/* 1 */
(function(module, exports) {
var ccc={q:22}
module.exports = ccc
)
]
依然是传0先执行数组第一个元素，这时候就会用到第三个参数，就是webpack的require函数本身，然后就可以执行数组的第二个元素，最后执行完，t就是module.exports={q:22}，而这个模块本身又导出一个{qaqaqa:1}
</pre>

### 重复引入模块
<pre>
// index.js
var t = require('./chunk1.js')
var chunk2=require('./chunk2.js')
console.log(t)
module.exports.qaqaqa=1
// chunk1.js
var chunk2=require('./chunk2.js')
var ccc={q:22}
module.exports = ccc
// chunk2.js
module.exports.chunk2=33
</pre>
生成的也是前面基本不变，不过这时候入口模块的数组位置变成了1，所以调用require的参数就是1
<pre>
[
/* 0 */
(function(module, exports) {

module.exports.chunk2=33

}),
/* 1 */
(function(module, exports, __webpack_require__) {

var t = __webpack_require__(2)
var chunk2=__webpack_require__(0)
console.log(t)
module.exports.qaqaqa=1

}),
/* 2 */
(function(module, exports, __webpack_require__) {

var chunk2=__webpack_require__(0)
var ccc={q:22}
module.exports = ccc

})
]
</pre>
再把require函数拿过来
<pre>
var installedModules = {};
function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);//这里传了module和module.exports两个，所以在代码里面用module.exports和exports都可以
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
启动是传的moduleId为1，1里面又调用了2和0，先执行数组下标2的元素，2里面又执行了0,0执行完之后，installedModules={0:{i:0,l:true,exports:{qaqaqa:1}}},
执行到最后，installedModules={2:{i:2,l:true,exports:{q:22}},0:{i:0,l:true,exports:{qaqaqa:1}}}，然后继续回到主入口对应数组下标1里继续执行，var t = __webpack_require__(2)执行完就是开始var chunk2=__webpack_require__(0)
的执行，这时候,installedModules里面已经有了0，于是就直接返回了0的exports，不再往下执行。通过闭包做到了缓存模块
</pre>

### 入口参数是数组
<pre>
entry: ['./index.js','./index1.js']
</pre>
<pre>
[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var t = __webpack_require__(2)
console.log(t)
module.exports.qaqaqa=1

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// var chunk2=require('./chunk2.js')
var ccc={q:22}
module.exports = ccc

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var t = __webpack_require__(4)
console.log(t)
module.exports.qqq=22

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports.chunk2=33

/***/ })
/******/ ]
代码基本没变，还是参数不一样，入口是0，module.exports = __webpack_require__(3)这一步很关键，这就意味着，最终导出的就是3，也就是说，如果入口是字符串的话，最后导出的都是入口模块的exports，而入口是数组的话，导出的是数组最后一个元素的exports
</pre>

### CommonsChunkPlugin
在index.js和index1.js中引入同一个chunk1.js模块
<pre>
module.exports = {
    entry: {'index':'./index.js','index1':'./index1.js'},
    // entry: ['./index.js','./index1.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons'
        })
    ]
}
</pre>
<pre>
// index.js
webpackJsonp([1],[
/* 0 */,            ----------------这里有个逗号，数组是两个元素，moduleId是1，所以require函数在数组下标1的位置
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var t = __webpack_require__(0)
console.log(t)
module.exports.qaqaqa=1

/***/ })
],[1]);

// index1.js
webpackJsonp([0],{

/***/ 2:     //moduleid是2，这里的key就为2
/***/ (function(module, exports, __webpack_require__) {

var t = __webpack_require__(0)
console.log(t)
module.exports.qqq=22

/***/ })

},[2]);
</pre>
<pre>
window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0; // 0表示loaded
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) { // 
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
			var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks 已加载的公共chunk
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
</pre>
### require.ensure
内部会以promise的形式去require