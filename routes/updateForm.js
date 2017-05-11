var express=require('express');
var router=express.Router();
var crypto = require('crypto');
var mysql_dbc = require('./db_con');
/*var connection=mysql_dbc.init();
mysql_dbc.open(connection);*/
var User = require('./usermodel');
router.post('/',function(req,res,next){

	var updateObj = {
		phone : req.body.phone
	}
	
	var whereObj = {
		where : {
			id : req.session.user_id
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

