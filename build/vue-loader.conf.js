var utils = require('./utils')
var config = require('../config')
var px2rem = require('postcss-px2rem')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: function() {
    return [px2rem({remUnit: 75})]
  }
}
