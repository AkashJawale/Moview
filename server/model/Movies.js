var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

var schema = new mongoose.Schema({
	movieName: {type: String},
	producer: {type: String},
    releaseDate: {type: Date},
	 createdDate: {type: Date, require: true, default: Date.now}
    
});

//index
schema.index({'movieName': 1});


// Model
var model = mongoose.model('Movies', schema);

// Public API
module.exports = model;



