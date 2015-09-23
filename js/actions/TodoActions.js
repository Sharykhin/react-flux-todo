var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
	create : function(text) {		
		AppDispatcher.dispatch({
			actionType: TodoConstants.CREATE,
			params: {
				text: text
			}
		})
	},
	/**
	 * @param  {string} id The ID of the ToDo item
	 * @param  {string} text
	 */
	updateText: function(id, text) {
		AppDispatcher.dispatch({
		  actionType: TodoConstants.UPDATE,
		  params: {
		  	id: id,
		  	text: text
		  }		  
		});
	},
	/**
	 * @param  {string} id
	 */
	destroy: function(id) {
		AppDispatcher.dispatch({
		  actionType: TodoConstants.DELETE,
		  params: {
		  	id: id	
		  }		  
		});
	},

	destroyCompleted: function() {
		AppDispatcher.dispatch({
			actionType:TodoConstants.DELETE_COMPLETED
		});
	},

	toggleComplete: function(todo) {
		var id = todo.id;
		var actionType = todo.complete ? 
			TodoConstants.UNDO_COMPLETE :
        	TodoConstants.COMPLETE;
		var data = {};
		data.complete = todo.complete ? false : true;
    	AppDispatcher.dispatch({
    		actionType: actionType,
    		params: {
    			id: id,
    			data: data
    		}
    	});
	},

	updateText: function(id, text) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.UPDATE_TEXT,
			params: {
				id: id,
				data: {
					text: text
				}
			}
		})
	}
};

module.exports = TodoActions;