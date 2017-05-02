var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genres = require('./models/genre');

//connect to mongoose
mongoose.connect('mongodb://localhost/projet');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please /api/books or /api/genres');
});

app.get('/api/genres', function (req, res) {
	Genres.getGenres(function (err, genres) {
		if (err) throw err;
		res.json(genres);
	});
});

app.listen(8080);
console.log('Running on port 8080');