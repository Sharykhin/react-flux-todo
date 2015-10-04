var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
	create: function(text) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO.CREATE,
			params: {
				text: text
			}
		})
	}
};