var express=require('express');
var router=express.Router();
var crypto = require('crypto');
//var mysql=require('mysql');
//var connection=mysql_dbc.init();
//mysql_dbc.open(connection);
//var mysql_dbc = require('./db_con');
var User = require('./usermodel');
var attendance = require('./usermodel2');
router.get('/',function(req,res){
	res.render('login');
});
router.post('/',function(req,res){
	var id=req.body.id;
	var pw=req.body.password;
	User.findOne({
		where:{id:id}
	}).then(function(results){	
			var password = results.pass;
			var HashPass=crypto.createHash("sha256").update(pw).digest("hex");
			if(HashPass === password){
                		console.log('로그인 성공');
                		req.session.user_id=id;
				req.session.idx=results.idx;
                		//res.redirect("/");
                		res.redirect('/attendance');
                	}else{
                		console.log("로그인 실패");
                        	res.render("login");
                	}
	});
});
module.exports = router;

