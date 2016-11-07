const path = require('path')

const base = __dirname
const pkg = `${base}/package.json`

module.exports = {
  base,
  pkg,
  entry: `${base}/src/entry`,
  src: `${base}/src`,
  dist: `${base}/dist`,
  asset: `${base}/asset`,
  webpack: `${base}/webpack`,
  node_modules: `${base}/node_modules`
}