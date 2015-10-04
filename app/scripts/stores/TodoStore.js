var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var extend = require('../utils/extend');

var CHANGE_EVENT='change';

TodoStore = function() {};

extend(EventEmitter,TodoStore);

module.exports = TodoStore;