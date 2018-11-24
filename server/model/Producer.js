var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

var schema = new mongoose.Schema({
	name: {type: String},
	 createdDate: {type: Date, require: true, default: Date.now}
});

//index
schema.index({'name': 1});


// Model
var model = mongoose.model('Producer', schema);

// Public API
module.exports = model;