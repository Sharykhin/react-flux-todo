var React = require('react');
var TodoStore = require('../../stores/TodoStore');

var MainSection = require('./MainSection');

var TodoApp = React.createClass({

	render: function() {
		return <div>
				<MainSection />
			</div>
	}
});

module.exports = TodoApp;