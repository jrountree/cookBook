angular
	.module('ngCookbook')
	.factory('cookbookFactory', function($http) {

		function getCookbookdata() {
			return $http.get('data/data.json');
		}

		return {
			getCookbookdata: getCookbookdata
		}

	});
