var React = require('react');
var TodoStore = require('../../stores/TodoStore');

var Header = require('./Header');
var Footer = require('./Footer');
var MainSection = require('./MainSection');


function getTodoState() {
	return {
			allTodos: TodoStore.getAll(),
			areAllComplete: TodoStore.areAllComplete()
	};
}

var TodoApp = React.createClass({

	propTypes: {
		name: React.PropTypes.string
	},
	getInitialState: function() {
		return getTodoState();
	},
	componentDidMount: function() {
		TodoStore.addChangeListener(this._onChange);
	},
	render: function() {	
		return (
			<div>
				<Header />
				<MainSection
		          allTodos={this.state.allTodos}
		          areAllComplete={this.state.areAllComplete}
		        />
				<Footer allTodos={this.state.allTodos} />
			</div>
		);
	},

	_onChange: function() {
		this.setState(getTodoState());
	}
});

module.exports = TodoApp;