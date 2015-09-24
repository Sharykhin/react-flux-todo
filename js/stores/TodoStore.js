var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};
/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(params) {
  var text = params.text;

  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };  
}

/**
 * Update a TODO item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(params) {
   var id = params.id;
   var updates = params.data;
  _todos[id] = assign({}, _todos[id], updates);
}

function toggleAll () {
  if (TodoStore.areAllComplete()) {
    updateAll({complete: false});
  } else {
     updateAll({complete: true});
  }
}

function updateAll(updates) {
  for (var id in _todos) {
      update({id:id, data:updates});
    }
}

/**
 * Delete a TODO item.
 */
function destroy(params) {
  var id = params.id;
  delete _todos[id];
}

function destroyCompleted () {  
  for (var id in _todos) {
    if(_todos[id].complete) {
      destroy({id:id});
    }
  }
}

var TodoStore = assign({}, EventEmitter.prototype, {

  /**
   * Tests whether all the remaining TODO items are marked as completed.
   * @return {boolean}
   */
  areAllComplete: function() {
    for (var id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _todos;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}); 

TodoStore[TodoConstants.CREATE] = create;
TodoStore[TodoConstants.UPDATE] = update;
TodoStore[TodoConstants.DELETE] = destroy;
TodoStore[TodoConstants.DELETE_COMPLETED] = destroyCompleted;
TodoStore[TodoConstants.COMPLETE] = update;
TodoStore[TodoConstants.UNDO_COMPLETE] = update;
TodoStore[TodoConstants.UPDATE_TEXT] = update;
TodoStore[TodoConstants.TOGGLE_COMPLETE_ALL] = toggleAll;


AppDispatcher.register(function (action) {
  if (!(action.actionType in TodoStore)) {
    return;
  }

  TodoStore[action.actionType](action.params);
  TodoStore.emitChange();
});

module.exports = TodoStore;
