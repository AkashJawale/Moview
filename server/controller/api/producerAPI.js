var Producer = require('./../../model/Producer');

function addProducer (req, res)  {
	var producer = new Producer(req.body);
	producer.save(function (err, result) {
		if(err){
			res.json({result: 'Didnt display details!'});
		}else{
			console.log('This is Producer details!');
            res.json({result: 'This is Producer details!'});
		}
    });
}



function updateProducer (req, res) {
	var response;
	if(!req.body.producerName){
		res.json({result: 'producerName missing parameter!' });
		return;
	}
    var parameters = {
		// name : req.body.name,
		producerName : req.body.producerName
		// password : req.body.password
	};
	Producer.findOne(parameters, function(err, result) {
	if(result){
		    if(req.body.producerName){
		    	result.producerName = req.body.producerName;
		    }
		    if(req.body.releaseDate){
		        result.releaseDate = req.body.releaseDate;
		    }
		    result.save();
			response = 'Movie Successfully Updated';
		}else{
			response = 'Faild to Update Movie!';
		}
		res.json({result: response });
})
}



function removeProducer(req, res) {
	var response;
	if(!req.body.producerName) {
		res.json({result: 'producerName missing parameter!'});
		return;
	}
	var parameter = {
		producerName : req.body.producerName
	};

	console.log('res.body : '+JSON.stringify(req.body))

	Producer.remove(parameter, function(err, result) {
		console.log(result)
		if(result && result.n != 0){
			response = 'Producer removed';
		}else {
			response = 'Producer Not Found!';
		}
		res.json({result: response });
	})
}



function getProducer (req, res) {
	var response;
    var parameters = {};
    if(req.body.producerName){
    	parameters.producerName = { $regex  : req.body.producerName };
    }
    if(req.body.createdDate){
    	parameters.createdDate = { $regex  : req.body.createdDate };
    }
   
	Producer.find(parameters, function(err, result) {
	if(result){
			response =result;
		}else{
			response = [];
		}
		res.json({result: response });
})
}



module.exports.addProducer = addProducer;
module.exports.updateProducer = updateProducer;
module.exports.removeProducer = removeProducer;
module.exports.getProducer = getProducer;

