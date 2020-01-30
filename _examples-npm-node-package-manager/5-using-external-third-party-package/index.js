// include/load underscore library
var _ = require('underscore');

// use underscore library
var isContains = _.contains(['hi', 'hello', 'hey', 'hola'], 'hello');
console.log('It contains hello:', isContains);
