var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', id:null });
});
router.get('/logout', function(req, res, next) {
  		req.session.destroy(function(err){
			console.log("로그아웃성공");
		});
		res.redirect('/');
});

module.exports = router;
