var express = require('express')
var webpackDev = require("webpack-dev-middleware")
var webpack = require('webpack')
var webpackHot = require("webpack-hot-middleware")
var devConfig = require('./webpack.config.dev.js')
var path = require('path')
var paths = require('../paths')

let port = 3000
let app = new express()
let compiler = webpack(devConfig)

app.use(webpackDev(compiler, {
	publicPath: devConfig.output.publicPath,
	 noInfo: true,//详细编译信息，默认false
}))

app.use(webpackHot(compiler))

// console.log('PATH', paths.base, 'index.html')
app.get(/\.js?$/, (req, res) => {
	console.log(path.join(paths.dist, req.path))
	res.sendFile(path.join(paths.dist, req.path))
})
app.get(/\.html?$/, function (req, res) {
    res.sendFile(path.join(paths.base, req.path))
 })
app.listen(port, '0.0.0.0', err => {
  if (!err) {
    console.log(`Listening at http://0.0.0.0:${port}`)
  }
})
