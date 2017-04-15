var express=require('express');
var router=express.Router();
var crypto = require('crypto');
var mysql_dbc = require('./db_con.js')();
var connection=mysql_dbc.init();
mysql_dbc.open(connection);

router.post('/',function(req,res,next){
	var update="update user set nickname=? where id=?";
        connection.query(update,[req.body.nickname,req.body.id],function(err,rows){
	if(err){
                console.log(err);
        }else{	
                console.log("update:"+JSON.stringify(rows));
		res.render('index');

        }
}); 
});

module.exports = router;

