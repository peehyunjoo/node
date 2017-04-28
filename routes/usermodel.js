var mysql_dbc = require('./db_con');
var sequelize = mysql_dbc.sequelize;
//var Sequelize = mysql_dbc.Sequelize;
var Sequelize = mysql_dbc.Sequelize;
module.exports= sequelize.define('user',{
        /*        id : {
                        type:Sequelize.INTEGER,
                        primaryKey:true,
                        autoIncrement:true
                },
                password : {
                        type:Sequelize.STRING
                },
                nickname : {
                        type:Sequelize.STRING
                },
                salt : {
                        type:Sequelize.STRING
                }
        },{*/

	idx      : { type : Sequelize.INTEGER, primaryKey: true
                 , autoIncrement: true }
    	, id       : { type : Sequelize.STRING, allowNull: false
                 , validate : { is: ["^[a-z0-9_-]+$",'i'] } }
    	, pass     : { type : Sequelize.STRING, allowNull: false }
    	, name     : { type : Sequelize.STRING }
    	, tel      : { type : Sequelize.STRING }
    	, phone    : { type : Sequelize.STRING }
    	, email    : { type : Sequelize.STRING
                 , validate : { isEmail: true } }
    	, birth    : { type : Sequelize.DATEONLY
                 , validate : { isDate: true } }
    	, reg_date : { type : Sequelize.DATEONLY
                 , validate : { isDate: true }
                 , defaultValue : Sequelize.NOW }
    	, ip       : { type : Sequelize.STRING
                 , validate : { isIP: true } }
  	}, {
                tableName: 'user',
                timestamps:false
	}
);

