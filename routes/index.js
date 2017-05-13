var express = require('express');
var router = express.Router();
var attendance = require('./usermodel2');
/* GET home page. */
router.get('/', function(req, res, next) {
        attendance.findAll().then(function(results){
			results=JSON.parse(JSON.stringify(results));
			console.log(results);
		res.render('index',{rows:results,id:null});
	});
  //res.render('index', { title: 'Express', id:null });
});
router.get('/logout', function(req, res, next) {
  		req.session.destroy(function(err){
			console.log("로그아웃성공");
		});
		res.redirect('/');
});

module.exports = router;
