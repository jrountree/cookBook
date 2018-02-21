var ngCookbook = angular
	.module('ngCookbook',[ "ngSanitize" ]);

	ngCookbook.controller('cookbookcontroller', function($scope, cookbookFactory) {
		$scope.cookBookdata;
		cookbookFactory.getCookbookdata().then(function(data) {
			$scope.cookBookdata = data.data;
			console.log('This is a Success.');
		}, function(error) {
			console.log(error);
			console.log("Oops. Something broke.");
		});﻿

	// Toggle Off & On
		$scope.on = "on";
		$scope.off = "off";
		$scope.recipeActive = "active";
		$scope.editActive = "inactive";

		$scope.popupAddOn = function(){
			$scope.popupAddOff = "on";
		}

		$scope.popupAddOffbtn = function(){
			$scope.popupAddOff = "off";
		}

		$scope.toggleRecipeOn = function(){
			$scope.recipeOn = "on";
			$scope.editOn = "off";
			$scope.recipeActive = "active";
			$scope.editActive = "inactive";
		};
		$scope.toggleEditOn = function(){
			$scope.editOn = "on";
			$scope.recipeOn = "off";
			$scope.editActive = "active";
			$scope.recipeActive = "inactive";
			$scope.tab1class = "ft-active";
			$scope.tab1 = "inactive";
		};

		$scope.toggleSignUp = function(){
			$scope.signUpOn = "off";
		};
		$scope.toggleSignUpon = function(){
			$scope.signUpOn = "on";
		};

		$scope.toggleLogIn = function(){
			$scope.logIn = "on";
		};

		$scope.toggleLoginOn = function(){
			$scope.logIn = "off";
		};

}); // end cookbookController
