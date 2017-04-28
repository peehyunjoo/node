var mysql_dbc = require('./db_con');
var sequelize = mysql_dbc.sequelize;
//var Sequelize = mysql_dbc.Sequelize;
var Sequelize = mysql_dbc.Sequelize;
module.exports=sequelize.define('attendance',{

	 idx        : { type : Sequelize.INTEGER(11), primaryKey: true }
    	, date       : { type : Sequelize.DATEONLY, primaryKey: true
        , validate : { isDate: true } }
    	, memo       : { type : Sequelize.STRING(2000) }
    	, submit_date: { type : Sequelize.DATE }
    	, file_name  : { type : Sequelize.STRING(100) }
  	}, {
		timestamps: false,
    		tableName: 'attendance'
  	});	


