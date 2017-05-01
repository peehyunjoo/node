var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var join = require('./routes/joinForm');
var login = require('./routes/loginForm');
var mypage = require('./routes/mypageForm');
var user_update = require('./routes/updateForm');
var attendance = require('./routes/attendance');
var engine = require('ejs-locals');
var session = require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs',engine);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
        secret : 'keyboard cat',
        resave : false,
        saveUniitialized:true
}));
app.use(function(req, res, next) {
  res.locals.user_id = req.session.user_id;
  res.locals.idx = req.session.idx;
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/join', join);
app.use('/login',login);
app.use('/mypage',mypage);
app.use('/update',user_update);
app.use('/attendance',attendance);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/*app.use(session({
	secret : 'keyboard cat',
	resave : false,
	saveUniitialized:true
}));
*/
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
