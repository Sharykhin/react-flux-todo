var React = require('react');
var TodoStore = require('../../stores/TodoStore');

var TodoTextInput = require('./TodoTextInput');

var TodoApp = React.createClass({
	propTypes: {
		name: React.PropTypes.string
	},
	render: function() {
		var name = 'Todo List';
		return (
			<div>
				<h2>{name}</h2>
				<TodoTextInput />
			</div>
		);
	}
});

module.exports = TodoApp;