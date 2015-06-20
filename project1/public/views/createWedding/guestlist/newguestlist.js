var app = angular.module('mainModule.newGuestlist', ['ngRoute']);

app.controller('newGuestlistCtrl', function($scope, $location) {
	
	// GET request here

	// POST request here
	$scope.addGuestlistBtnClicked = function() {
	 
	}

	// UPDATE request here
	$scope.editGuestlistBtnClicked = function() {


	}

	// CANCEL request here
	$scope.cancelGuestlistBtnClicked = function() {
		console.log('Cancel guestlist button is clicked');
		$location.path('createWedding');
	}

	

});