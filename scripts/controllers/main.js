angular.module('ngCookbook')

.controller('editcontroller',['$scope',function($scope){
		$scope.usrSelectedItem = "Ingredients";
		$scope.tab1 = "active";
    	$scope.tab2 = "inactive";
    	$scope.tab3 = "inactive";
    	$scope.tab4 = "inactive";
		$scope.liGroup01 = "on";
		$scope.liGroup02 = "off";
		$scope.liGroup03 = "off";
		$scope.liGroup04 = "off";
		
		

		$scope.usrSelect = function(value) {
			$scope.usrSelectedItem = value;
			console.log(value);
			//$scope.output;
			$scope.$watch($scope.usrSelectedItem, function () {
			        if (value == "Ingredients") {
			        	// Tab Change
			        	$scope.tab1 = "active";
			        	$scope.tab2 = "inactive";
			        	$scope.tab3 = "inactive";
			        	$scope.tab4 = "inactive";
			        	// Edit Field Changes
			        	$scope.sheet1On = "on";
						$scope.sheet2On = "off";
						$scope.sheet3On = "off";
						$scope.sheet4On = "off";
						// List Field Changes
						$scope.liGroup01 = "on";
						$scope.liGroup02 = "off";
						$scope.liGroup03 = "off";
						$scope.liGroup04 = "off";
					};			            
			    	if (value == "Tools") {
			    		// Tab Change
			        	$scope.tab1 = "inactive";
			        	$scope.tab2 = "active";
			        	$scope.tab3 = "inactive";
			        	$scope.tab4 = "inactive";
			        	// Edit Field Changes
			        	$scope.sheet1On = "off";
						$scope.sheet2On = "on";
						$scope.sheet3On = "off";
						$scope.sheet4On = "off";
						// List Field Changes
						$scope.liGroup01 = "off";
						$scope.liGroup02 = "on";
						$scope.liGroup03 = "off";
						$scope.liGroup04 = "off";
			        };
			       /* if (value == "Steps") {
			        	// Tab Change
			        	$scope.tab1 = "inactive";
			        	$scope.tab2 = "inactive";
			        	$scope.tab3 = "active";
			        	$scope.tab4 = "inactive";
			        	// Edit Field Changes
			        	$scope.sheet1On = "off";
						$scope.sheet2On = "off";
						$scope.sheet3On = "on";
						$scope.sheet4On = "off";
						// List Field Changes
						$scope.liGroup01 = "off";
						$scope.liGroup02 = "off";
						$scope.liGroup03 = "on";
						$scope.liGroup04 = "off";
			        };*/
			         if (value == "Specs") {
			         	// Tab Change
			        	$scope.tab1 = "inactive";
			        	$scope.tab2 = "inactive";
			        	$scope.tab3 = "active";
			        	$scope.tab4 = "inactive";
			        	// Edit Field Changes
			        	$scope.sheet1On = "off";
						$scope.sheet2On = "off";
						$scope.sheet3On = "off";
						$scope.sheet4On = "on";
						// List Field Changes
						$scope.liGroup01 = "off";
						$scope.liGroup02 = "off";
						$scope.liGroup03 = "off";
						$scope.liGroup04 = "on";
			        }

				});
		}; // end usrSelect


		$scope.addItemToList = function(){
			if ($scope.usrSelectedItem == 'Ingredients') {
				console.log("add ingredient");
				$scope.recipe.ingredients.push({'type':$scope.newIngredient,'measure':$scope.newQty,'measureType':$scope.newType,'done':false});
				$scope.newIngredient = '';
				$scope.newQty = '';
				$scope.newType = '';
				console.log("This is your selection: " + $scope.usrSelectedItem);
			};
			if ($scope.usrSelectedItem == 'Tools') {
				console.log("add tool");
				$scope.recipe.tools.push({'tool':$scope.newTool,'use':$scope.newToolUse,'done':false})
				$scope.newToolUse = '';
				$scope.newTool = '';
			};
			if ($scope.usrSelectedItem == 'Steps') {
				console.log("add step");	
				$scope.recipe.directions.push({'header':$scope.newStep,'ptag':$scope.newStepData,'done':false})
				$scope.newStep = '';
				$scope.newStepData = '';
			};
			if ($scope.usrSelectedItem == 'Specs') {
				console.log("add step");
				$scope.recipe.specs.push({'specName':$scope.newSpecName,'specData':$scope.newSpecData})
				$scope.newSpecName = '';
				$scope.newSpecData = '';
					
			};
		}

		$scope.clearitem = function(){
			$scope.recipe.ingredients = $scope.recipe.ingredients.filter(function(item){
				return !item.done
			})
			$scope.recipe.tools = $scope.recipe.tools.filter(function(item){
				return !item.done
			})
			$scope.recipe.directions = $scope.recipe.directions.filter(function(item){
				return !item.done
			})
			$scope.recipe.specs = $scope.recipe.specs.filter(function(item){
				return !item.done
			})
		}

		
		
}]) // END editController

 // STAR RATINGS
.controller('rateCtrl',['$scope',function($scope){
	$scope.starFull = '<li class="star">\u2605</li>';
	$scope.starEmpty = '<li class="star">\u2606</li>';
	$scope.starRate = Math.round($scope.recipe.stars);

	if ($scope.starRate == 1) {
		$scope.starRating= $scope.starFull + $scope.starEmpty + $scope.starEmpty + $scope.starEmpty + $scope.starEmpty;
	}
	if ($scope.starRate == 2) {
		$scope.starRating= $scope.starFull + $scope.starFull + $scope.starEmpty + $scope.starEmpty + $scope.starEmpty;
	}

	if ($scope.starRate == 3) {
		$scope.starRating= $scope.starFull + $scope.starFull + $scope.starFull + $scope.starEmpty + $scope.starEmpty;
	}

	if ($scope.starRate == 4) {
		$scope.starRating= $scope.starFull + $scope.starFull + $scope.starFull + $scope.starFull + $scope.starEmpty;
	}

	if ($scope.starRate == 5) {
		$scope.starRating= $scope.starFull + $scope.starFull + $scope.starFull + $scope.starFull + $scope.starFull;
	}

}])// END Stars

 // Image Display
	.controller('imgNav',['$scope',function($scope){
		$scope.imagesUrl = [	
				$scope.recipe.imageList[0].imgUrl,
				$scope.recipe.imageList[1].imgUrl,
				$scope.recipe.imageList[2].imgUrl,
				$scope.recipe.imageList[3].imgUrl,
				$scope.recipe.imageList[4].imgUrl,
				$scope.recipe.imageList[5].imgUrl
				]

		$scope.currentImageIdx = 0;

		console.log($scope.imagesUrl[$scope.currentImageIdx]);

		$scope.imgSelect = function(obj){
			console.log(obj);
			$scope.currentImageIdx = obj.currentTarget.attributes.data.value;
			console.log($scope.currentImageIdx + " testing");
			$scope.imgDisplay = $scope.recipe.imageList[$scope.currentImageIdx].imgUrl;
		}

		$scope.imgDisplay = $scope.recipe.imageList[$scope.currentImageIdx].imgUrl;
}])
