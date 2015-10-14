var AppDispatcher = require('../dispatcher/AppDispatcher'); 
var TodoConstants = require('../constants/TodoConstants');
var TodoModel = require('./models/TodoModel');



var _handlers = {
	_data: null,
	then: function(fn) {
		return fn(this._data);
	}
};

_handlers[TodoConstants.TODO.CREATE] = function(params) {	
	TodoStore.addTodo({title:params.text,done:params.done});
	console.log('handle '+TodoConstants.TODO.CREATE+':');
	console.log(params);
	return this;
};

var TodoStore = new TodoModel();


AppDispatcher.register(function(action){
	if(!(action.actionType in _handlers)) {
		return;
	}

	_handlers[action.actionType](action.params).then(function(data) {	
		TodoStore.emitChange();
	});
	

});

module.exports = TodoStore;