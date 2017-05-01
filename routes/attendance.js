var express=require('express');
var router=express.Router();
var crypto = require('crypto');
var moment = require('moment');
var attendance = require('./usermodel2');
router.get('/',function(req,res){
	res.render('attendance');
});
router.post('/',function(req,res){
	var memo=req.body.memo;
	attendance.create({
		idx : req.session.idx,
                memo : memo,
		date : moment().format('YYYY-MM-DD'),
		submit_date : moment()
        }).then(function(result){
                res.redirect('/');
        }).catch(function(err){
                console.log(err);
        });

});
module.exports = router;

