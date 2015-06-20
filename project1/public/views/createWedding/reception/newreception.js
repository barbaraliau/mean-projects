var app = angular.module('mainModule.newReception', ['ngRoute']);

app.controller('newReceptionCtrl', function($scope, $location) {
	
	// GET request here

	// POST request here
	$scope.addReceptionBtnClicked = function() {
	 
	}

	// UPDATE request here
	$scope.editReceptionBtnClicked = function() {


	}

	// CANCEL request here
	$scope.cancelReceptionBtnClicked = function() {
		console.log('Cancel reception button is clicked');
		$location.path('createWedding');
	}

	

});