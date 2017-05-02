var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongoose
//mongoose.connect('mongodb://localhost/projet');
//var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Hello world !');
});

app.listen(8080);
console.log('Running on port 8080');