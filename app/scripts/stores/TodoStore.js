var AppDispatcher = require('../dispatcher/AppDispatcher'); 
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var extend = require('../utils/extend');

var CHANGE_EVENT='change';

var _todos = {};

TodoStore = function() {};

extend(EventEmitter,TodoStore);

TodoStore.prototype.getAll = function() {
	return _todos;
}

module.exports = TodoStore;