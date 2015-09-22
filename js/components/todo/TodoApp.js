var React = require('react');

var TodoApp = React.createClass({
	propTypes: {
		name: React.PropTypes.string
	},
	render: function() {
		var name = 'Todo List';
		return (
			<h2>{name}</h2>
		);
	}
});

module.exports = TodoApp;