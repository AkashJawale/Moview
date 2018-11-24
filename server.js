var express = require('express'),
	app= express(),

	bodyParser = require('body-parser'),
	mongoose = require('mongoose'), //Mongo connectivity library
	requireDir = require('require-dir'),
	config = require('./config/developement'),
	passport = require('passport'),
	localStrategy = require('passport-local'), Strategy;
	
	const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//passport init
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname,'client')));
var allowCrossDomain = function (req, res, next) {
	 res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-username,x-token');
    next();
};

app.use(allowCrossDomain);

var router = express.Router();
var routes = require('./server/routes');

router.get('/', function (req, resp) {
    res.sendfile(__dirname + '/client/index.html');
});

routes.register(router);
app.use('/api', router);

mongoose.connect('mongodb://' + config.db.mongo.host + ':' + config.db.mongo.port + '/' + config.db.mongo.db);
app.listen(8000, function () {
    console.log("Welcome to Moview.. server started at 8000")
})
module.exports = app;


























// const path = require('path');
// const express = require('express');
//  const clientPath = path.join(__dirname, 'client');
//  var app = express();

//  app.use(express.static(clientPath));

 
// app.listen(8000, function() {
//     console.log("The server is running on port 8000!");
// });

