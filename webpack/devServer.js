var express = require('express')
var webpackMiddleware = require("webpack-dev-middleware")
var devConfig = require('./webpack.config.js')
var webpack = require('webpack')
var path = require('path')
var paths = require('../paths')

let app = new express()
let port = 3000
// let compiler = webpack(devConfig)
app.use(webpackMiddleware(webpack(devConfig), {
	publicPath: `http://localhost:${port}`,
	 noInfo: true,//详细编译信息，默认false
}))

// console.log('PATH', paths.base, 'index.html')
app.get('/', (req, res) => {
	res.sendFile(path.join(paths.base, req.path))
})
app.listen(port, '0.0.0.0', err => {
  if (!err) {
    console.log(`Listening at http://0.0.0.0:${port}`)
  }
})
