var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

var schema = new mongoose.Schema({
	name: {type: String},
	username: {type: String},
    password: {type: String},
    email: {type: String},
	 createdDate: {type: Date, require: true, default: Date.now}
});

//index
schema.index({'username': 1});


// Model
var model = mongoose.model('Users', schema);

// Public API
module.exports = model;