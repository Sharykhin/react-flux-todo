var React = require('react');
var TodoActions = require('../../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput');

var classNames = require('classnames');

var Item = React.createClass({

	propTypes: {
		todo: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			isEditing: false
		};
	},

	render: function() {
		var todo = this.props.todo;
		var input;
		if(this.state.isEditing) {
			input = 
				<TodoTextInput 
				  className="edit"
				  onSave={this._onSave}
				  value={todo.text}
				/>;				
		}

		return (
			<li
			className={classNames({
				'completed': todo.complete,
				'editing': this.state.isEditing
			})}
			key={todo.id}>
				<div className="view">
					<input
					className="toogle"
					type="checkbox"
					checked={todo.complete}
					onChange={this._onToggleComplete}
					 />
					<label onDoubleClick={this._onDoubleClick}>{todo.text}</label>	
					<button className="destroy" onClick={this._onDestroyClick} />
				</div>
				{input}
			</li>
		);
	},

	_onToggleComplete: function() {
		TodoActions.toggleComplete(this.props.todo);
	},

	_onDoubleClick: function() {
		this.setState({
			isEditing: true
		});
	},

	_onDestroyClick: function() {
		TodoActions.destroy(this.props.todo.id);
	},

	_onSave: function(text) {
	    TodoActions.updateText(this.props.todo.id, text);
	    this.setState({isEditing: false});
  	}

});

module.exports = Item;