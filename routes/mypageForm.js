var express=require('express');
var router=express.Router();
var crypto = require('crypto');
//var connection=mysql_dbc.init();
//mysql_dbc.open(connection);
var User = require('./usermodel');
router.get('/',function(req,res,next){
	var id = req.query.id;
	var select="select * from  user where id=?";
        /*connection.query(select,[id],function(err,rows){
		if(err){
                	console.log(err);
        	}else{	
                	console.log("닉네임:"+JSON.stringify(rows));
			res.render('mypage',{rows:rows});

        	}
	}); */
	User.findOne({
                where:{id:id}
        }).then(function(results){
/*	User.findAll({
		where : {
			id : req.query.id
		}
	}).then(function(result){*/
		console.log("rows"+results);
		res.render('mypage',{rows:results});
	}).catch(function(err){
		res.json(err);
	})
});

module.exports = router;

