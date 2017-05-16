var mysql =require('mysql');
//var config=require('./db_info').real;
var config = process.env.NODE_ENV == "production" ? "" : require('./db_info').local;
var Sequelize =require('sequelize');
module.exports= {
	init:function(){
		return mysql.createConnection({
			"host"     : process.env.DB_HOST     || config.host,
			"user"     : process.env.DB_USER     || config.user,
		  	"password" : process.env.DB_PASSWORD || config.password,
  			"database" : process.env.DB_NAME     || config.database
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
	/*sequelize : new Sequelize('sharedb','zzu','zzu!1234^',{
       			host:'210.183.39.51',
        		host:'localhost',
			dialect:'mysql',
	}),*/

	/*sequelize : new Sequelize('sharedb','root','',{
                        host:'localhost',
                        dialect:'mysql',
        }),*/
	sequelize : new Sequelize(
			process.env.DB_HOST     || config.host,
			process.env.DB_USER     || config.user,
			process.env.DB_PASSWORD || config.password,
			{
                        	host:    process.env.DB_HOST || config.host,
                        	dialect: process.env.DB_TYPE || config.type,
				port:    process.env.DB_PORT || config.port
			}
        ),
	Sequelize: Sequelize
	
};
