var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
	create: function(text) {
		console.log('action cretae:',text);
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO.CREATE,
			params: {
				text: text,
				done: false
			}
		})
	}
};

module.exports = TodoActions;