var React = require('react');
var classNames = require('classnames');

var Item = React.createClass({
	
	propTypes: {
		todo: React.PropTypes.object.isRequired
	},

	getInitialState:function() {
		return {
			isEditing: false
		};
	},

	render: function() {
		
			if(this.state.isEditing) {
				return 	<li className="list-group-item">
						<div className="row">
							<div className="col-sm-10 col-md-10 col-xs-8">	
								<input type="text" className="form-control" value={this.props.todo.title} />
							</div>
							<div className="col-sm-2 col-md-2 col-xs-4">			 
						 		<button type="button" className="btn btn-success">Save</button>
						 	</div>
						</div>
					</li>
			} else {
				return 	<li className={classNames({
					'list-group-item':true,
					'isDone':this.props.todo.done})}>	
						<div className="row">			
							<span className="col-md-9 col-sm-9 col-xs-8 col-lg-10 item-text">{this.props.todo.title}</span>
							<span className="col-md-3 col-sm-3 col-xs-4 col-lg-2 item-buttons">
								<button type="button" className="btn btn-primary" onClick={this._onEdit}>Edit</button> 
								<button type="button" className="btn btn-danger">Delete</button>
							</span>
						</div>
					</li>
			}
	},

	_onEdit: function() {
		console.log('chnage my view');
		this.setState({
			isEditing: true
		});
	}
});

module.exports = Item;