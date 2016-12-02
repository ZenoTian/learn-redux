let fs = require('fs')
let path = require('path')
let webpack = require('webpack')
let paths = require('../paths')

let entry = {}

fs.readdirSync(paths.entry).map((i) => {
  let name = i.replace(/\.js$/, '')
  entry[name] = [paths.entry + '/index.js', 'webpack-hot-middleware/client?reload=true']
})
console.log(paths.entry + 'index.js')
module.exports = {
  entry: entry,
  //入口文件,可以是数组
  output: {
    path: paths.dist,
    filename: '[name].js',
  },
  module: {
  	loaders: [{
  		test: /\.jsx?$/,
  		loader: 'babel',
  		query: {
  			'presets': ['es2015', 'react', 'stage-0']
  		},
  		//只处理src目录下
  		include: paths.src
  	}]
  }
}
