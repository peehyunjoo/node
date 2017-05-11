var express=require('express');
var router=express.Router();
var crypto = require('crypto');
var moment = require('moment');
var attendance = require('./usermodel2');
var imgur = require('imgur');
var multiparty = require('multiparty');
var fs = require('fs');
imgur.setClientId('b70bec09bc909af');
router.get('/',function(req,res){
	res.render('attendance');
});
router.post('/',function(req,res){
	/*var form = new multiparty.Form();
	form.on('field',function(name,value){
		console.log('field'+name+value);
	});
	form.on('part',function(part){
           var filename;
           var size;
           if (part.filename) {
                 filename = part.filename;
                 size = part.byteCount;
           }else{
                 part.resume();

           }    
           console.log("Write Streaming file :"+filename);
           var writeStream = fs.createWriteStream('/tmp/'+filename);
           writeStream.filename = filename;
           part.pipe(writeStream);
           part.on('data',function(chunk){
                 console.log(filename+' read '+chunk.length + 'bytes');
           });
           part.on('end',function(){
                 console.log(filename+' Part read complete');
                 writeStream.end();
           });
      });
	
	form.parse(req);*/
	var memo=req.body.memo;
	var file_name=req.body.file_name;
	console.log("업로드"+req.body.upload_file);
	imgur.uploadBase64(req.body.upload_file)
	.then(function(Data){
			attendance.create({
			idx : req.session.idx,
			memo : memo,
			date : moment().format('YYYY-MM-DD'),
			submit_date : moment(),
			file_name : Data.data.link
        	}).then(function(result){
                        console.log(result);
                res.redirect('/');
        }).catch(function(err){
                console.log(err);
        });

	}).
	catch(function(err){
		console.log(err.message);
	});
	/*attendance.create({
		idx : req.session.idx,
                memo : memo,
		date : moment().format('YYYY-MM-DD'),
		submit_date : moment(),
		file_name : Data.data.link
        }).then(function(result){
			consosle.log(result);
                res.redirect('/');
        }).catch(function(err){
                console.log(err);
        });*/

});
module.exports = router;

