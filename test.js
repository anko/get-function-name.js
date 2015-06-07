'use strict';

var assert = require('assert')
  , ase = assert.strictEqual
  , asthrows = assert.throws
 
it('get-function-name', function() {
  var getName = require('./index')

  ase(getName(function foo() {}), 'foo')
  ase(getName(function foo(){}), 'foo')
  ase(getName(function foo  (){}), 'foo')

  ase(getName(function () {}), null)
  ase(getName(new Function('a', 'b', 'return')), "anonymous")

  function Klass() {}
  var klass = new Klass()
  ase(getName(klass.constructor), 'Klass')

  ;[ true, undefined, null, "", [1,2], {a:3} ]
    .forEach(function(x) {
      asthrows(function() { return getName(x); })
    })

  ase(getName(String), 'String')
  ase(getName(Number), 'Number')
  ase(getName(Boolean), 'Boolean')
  ase(getName(RegExp), 'RegExp')
  ase(getName(Function), 'Function')
  ase(getName(Object), 'Object')
  ase(getName(Date), 'Date')
})
