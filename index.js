'use strict';

var toString = Object.prototype.toString

module.exports = function(fn) {
  if (toString.call(fn) !== '[object Function]')
      throw Error('Attempted to get name of non-function')
  if (fn.name) return fn.name
  var name = /^\s*function\s*([^\(]*)/im.exec(fn.toString())[1]
  return name || null
}
