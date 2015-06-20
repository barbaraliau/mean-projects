var app = angular.module('mainModule.viewWedding', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/viewWedding', {
		controller: 'viewWeddingCtrl',
		templateUrl: 'views/viewWedding/viewwedding.tpl.html'
	});
});

app.controller('viewWeddingCtrl', function($scope, $location) {
	$scope.coupleBtnClicked = function() {
		$location.path('views/couple/couple.tpl.html');
	}
});