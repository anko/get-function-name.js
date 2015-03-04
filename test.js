'use strict';

var type = require('./index')
  , assert = require('assert')
  , ase = assert.strictEqual
 
it('get-function-name', function() {
  var getName = require('./index')

  ase(getName(function foo() {}), 'foo')
  ase(getName(function foo(){}), 'foo')
  ase(getName(function foo  (){}), 'foo')
  
  ase(getName(function () {}), 'anonymous')
  ase(getName(new Function('a', 'b', 'return')), 'anonymous')

  function Klass() {}
  klass = new Klass()
  ase(getName(klass.constructor), 'Klass')
 
  ase(getName(true), null)
  ase(getName(), null)
  ase(getName(''), null)
  ase(getName([1, 2]), null)
  ase(getName({a: 3}), null)

  ase(getName(String), 'String')
  ase(getName(Number), 'Number')
  ase(getName(Boolean), 'Boolean')
  ase(getName(RegExp), 'RegExp')
  ase(getName(Function), 'Function')
  ase(getName(Object), 'Object')
  ase(getName(Date), 'Date')
})
