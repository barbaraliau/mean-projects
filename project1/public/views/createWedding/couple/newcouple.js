var app = angular.module('mainModule.newCouple', ['ngRoute']);


app.controller('newCoupleCtrl', function($scope, $location) {
	
	// GET request here


	// POST request here
	$scope.addCoupleBtnClicked = function() {
		console.log('Add couple button is clicked');

	}

	// UPDATE request here
	$scope.editCoupleBtnClicked = function() {
		console.log('Edit couple button is clicked');

	}

	// CANCEL request here
	$scope.cancelCoupleBtnClicked = function() {
		console.log('Cancel couple button is clicked');
		$location.path('createWedding');
	}

});

