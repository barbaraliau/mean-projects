var app = angular.module('mainModule.createWedding', ['ngRoute']);

app.config(function($routeProvider) {
	//console.log('createWedding config loaded');

	$routeProvider
	// .when ('/', {
	// 	redirectTo: '/newHome'
	//})
	// .when('/newHome', {
	// 	//controller: 'newHomeCtrl',
	// 	templateUrl: '/views/createWedding/newhome.tpl.html'
	// })
	.when('/newCouple', {
		controller: 'newCoupleCtrl',
		templateUrl: '/views/createWedding/couple/newcouple.tpl.html',
		//activeTab: 'newcouple'
	})
	.when('/newWedding', {
		controller: 'newWeddingCtrl',
		templateUrl: '/views/createWedding/wedding/newwedding.tpl.html',
		//activeTab: 'newwedding'
	})
	.when('/newReception', {
		controller: 'newReceptionCtrl',
		templateUrl: '/views/createWedding/reception/newreception.tpl.html',
		//activeTab: 'newreception'
	})
	.when('/newRegistry', {
		controller: 'newRegistryCtrl',
		templateUrl: '/views/createWedding/registry/newregistry.tpl.html'
	})
	.when('/newPhotos', {
		controller: 'newPhotosCtrl',
		templateUrl: '/views/createWedding/photos/newphotos.tpl.html'
	})
	.when('/newGuestlist', {
		controller: 'newGuestlistCtrl',
		templateUrl: '/views/createWedding/guestlist/newguestlist.tpl.html'
	})
	.otherwise(
		{redirectTo: '/'});
});




// app.controller('navCtrl', function($scope, $route) {
// 	//$scope.$route = $route;
// });
// }

// 	$scope.coupleBtnClicked = function() {
// 		//console.log('Couple button is clicked!');
// 		$location.path('couple')
// 	}

// 	$scope.weddingBtnClicked = function() {
// 		$location.path('wedding');
// 	}



// });
