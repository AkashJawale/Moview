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


module.exports.movie = addMovies;


