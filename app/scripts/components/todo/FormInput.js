var React = require('react');
var TodoActions = require('../../actions/TodoActions');

var ENTER_KEY_CODE=13;

var TodoFormInput = React.createClass({

	propTypes: {
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			value: this.props.value || ''
		}
	},

	render: function() {
		return <input 
			placeholder={this.props.placeholder}
			type="text"
			onChange={this._onChange}
			onKeyDown={this._onKeyDown}
			value={this.state.value}
			autoFocus={true} />
	},

	_onChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},

	_onKeyDown: function(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			this._save();
		}
	},

	_save: function() {
		console.log('save');
		TodoActions.create(this.state.value);
		this.setState({
			value:''
		});
	}

});

module.exports = TodoFormInput;