//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var responseTime = require('response-time');
var path = require('path');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//declare static folder
app.use(express.static(path.join(__dirname + '/public')));

//log request stats
app.use(responseTime(function(req, res, time) {
    console.log('=======STATS=======');
    console.log('User agent: ' + req.headers['user-agent']);
    console.log('Referrer: ' + req.headers['referer']);
    console.log('Url: ' + req.url);
    console.log('Response status code: ' + res.statusCode);
    console.log('Time spent: ' + time + ' ms');
    console.log('===================');
}));

//Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');
