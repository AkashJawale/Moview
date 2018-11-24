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
    router.route('/updateMovie').post(controllers.movieAPI.updateMovies);
    router.route('/removeMovie').post(controllers.movieAPI.removeMovies);
    router.route('/getMovies').post(controllers.movieAPI.getMovies);

    //
    router.route('/addProducer').post(controllers.producerAPI.addProducer);
    router.route('/updateProducer').post(controllers.producerAPI.updateProducer);
    router.route('/removeProducer').post(controllers.producerAPI.removeProducer);
    router.route('/getProducer').post(controllers.producerAPI.getProducer);

    //
    router.route('/addActor').post(controllers.actorAPI.addActors);
    router.route('/updateActor').post(controllers.actorAPI.updateActors);
    router.route('/removeActor').post(controllers.actorAPI.removeActors);
    router.route('/getActor').post(controllers.actorAPI.getActors);


};