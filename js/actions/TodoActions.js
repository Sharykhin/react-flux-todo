var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
	create : function() {
		AppDispatcher.dispatch({
			actionType: TodoConstants.CREATE,
			text: text
		})
	},
	/**
	 * @param  {string} id The ID of the ToDo item
	 * @param  {string} text
	 */
	updateText: function(id, text) {
		AppDispatcher.dispatch({
		  actionType: TodoConstants.UPDATE,
		  id: id,
		  text: text
		});
	},
	/**
	 * @param  {string} id
	 */
	destroy: function(id) {
		AppDispatcher.dispatch({
		  actionType: TodoConstants.DELETE,
		  id: id
		});
	},
};

module.exports = TodoActions;