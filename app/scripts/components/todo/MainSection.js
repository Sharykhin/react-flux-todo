var React = require('react');
var TodoActions = require('../../actions/TodoActions');
var TodoFormInput = require('./FormInput');
var Item = require('./Item');

var MainSection = React.createClass({

	propTypes: {
		todos: React.PropTypes.array.isRequired
	},

	render: function() {
		var list = [];
		
		this.props.todos.forEach(function(todo,key){
			list.push(<Item key={key} todo={todo} />)
		});
		console.info(this.props.todos);
		return <section id="main">
				<TodoFormInput placeholder="Type todo" />
				<ul className="list-group">
					{list}
				</ul>
			</section>
	}
});

module.exports = MainSection;