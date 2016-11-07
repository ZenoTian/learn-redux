var gulp = require('gulp')
var webpack = require('webpack')
var prodConfig = require('./webpack/webpack.config.prod.js')
console.log(prodConfig)
const compiler = done => webpack(prodConfig, (err, stats) => {
	if (err) console.log('err', err)
	done()
})
gulp.task('build', compiler)