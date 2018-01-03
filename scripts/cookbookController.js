var ngCookbook = angular
	.module('ngCookbook',[]);

	ngCookbook.controller('cookbookcontroller', function($scope, cookbookFactory) {
		$scope.cookBookdata;
		cookbookFactory.getCookbookdata().then(function(data) {
			$scope.cookBookdata = data.data;
			console.log('This is a Success.');
		}, function(error) {
			console.log(error);
			console.log("This is an Error.");
		});﻿

		// Toggle Off & On
		$scope.on = "on";
		$scope.off = "off";

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
		};
		$scope.popUpOn = function(){
			$scope.popToggle = "on";
		};
		$scope.popUpOff = function(){
			$scope.popToggle = "off";
		};
		$scope.tab1On = function(){
			$scope.sheet1On = "on";
			$scope.sheet2On = "off";
			$scope.sheet3On = "off";
			$scope.sheet4On = "off";
			$scope.tab1class = "ft-active";
			$scope.tab2class = "inactive";
			$scope.tab3class = "inactive";
			$scope.tab4class = "inactive";	
		};
		$scope.tab2On = function(){
			$scope.sheet1On = "off";
			$scope.sheet2On = "on";
			$scope.sheet3On = "off";
			$scope.sheet4On = "off";
			$scope.tab1class = "inactive";
			$scope.tab2class = "ft-active";
			$scope.tab3class = "inactive";
			$scope.tab4class = "inactive";
		};
		$scope.tab3On = function(){
			$scope.sheet1On = "off";
			$scope.sheet2On = "off";
			$scope.sheet3On = "on";
			$scope.sheet4On = "off";
			$scope.tab1class = "inactive";
			$scope.tab2class = "inactive";
			$scope.tab3class = "ft-active";
			$scope.tab4class = "inactive";
		};
		$scope.tab4On = function(){
			$scope.sheet1On = "off";
			$scope.sheet2On = "off";
			$scope.sheet3On = "off";
			$scope.sheet4On = "on";
			$scope.tab1class = "inactive";
			$scope.tab2class = "inactive";
			$scope.tab3class = "inactive";
			$scope.tab4class = "ft-active";
		};
		$scope.toggleSignUp = function(){
			$scope.signUpOn = "off";
		}
		$scope.toggleSignUpon = function(){
			$scope.signUpOn = "on";
		}

		$scope.toggleLogIn = function(){
			$scope.logIn = "on";
		}

		$scope.toggleLoginOn = function(){
			$scope.logIn = "off";
		}

		

}) // end cookbookController