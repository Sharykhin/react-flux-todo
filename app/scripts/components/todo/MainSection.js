var React = require('react');
var TodoActions = require('../../actions/TodoActions');
var TodoFormInput = require('./FormInput');

var MainSection = React.createClass({

	render: function() {
		return <section id="main">
			<TodoFormInput placeholder="Type todo" />
			</section>
	}
});

module.exports = MainSection;