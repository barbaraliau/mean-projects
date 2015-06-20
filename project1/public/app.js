var app = angular.module('mainModule', ['ngRoute', 'mainModule.dashboard', 'mainModule.routing', 'mainModule.createWedding', 'mainModule.newCouple', 'mainModule.newWedding', 'mainModule.newReception', 'mainModule.newRegistry', 'mainModule.newPhotos', 'mainModule.newGuestlist']);


app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		redirectTo: '/dashboard'
	})
	.otherwise ({
		redirectTo: '/dashboard'
	});

});