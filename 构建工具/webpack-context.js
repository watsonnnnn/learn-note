var context = require.context('./', false, /\.js$/)
// 指定为context的目录  

// 这个方法返回一个函数，得到的是一个 function webpackContext(req){return _webpack_require_(webpackContextResolve(req))}

// 这个方法上有一个keys属性

var keys = context.keys() // 得到所有匹配出来的路径

context(keys[0]) // 得到一个require出来的模块
context(keys[0]) === require('./activities.js') // true

 // 所以这个方法可以自动进行require