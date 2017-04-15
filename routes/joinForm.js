var express=require('express');
var router=express.Router();
var crypto = require('crypto');
var mysql_dbc = require('./db_con.js')();
var connection=mysql_dbc.init();
mysql_dbc.open(connection);
router.get('/',function(req,res,next){
        res.render('joinForm');
});

router.post('/',function(req,res,next){
	var salt = Math.round((new Date().valueOf() * Math.random())) + "";
	var password=crypto.createHash("sha512").update(req.body.password+salt).digest("hex");		console.log(salt);
	var insert="INSERT INTO user values(?,?,?,?)";
	//connection.query('insert into user SET ?',req.body,function(err,result){
        connection.query(insert,[req.body.id,password,salt,req.body.nickname],function(err,result){
	if(err){
                console.log(err);
        }else{
                console.log("ok");
        }
}); 

        //res.json(req.body.id);
	res.render('joinok');
});

module.exports = router;

