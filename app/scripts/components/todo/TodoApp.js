var React = require('react');
var TodoStore = require('../../stores/TodoStore');

var MainSection = require('./MainSection');

var TodoApp = React.createClass({

	getTodoState: function() {
		return {
			todos: TodoStore.getAll()
		}
	},

	getInitialState: function() {
		return this.getTodoState();
	},

	componentDidMount: function() {
		TodoStore.addChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState(this.getTodoState());
	},

	render: function() {
		console.log(this.state);
		return <div>
				<MainSection todos={this.state.todos} />
			</div>
	}
});

module.exports = TodoApp;