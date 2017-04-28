var express=require('express');
var router=express.Router();
var crypto = require('crypto');
//var connection=mysql_dbc.init();
//mysql_dbc.open(connection);
var User = require('./usermodel');
router.get('/',function(req,res,next){
        res.render('joinForm');
});

router.post('/',function(req,res,next){
	//var salt = Math.round((new Date().valueOf() * Math.random())) + "";
	//var password=crypto.createHash("sha512").update(req.body.password+salt).digest("hex");		
	var password = crypto.createHash("sha256").update(req.body.password).digest("hex");
	User.create({
	/*	id : req.body.id,
		password : password,
		nickname : req.body.nickname,
		salt : salt
	*/
		id : req.body.id,
		pass : password,
		name : req.body.nickname,
		phone : '010-3103-4123'	
	}).then(function(result){
		res.render('login');
	}).catch(function(err){
		console.log(err);
	});
});

module.exports = router;

