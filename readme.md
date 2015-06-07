get-function-name
=================

Get the name of a function

Install
-------

With [npm](https://npmjs.org)

```
npm install get-function-name
```

Usage
-----

Node.js

```js
var getFunctionName = require('get-function-name')

var foo = function() {}
function bar() {}

getFunctionName(foo) // null
getFunctionName(bar) // 'bar'
getFunctionName('hello') // throws error
```
