var extend = require('../../utils/extend');
var EventEmitter = require('events').EventEmitter;

TodoModel = function() {};

extend(EventEmitter,TodoModel);

TodoModel.prototype.getAll = function() {
	return _todos;
};

TodoModel.prototype.emitChange = function(CHANGE_EVENT) {
	console.log('Hey Hey Emit event: ' + CHANGE_EVENT);
	this.emit(CHANGE_EVENT);
};

module.exports = TodoModel;