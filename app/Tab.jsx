var React = require("react"),
	ReactDOM = require("react-dom");

var tabs = [
	{"key":1,"name":"1","content":'1111'},
	{"key":2,"name":"2","content":'2222'},
	{"key":3,"name":"3","content":'3333'}
];

var TabTop = React.createClass({
	tabClick:function(){
		this.props.tabClick(this.props.index);
	},
	render:function(){
		return (
			<span className={this.props.isCurrent?"t current":"t"} onClick={this.tabClick}>{this.props.name}</span>
		)
	}
});

var TabContainer = React.createClass({
	render:function(){
		return (
			<div id="msg">{this.props.content}</div>
		)
	}
});


var Tab = React.createClass({
	getInitialState:function(){
		return {tabs:tabs,current:tabs[0].key};
	},
	tabClick:function(index){
		var currentTab = this.state.tabs[index-1];
		this.setState({current:index});

	},
	render:function(){
		var me = this;
		var current = this.state.current;
		var TabTops = this.state.tabs.map(function(item){

			return <TabTop key={item.key} isCurrent={current==item.key} name={item.name} tabClick={me.tabClick} index={item.key}/>
		});
		return (
			<div id="tab">
				<div id="top">
				{TabTops}
				</div>
				<TabContainer content={this.state.tabs[this.state.current-1].content} />
			</div>
		)
	}
});

ReactDOM.render(
	<Tab />,
	document.getElementById("test")
);

