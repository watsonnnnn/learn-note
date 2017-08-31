var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry: './index2.js',
    // entry: ['./index.js','./index1.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        chunkFilename: 'ck.js'
    },
    plugins:[
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'commons'
        // })
    ]
}