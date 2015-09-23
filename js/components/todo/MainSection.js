var React = require('react');
var TodoActions = require('../../actions/TodoActions');
var Item = require('./Item');


var MainSection = React.createClass({

	propTypes: {
		allTodos: React.PropTypes.object.isRequired,
		areAllComplete: React.PropTypes.bool.isRequired
	},

	render: function() {		
		if (Object.keys(this.props.allTodos).length < 1) {
	      return null;
	    }

	    var allTodos = this.props.allTodos;
	    var todos = [];

	    for (var key in allTodos) {
	    	todos.push(<Item key={key} todo={allTodos[key]} />)
	    }

	    return (
	    	<section id="main">
	    		<input
	    			id="toggle-all"
	    			type="checkbox"
	    			checked={this.props.areAllComplete ? 'checked' : ''}
	    		/>
	    		<label htmlFor="toggle-all">Mark all as complete</label>
	    		<ul id="todo-list">{todos}</ul>
	    	</section>
    	);
	}
});

module.exports = MainSection;