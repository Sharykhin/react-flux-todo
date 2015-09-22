var SearchPanel = React.createClass({displayName: "SearchPanel",
	render: function() {
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "one-fourth column"}, 
					"Filter:  ", 
					React.createElement("input", {ref: "search", type: "text", 
						value: this.props.search, 
						onChange: this.onSearchChanged}), 
						this.props.search?React.createElement("button", {onClick: this.props.onClearSearch}, "x"):null
				)
			)
			)
	},

	onSearchChanged: function() {
		var query = React.findDOMNode(this.refs.search).value;
		this.props.onSearchChanged(query);
	}
});

var TodoTableRow = React.createClass({displayName: "TodoTableRow",
	render: function() {
		return (
			React.createElement("tr", null, 
				React.createElement("td", null, this.props.book.title), 
				React.createElement("td", null, this.props.book.category), 
				React.createElement("td", null, React.createElement("a", {href: "#", onClick: this.onClick}, "Edit"))
			)
			);
	},
	onClick: function(id) {
		this.props.handleEditClickPanel(this.props.book.id);
	}
});


var TodoTable = React.createClass({displayName: "TodoTable",
	render: function() {
		var rows = [];
		this.props.books.forEach(function(book) {
			rows.push(React.createElement(TodoTableRow, {key: book.id, book: book, handleEditClickPanel: this.props.handleEditClickPanel}));
		}.bind(this));

		return (
			React.createElement("table", null, 
				React.createElement("thead", null, 
					React.createElement("tr", null, 
						React.createElement("th", null, "Title"), 
						React.createElement("th", null, "Category"), 
						React.createElement("th", null, "Edit")
					)
				), 
				React.createElement("tbody", null, rows)
			)
			);
	}
});

var TodoForm = React.createClass({displayName: "TodoForm",
  render: function() {
    return(
      React.createElement("form", {onSubmit: this.props.handleSubmitClick}, 
        React.createElement("label", {forHtml: "title"}, "Title"), React.createElement("input", {ref: "title", name: "title", type: "text", value: this.props.book.title, onChange: this.onChange}), 
        React.createElement("label", {forHtml: "category"}, "Category"), 
        React.createElement("select", {ref: "category", name: "category", value: this.props.book.category, onChange: this.onChange}, 
          React.createElement("option", {value: "CRIME"}, "Crime"), 
          React.createElement("option", {value: "HISTORY"}, "History"), 
          React.createElement("option", {value: "HORROR"}, "Horror"), 
          React.createElement("option", {value: "SCIFI"}, "SciFi")
        ), 
        React.createElement("br", null), 
        React.createElement("input", {type: "submit", value: this.props.book.id?"Save (id = " +this.props.book.id+ ")":"Add"}), 
        this.props.book.id?React.createElement("button", {onClick: this.props.handleDeleteClick}, "Delete"):null, 
        this.props.book.id?React.createElement("button", {onClick: this.props.handleCancelClick}, "Cancel"):null, 
        this.props.message?React.createElement("div", null, this.props.message):null
      )
    );
  },
  onChange: function() {
    var title = React.findDOMNode(this.refs.title).value;
    var category = React.findDOMNode(this.refs.category).value;
    this.props.handleChange(title, category);
  }
});

var TodoPanel = React.createClass({displayName: "TodoPanel",
	getInitialState: function() {
		return {
			books: [],
			editingBook: {
				title: "",
				category: ""
			},
			search: "",
			message: ""
		};
	},

	render: function() {
		return (
				React.createElement("div", {className: "row"}, 
			        React.createElement("div", {className: "one-half column"}, 
			          React.createElement(SearchPanel, {
			            search: this.state.search, 
			            onSearchChanged: this.onSearchChanged, 
			            onClearSearch: this.onClearSearch}
			          ), 
			          React.createElement(TodoTable, {books: this.state.books, handleEditClickPanel: this.handleEditClickPanel})
			        ), 
			        React.createElement("div", {className: "one-half column"}, 
			          React.createElement(TodoForm, {
			            book: this.state.editingBook, 
			            message: this.state.message, 
			            handleChange: this.handleChange, 
			            handleSubmitClick: this.handleSubmitClick, 
			            handleCancelClick: this.handleCancelClick, 
			            handleDeleteClick: this.handleDeleteClick}
			          )
			        )
			      )
			);
	},
	componentDidMount: function() {
    	this.reloadBooks('');
  	},
  	onSearchChanged: function(query) {
	  if (this.promise) {
	    clearInterval(this.promise)
	  }
	  this.setState({
	    search: query
	  });
	  this.promise = setTimeout(function () {
	    this.reloadBooks(query);
	  }.bind(this), 200);
	},
	onClearSearch: function() {
	  this.setState({
	    search: ''
	  });
	  this.reloadBooks('');
	},
	handleEditClickPanel: function(id) {
	  var book = $.extend({}, this.state.books.filter(function(x) {
	    return x.id == id;
	  })[0] );

	  this.setState({
	    editingBook: book,
	    message: ''
	  });
	},
	handleChange: function(title, category) {
	  this.setState({
	    editingBook: {
	      title: title,
	      category: category,
	      id: this.state.editingBook.id
	    }
	  });
	},
	handleCancelClick: function(e) {
	  e.preventDefault();
	  this.setState({
	    editingBook: {}
	  });
	},
	reloadBooks: function(query) {
	    $.ajax({
	      url: this.props.url+'?search='+query,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({
	          books: data
	        });
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	        this.setState({
	          message: err.toString(),
	          search: query
	        });
	      }.bind(this)
	    });
	  },
	  handleSubmitClick: function(e) {
	    e.preventDefault();	    
	    if(this.state.editingBook.id) {
	      $.ajax({
	        url: this.props.url+this.state.editingBook.id,
	        dataType: 'json',
	        method: 'PUT',
	        data:this.state.editingBook,
	        cache: false,
	        success: function(data) {
	          this.setState({
	            message: "Successfully updated book!"
	          });
	          this.reloadBooks('');
	        }.bind(this),
	        error: function(xhr, status, err) {
	          console.error(this.props.url, status, err.toString());
	          this.setState({
	            message: err.toString()
	          });
	        }.bind(this)
	      });
	    } else {
	      $.ajax({
	        url: this.props.url,
	        dataType: 'json',
	        method: 'POST',
	        data:this.state.editingBook,
	        cache: false,
	        success: function(data) {
	          this.setState({
	            message: "Successfully added book!"
	          });
	          this.reloadBooks('');
	        }.bind(this),
	        error: function(xhr, status, err) {
	          console.error(this.props.url, status, err.toString());
	          this.setState({
	            message: err.toString()
	          });
	        }.bind(this)
	      });
	    }
	    this.setState({
	      editingBook: {}
	    });
	  },
	  handleDeleteClick: function(e) {
	  e.preventDefault();
	  $.ajax({
	    url: this.props.url+this.state.editingBook.id,
	    method: 'DELETE',
	    cache: false,
	    success: function(data) {
	      this.setState({
	          message: "Successfully deleted book!",
	          editingBook: {}
	      });
	      this.reloadBooks('');
	    }.bind(this),
	    error: function(xhr, status, err) {
	      console.error(this.props.url, status, err.toString());
	      this.setState({
	          message: err.toString()
	      });
	    }.bind(this)
	    });
	  },
});

	React.render(
	React.createElement(BookPanel, {url: "http://localhost:2403/books/"}),
	document.getElementById('content')
)
