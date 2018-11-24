var Actors = require('./../../model/Actors');

function addActors (req, res)  {
	var actor = new Actors(req.body);
	actor.save(function (err, result) {
		if(err){
			res.json({result: 'Unable to Add!'});
		}else{
			console.log('This is actor details!');
            res.json({result: 'This is actor details!'});
		}
    });
}


function updateActors (req, res) {
	var response;
	if(!req.body.actorName){
		res.json({result: 'actorName missing parameter!' });
		return;
	}
    var parameters = {
		// name : req.body.name,
		actorName : req.body.actorName
		// password : req.body.password
	};
	Actors.findOne(parameters, function(err, result) {
	if(result){
		    if(req.body.address){
		    	result.address = req.body.address;
		    }
		    if(req.body.DOB){
		        result.DOB = req.body.DOB;
		    }
		    result.save();
			response = 'Actor Successfully Updated';
		}else{
			response = 'Faild to Update Actor!';
		}
		res.json({result: response });
})
}

function removeActors (req, res) {
	var response;
	if(!req.body.actorName) {
		res.json({result: 'actorName missing parameter!'});
		return;
	}
	var parameter = {
		actorName : req.body.actorName
	};

	console.log('res.body : '+JSON.stringify(req.body))

	Actors.remove(parameter, function(err, result) {
		console.log(result)
		if(result && result.n != 0){
			response = 'Actor removed';
		}else {
			response = 'Actor Not Found!';
		}
		res.json({result: response });
	})
}



function getActors (req, res) {
	var response;
    var parameters = {};
    if(req.body.actorName){
    	parameters.actorName = { $regex  : req.body.actorName };
    }
    if(req.body.address){
    	parameters.address = { $regex  : req.body.address };
    }
	Actors.find(parameters, function(err, result) {
	if(result){
			response =result;
		}else{
			response = [];
		}
		res.json({result: response });
})
}



module.exports.addActors = addActors;
module.exports.updateActors = updateActors;
module.exports.removeActors = removeActors;
module.exports.getActors = getActors;
