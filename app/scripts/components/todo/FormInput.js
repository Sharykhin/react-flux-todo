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
		return (			
			<form className="form-horizontal">				 
				 <div className="form-group">
				 		<div className="col-sm-10 col-md-10 col-xs-10">
					 		<input 
					 			className="form-control" 
								placeholder={this.props.placeholder}
								type="text"
								onChange={this._onChange}
								onKeyDown={this._onKeyDown}
								value={this.state.value}
								autoFocus={true} />
						</div>
						<div className="col-sm-2 col-md-2 col-xs-2">			 
						 	<button type="button" onClick={this._save} className="btn btn-default">Add Todo</button>
						 </div>
				 </div> 	
				 
			</form>			
			)
	},

	_onChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},

	_onKeyDown: function(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			event.preventDefault();
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