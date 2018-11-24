var Users = require('./../../model/Producer');

function Producer (req, res)  {
	var Producer = new Users(req.body);
	Producer.save(function (err, result) {
		if(err){
			res.json({result: 'Didnt display details!'});
		}else{
			console.log('This is Producer details!');
            res.json({result: 'This is Producer details!'});
		}
    });
}

module.exports.produ = Producer;

