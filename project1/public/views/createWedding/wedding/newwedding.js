var app = angular.module('mainModule.newWedding', ['ngRoute']);


app.controller('newWeddingCtrl', function($scope, $location) {
	
	// GET request here

	// POST request here
	$scope.addWeddingBtnClicked = function() {
	 	console.log('Add wedding button is clicked');
	}

	// UPDATE request here
	$scope.editWeddingBtnClicked = function() {
		console.log('Edit wedding button is clicked');
	}

	// CANCEL request here
	$scope.cancelWeddingBtnClicked = function() {
		console.log('Cancel wedding button is clicked');
		$location.path('createWedding');
	}

	
});