var React = require("react");
var ReactDOM = require("react-dom");

var HelloWorld = React.createClass({
	render:function(){
		return (
			<div>
				<h2>Hello World haha</h2>
			</div>
		)
	}
});

ReactDOM.render(<HelloWorld/>,
				document.getElementById("test"));