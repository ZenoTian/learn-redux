let path = require('path')
let webpack = require('webpack')
let paths = require('../paths')

// console.log(path.resolve(path.join(paths.entry, 'index.js'), 'index.js'))
// console.log(path.resolve(paths.entry, 'index.js'), paths.dist)
console.log(paths.entry + 'index.js')
module.exports = {
  entry: paths.entry + '/index.js',
  //入口文件,可以是数组
  output: {
    path: paths.dist,
    filename: 'bundle.js',
  },
  module: {
  	loaders: [{
  		test: /\.jsx?$/,
  		loader: 'babel',
  		query: {
  			'presets': ['es2015', 'react']
  		},
  		//只处理src目录下
  		include: paths.src
  	}]
  }
}
