var React = require('react');
var classNames = require('classnames');

var Item = React.createClass({
	
	propTypes: {
		todo: React.PropTypes.object.isRequired
	},

	render: function() {
		return <li className="list-group-item" className={classNames({
			'list-group-item':true,
			'isDone':this.props.todo.done})}>{this.props.todo.title}</li>
	}
});

module.exports = Item;