var SearchPanel = React.createClass({
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
});

var BookTableRow = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.book.title}</td>
				<td>{this.props.book.category}</td>
				<td><a href='#' onClick={this.onClick}>Edit</a></td>
			</tr>
			);
	},
	onClick: function(id) {
		this.props.handleEditClickPanel(this.props.book.id);
	}
});


var BookTable = React.createClass({
	render: function() {
		var rows = [];
		this.props.books.forEach(function(book) {
			rows.push(<BookTableRow key={book.id} book={book} handleEditClickPanel={this.props.handleEditClickPanel} />);
		}.bind(this));

		return (
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Category</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			);
	}
});

var HelloWorld = React.createClass({
	render: function() {
		return (<h1>Hello World</h1>);
	}
});

	React.render(
	<HelloWorld />,
	document.getElementById('content')
)
