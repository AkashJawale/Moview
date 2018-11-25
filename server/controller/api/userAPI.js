var Users = require('./../../model/Users');

function createUser (req, res)  {
	var createUser = new Users(req.body);
	createUser.save(function (err, result) {
		if(err){
			res.json({result: 'User Not registered!'});
		}else{
			console.log('User registered!');
            res.json({result: 'User registered!'});
		}
    });
}

function loginUser (req, res) {
	var response;
	if(!req.body.username){
		res.json({result: 'username missing parameter!' });
		return;
	}else if(!req.body.password){
		res.json({result: 'password missing parameter!' });
		return;
	}
	var parameters = {
		username : req.body.username,
		password : req.body.password
	};
	Users.findOne(parameters,function(err,result){
		if(result){
			response = 'Login Successfull';
		}else{
			response = 'Login Failed!Username/Password Wrong!';
		}
		res.json({result: response });
	})

}


function updateUser (req, res) {
	var response;
	if(!req.body.username){
		res.json({result: 'username missing parameter!' });
		return;
	}
    var parameters = {
		// name : req.body.name,
		username : req.body.username
		// password : req.body.password
	};
	Users.findOne(parameters, function(err, result) {
	if(result){
		    if(req.body.password){
		    	result.password = req.body.password;
		    }
		    if(req.body.name){
		        result.name = req.body.name;
		    }
		    result.save();
			response = 'User Successfully Updated';
		}else{
			response = 'Faild to Update User!';
		}
		res.json({result: response });
})
}


function removeUser (req, res) {
	var response;
	if(!req.body.username) {
		res.json({result: 'username missing parameter!'});
		return;
	}
	var parameter = {
		username : req.body.username
	};

	console.log('res.body : '+JSON.stringify(req.body))

	Users.remove(parameter, function(err, result) {
		console.log(result)
		if(result && result.n != 0){
			response = 'User removed';
		}else {
			response = 'User Not Found!';
		}
		res.json({result: response });
	})
}




module.exports.register = createUser;
module.exports.login = loginUser;
module.exports.updateUser = updateUser;
module.exports.removeUser = removeUser;
