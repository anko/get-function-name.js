'use strict';

var toString = Object.prototype.toString

module.exports = function(fn) {
  if (toString.call(fn) !== '[object Function]') return null
  if (fn.name) return fn.name
  var name = /^\s*function\s*([^\(]*)/im.exec(fn.toString())[1]
  return name || 'anonymous'
}
