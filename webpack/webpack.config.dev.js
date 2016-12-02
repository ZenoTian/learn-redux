var fs = require('fs')
let path = require('path')
let webpack = require('webpack')
let paths = require('../paths')

let port = 3000
let entry = {
}

fs.readdirSync(paths.entry).map((i) => {
  let name = i.replace(/\.js$/, '')
  entry[name] = [`${paths.entry}/${i}` , 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true']
})
console.log(entry)

module.exports = {
  entry: entry,
  //入口文件,可以是数组
  //'webpack-hot-middleware/client' 入口文件参数
  output: {
    path: paths.dist,
    filename: '[name].js',
    publicPath: `http://localhost:${port}/`
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
  			'presets': ['es2015', 'react', 'stage-0']
  		},
  		//只处理src目录下
  		include: paths.src
  	}]
  }
}
