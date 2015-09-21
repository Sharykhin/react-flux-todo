var React = require('react');
var components = require('./components');
var stores = require('./stores');

React.render(
	<components.TodoPanel url='http://localhost:2403/books/' />,
	document.getElementById('content')
	);

stores.reloadBooks();