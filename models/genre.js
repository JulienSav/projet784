var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	create_date: {
		type: Date,
		default:Date.now
	}
	
});

var Genre = module.exports = mongoose.Model('Genre', genreSchema);

module.exports.getGenres = function (callback, limit) {
	Genre.find(callback).limit(limit);
}