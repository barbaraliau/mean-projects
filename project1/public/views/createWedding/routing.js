var app = angular.module('mainModule.routing', ['ngRoute']);

app.config(function($routeProvider) {
	//console.log('createWedding config loaded');

	$routeProvider
	.when('/createWedding', {
		controller: 'createWeddingCtrl',
		templateUrl: 'views/createWedding/createwedding.tpl.html'
	})

	.when('/viewWedding', {
		//controller: 'viewWeddingCtrl',
		//templateUrl: 'views/viewWedding/viewwedding.tpl.html'
	});

});

app.controller('createWeddingCtrl', function() {
});


