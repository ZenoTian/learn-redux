let path = require('path')
let webpack = require('webpack')
let paths = require('../paths')

// console.log(path.resolve(path.join(paths.entry, 'index.js'), 'index.js'))
// console.log(path.resolve(paths.entry, 'index.js'), paths.dist)
console.log(paths.entry + 'index.js')
module.exports = {
  entry: [paths.entry + '/index.js', 'webpack-hot-middleware/client?reload=true'],
  //入口文件,可以是数组
  //'webpack-hot-middleware/client' 入口文件参数
  output: {
    path: paths.dist,
    filename: 'bundle.js',
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
	],
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
