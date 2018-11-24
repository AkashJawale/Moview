var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

var schema = new mongoose.Schema({
	actorName: {type: String},
	address: {type: String},
    DOB: {type: Date},
	 createdDate: {type: Date, require: true, default: Date.now}
    
});

//index
schema.index({'actorName': 1});


// Model
var model = mongoose.model('Actors', schema);

// Public API
module.exports = model;


