var React = require('react');

var TodoTextInput = React.createClass({

	propTypes: {
		className: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			value: this.props.value || ''
		}
	},

	render: function() {
		return (
			<input 
				type="text" />
		);
	}
});

module.exports = TodoTextInput;