var express=require('express');
var router=express.Router();
var crypto = require('crypto');
var mysql_dbc = require('./db_con.js')();
var connection=mysql_dbc.init();
mysql_dbc.open(connection);
router.get('/',function(req,res){
	res.render('login');
});
router.post('/',function(req,res){
	var id=req.body.id;
	var pw=req.body.password;
	connection.query('select * from user where id=?',[id],function(err,rows,fields){
	var password = rows[0].password;
	var salt = rows[0].salt;
	var HashPass=crypto.createHash("sha512").update(pw+salt).digest("hex");
	
	if(HashPass === password){
		console.log('로그인 성공');
		req.session.user_id=id;
		console.log(req.session.user_id);
		//res.send('<script>alert("로그인완료");</script>');
		res.redirect("/");
		}else{
		console.log("로그인 실패");
		res.render("login");
	}
	}); 
});
module.exports = router;

