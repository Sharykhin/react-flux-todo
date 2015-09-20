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

var HelloWorld = React.createClass({
	render: function() {
		return (<h1>Hello World</h1>);
	}
});

	React.render(
	<HelloWorld />,
	document.getElementById('content')
)
