angular.module('ngCookbook')

.controller('editcontroller',['$scope',function($scope){
		$scope.addIngredient = function(){
			console.log("add ingredient");
			console.log($scope.newType);
			$scope.recipe.ingredients.push({'type':$scope.newIngredient,'measure':$scope.newQty,'measureType':$scope.newType,'done':false})
			$scope.newIngredient = '';
			$scope.newQty = '';
			$scope.newType = '';
			}

		$scope.clearitem = function(){
			$scope.recipe.ingredients = $scope.recipe.ingredients.filter(function(item){
				return !item.done
				console.log("clearitem");
			})
		}

		$scope.hoverChange = function() {
			$scope.done = {'background': 'red'};
			console.log("hoverMe");
		}

		$scope.editListItem = function() {
			console.log("Clicked Me!");

		}

		$scope.moveItem = function() {
			console.log("Clicked Move Item!");

		}

}])
