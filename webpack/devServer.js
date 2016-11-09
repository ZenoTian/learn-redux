var express = require('express')
var webpackDev = require("webpack-dev-middleware")
var webpack = require('webpack')
var webpackHot = require("webpack-hot-middleware")
var devConfig = require('./webpack.config.dev.js')
var path = require('path')
var paths = require('../paths')

let app = new express()
let port = 3000
let compiler = webpack(devConfig)
app.use(webpackDev(compiler, {
	publicPath: `http://localhost:${port}`,
	 noInfo: true,//详细编译信息，默认false
}))

app.use(webpackHot(compiler))

// console.log('PATH', paths.base, 'index.html')
app.get('/', (req, res) => {
	res.sendFile(path.join(paths.base, req.path))
})
app.listen(port, '0.0.0.0', err => {
  if (!err) {
    console.log(`Listening at http://0.0.0.0:${port}`)
  }
})
