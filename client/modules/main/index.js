angular.module('MainModule',['MainControllerModule'])

.config(function ($stateProvider) {
	$stateProvider

		.state('app.home', {
			url: "/home",
			controller: 'mainController',
			templateUrl: "modules/main/template/main.html"
		})
});