var mysql =require('mysql');
//var config=require('./db_info').real;
var config = require('./db_info').local;
var Sequelize =require('sequelize');
module.exports= {
	init:function(){
		return mysql.createConnection({
			host:config.host,
			port:config.port,
			user:config.user,	
			password:config.password,
			database:config.database
		})
	},
	open:function(con){
		con.connect(function(err){
			if(err){
				console.log('mysql connection err');
			}else{
				console.log('mysql connection success');
			}
		})
	},
	sequelize : new Sequelize('sharedb','zzu','zzu!1234^',{
       			host:'210.183.39.51',
        		dialect:'mysql',
	}),
	Sequelize: Sequelize
	
};
