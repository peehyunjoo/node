var mysql =require('mysql');
var config=require('./db_info').real;

module.exports=function(){
	return{
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
				console.err('mysql connection err');
			}else{
				console.log('mysql connection success');
			}
		})
	}
	}
};
