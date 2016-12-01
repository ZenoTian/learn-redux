var fs = require('fs')
var path = require('path')
var paths = require('../paths')

fs.readdir(paths.entry, (err, files) => {
	console.log(files)
})