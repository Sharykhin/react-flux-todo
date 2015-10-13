var AppDispatcher = require('../dispatcher/AppDispatcher'); 
var TodoConstants = require('../constants/TodoConstants');
var TodoStore = require('./models/TodoModel');

var CHANGE_EVENT='change';

var _todos = {};

var _handlers = {
	_data: null,
	then: function(fn) {
		return fn(this._data);
	}
};

_handlers[TodoConstants.TODO.CREATE] = function(params) {
	console.log('handle '+TodoConstants.TODO.CREATE+':');
	console.log(params);
	return this;
};

var TodoStore = new TodoStore();

AppDispatcher.register(function(action){
	if(!(action.actionType in _handlers)) {
		return;
	}

	_handlers[action.actionType](action.params).then(function(data) {	
		TodoStore.emitChange(CHANGE_EVENT);
	});
	

});

module.exports = TodoStore;