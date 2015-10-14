var extend = require('../../utils/extend');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT='change';

var _todos = [{title:'test',done:false}];

TodoModel = function() {};

extend(EventEmitter,TodoModel);


TodoModel.prototype.addChangeListener = function(callback) {
	this.on(CHANGE_EVENT, callback);
};

TodoModel.prototype.removeChangeListener = function(callback) {
	this.removeListener(CHANGE_EVENT, callback);
};

TodoModel.prototype.emitChange = function() {
	console.log('Hey Hey Emit event: ' + CHANGE_EVENT);
	this.emit(CHANGE_EVENT);
};

TodoModel.prototype.getAll = function() {
	return _todos;
};

TodoModel.prototype.addTodo = function(todo) {
	_todos.push(todo);
};



module.exports = TodoModel;