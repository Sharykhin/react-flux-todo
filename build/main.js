/*var SearchPanel = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="one-fourth column">
					Filter: &nbsp;
					<input ref='search' type='text' 
						value={this.props.search} 
						onChange={this.onSearchChanged} 
						{this.props.search?<button onClick={this.props.onClearSearch}>x</button>:null} />
				</div>
			</div>
			)
	},

	onSearchChanged: function() {
		var query = React.findDOMNode(this.refs.search).value;
		this.props.onSearchChanged(query);
	}
});*/

var HelloWorld = React.createClass({displayName: "HelloWorld",
	render: function() {
		return (React.createElement("h1", null, "Hello World"));
	}
});

	React.render(
	React.createElement(HelloWorld, null),
	document.getElementById('content')
)
