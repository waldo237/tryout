
const emitter = require('events').EventEmitter;
const util = require('util');
const Person = function(name){
    this.name = name;

};

util.inherits(Person, emitter);

module.exports = Person;