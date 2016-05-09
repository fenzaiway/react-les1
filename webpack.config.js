
module.exports = {
	//文件入口
	entry:[
		'./app/HelloWorld.jsx'
	],
	//文件输出目录
	output:{
		path:__dirname+"/build",
		filename:"bundle.js"
	},
	//打包使用到的模块
	module:{
		loaders:[
			{
				test:/\.jsx$/,loader:'babel-loader!jsx-loader?harmony'
			}
		]
	}
}