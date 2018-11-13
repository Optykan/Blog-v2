require('dotenv').config()
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var fs = require('fs');
var api = require('./routes/api');

var app = express();

process.on('uncaughtException', function (exception) {
	console.log(exception);
});

const firebaseAdmin = require("firebase-admin")
var serviceAccount = require("./firebase-creds.json");

firebaseAdmin.initializeApp({
	credential: firebaseAdmin.credential.cert(serviceAccount),
	databaseURL: process.env.FIREBASE_URL
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('The page you were looking for couldn\'t be found.');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
  let stack = req.app.get('env') === 'development' ? err.stack : 'No stacktrace available.'; 

  // render the error page
	let response = new Response(err.status || Response.STATUS_INTERNAL_ERROR, err.message || "An error ocurred" , stack);
	response.send(res);
});


module.exports = app;
