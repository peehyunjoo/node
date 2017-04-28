var express=require('express');
var router=express.Router();
var crypto = require('crypto');
var moment = require('moment');
var attendance = require('./usermodel2');
router.get('/',function(req,res){
	console.log("들어와");
	res.render('attendance');
});
router.post('/',function(req,res){
	console.log("!!!");
	var memo=req.body.memo;
	console.log("메모:"+memo);
	attendance.create({
		idx : req.session.idx,
                memo : memo,
		date : moment().format('YYYY-MM-DD'),
		submit_date : moment()
        }).then(function(result){
                res.render('/');
        }).catch(function(err){
                console.log(err);
        });

});
module.exports = router;

