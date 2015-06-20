var app = angular.module('mainModule.newRegistry', ['ngRoute']);

app.controller('newRegistryCtrl', function($scope, $location) {
	
	// GET request here

	// POST request here
	$scope.addRegistryBtnClicked = function() {
	 
	}

	// UPDATE request here
	$scope.editRegistryBtnClicked = function() {


	}

	// CANCEL request here
	$scope.cancelRegistryBtnClicked = function() {
		console.log('Cancel registry button is clicked');
		$location.path('createWedding');
	}

	

});