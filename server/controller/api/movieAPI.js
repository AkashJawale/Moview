var Movies = require('./../../model/Movies');

function addMovies (req, res)  {
	var movies = new Movies(req.body);
	movies.save(function (err, result) {
		if(err){
			res.json({result: 'Unable to show details!'});
		}else{
			console.log('This is movie details!');
            res.json({result: 'This is movie details!'});
		}
    });
}



function updateMovies (req, res) {
	var response;
	if(!req.body.movieName){
		res.json({result: 'movieName missing parameter!' });
		return;
	}
    var parameters = {
		// name : req.body.name,
		movieName : req.body.movieName
		// password : req.body.password
	};
	Movies.findOne(parameters, function(err, result) {
	if(result){
		    if(req.body.producer){
		    	result.producer = req.body.producer;
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


function removeMovies (req, res) {
	var response;
	if(!req.body.movieName) {
		res.json({result: 'movieName missing parameter!'});
		return;
	}
	var parameter = {
		movieName : req.body.movieName
	};

	console.log('res.body : '+JSON.stringify(req.body))

	Movies.remove(parameter, function(err, result) {
		console.log(result)
		if(result && result.n != 0){
			response = 'Movie removed';
		}else {
			response = 'Movie Not Found!';
		}
		res.json({result: response });
	})
}


function getMovies (req, res) {
	var response;
    var parameters = {};
    if(req.body.movieName){
    	parameters.movieName = { $regex  : req.body.movieName };
    }
    if(req.body.producer){
    	parameters.producer = { $regex  : req.body.producer };
    }
    if(req.body.releaseDate){
    	parameters.releaseDate = { $regex  : req.body.releaseDate };
    }
	Movies.find(parameters, function(err, result) {
	if(result){
			response =result;
		}else{
			response = [];
		}
		res.json({result: response });
})
}





module.exports.movie = addMovies;
module.exports.updateMovies = updateMovies;
module.exports.removeMovies = removeMovies;
module.exports.getMovies = getMovies;


