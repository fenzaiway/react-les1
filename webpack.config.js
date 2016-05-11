var path = require("path");
var webpack = require("webpack");


module.exports = {
	//文件入口
	entry:{'helloworld':'./app/HelloWorld.jsx',
		'tab':['webpack-dev-server/client?http://localhost:3000','webpack/hot/dev-server','./app/Tab.jsx']
	}
	,
	//文件输出目录
	output:{
		path:__dirname+"/build",
		filename:"[name].js",
		publicPath:__dirname+"/build/"
	},
	//打包使用到的模块
	module:{
		loaders:[
			{
				test:/\.jsx$/,loader:'react-hot!babel-loader!jsx-loader?harmony',
				include:[path.join(__dirname,"app")]
			},
			{
				test:/\.html$/,loader:'react-hot',
				include:[path.join(__dirname,"html")]
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}




