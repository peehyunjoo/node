var express=require('express');
var router=express.Router();
var crypto = require('crypto');
var mysql_dbc = require('./db_con');
/*var connection=mysql_dbc.init();
mysql_dbc.open(connection);*/
var User = require('./usermodel');
router.post('/',function(req,res,next){
/*	var update="update user set nickname=? where id=?";
        connection.query(update,[req.body.nickname,req.body.id],function(err,rows){
	if(err){
                console.log(err);
        }else{	
                console.log("update:"+JSON.stringify(rows));
		res.render('index');

        }
}); */

	var updateObj = {
		nickname : req.body.nickname
	}
	
	var whereObj = {
		where : {
			id : req.body.id
		}
	}
	console.log(updateObj,whereObj);
	User.update(updateObj,whereObj).then(function(result){
		res.render('index');
	}).catch(function(err){
		console.log(err);
	})
});

module.exports = router;

