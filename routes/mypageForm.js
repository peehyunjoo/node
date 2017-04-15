var express=require('express');
var router=express.Router();
var mysql = require('mysql');
var crypto = require('crypto');
/*router.get('/',function(req,res,next){
	console.log('mypage');
});
*/
router.post('/update',function(req,res,next){
	console.log('asdf');
});
router.get('/',function(req,res,next){
	console.log('mypage2');
	console.log(req.query.id);
	var id = req.query.id;
var connection = mysql.createConnection({
        host:'210.183.39.51',
        port:3306,
        user:'zzu',
        password:'zzu!1234^',
        database:'zzu'
});
	console.log('mypage');
        connection.connect(function(err){
                 if (err){
        console.log('mysql connection is fail ');
        console.log(err);
        throw err;
    } else {
        console.log('mysql connection is success');
    }
    });
	var select="select * from  user where id=?";
	//connection.query('insert into user SET ?',req.body,function(err,result){
        connection.query(select,[id],function(err,rows){
	if(err){
                console.log(err);
        }else{	
                console.log("닉네임:"+JSON.stringify(rows));
		res.render('mypage',{rows:rows});

        }
}); 

        //res.json(req.body.id);
});

module.exports = router;

