var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');

module.exports.register = function (router) {

    //
    router.route('/registerUser').post(controllers.userAPI.register);
    router.route('/login').post(controllers.userAPI.login);
    router.route('/updateUser').post(controllers.userAPI.updateUser);
    router.route('/removeUser').post(controllers.userAPI.removeUser);

    ///
    router.route('/movie').post(controllers.movieAPI.movie);
    
    //
    router.route('/producer').post(controllers.producerAPI.produ);

    

};