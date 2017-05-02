var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	genre:{
		type: String,
		require: true
	},
	description:{
		type: String,
		require: true
	},
	create_date: {
		type: Date,
		default:Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = function (callback, limit) {
	Book.find(callback).limit(limit);
}