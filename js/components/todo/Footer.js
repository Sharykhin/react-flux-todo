var React = require('react');
var TodoActions = require('../../actions/TodoActions');

var Footer = React.createClass({

	propTypes: {
		allTodos: React.PropTypes.object.isRequired
	},

	render: function() {
		var allTodos = this.props.allTodos;
		var total = Object.keys(allTodos).length;

		if (total === 0) {
			return null;
		}

		var completed = 0;
		for (var key in allTodos) {
			if(allTodos[key].complete) {
				completed++;
			}
		}

		var itemLeft = total - completed;
		var itemLeftPhrase = itemLeft === 1 ? 'item ' : 'items ';
		itemLeftPhrase += 'left';

		var clearCompletedButton;
		if (completed) {
			clearCompletedButton = 
				<button
					id="clear-completed"
					onClick={this._onClearCompletedClick}>
					Clear completed ({completed})
				</button>;
		}

		return (
			<footer id="footer">
				<span id="todo-count">
					<strong>
						{itemLeft}
					</strong>
					{itemLeftPhrase}
				</span>
				{clearCompletedButton}
			</footer>
		);
	},

	_onClearCompletedClick: function() {
		TodoActions.destroyCompleted();
	}
});

module.exports = Footer;