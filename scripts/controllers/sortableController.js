$('.list-group-item').sortable({placeholder: "ui-state-highlight",helper:'clone'});

/*angular.module('myApp', ['ng-sortable'])
    .controller('demo', ['$scope', function ($scope) {
        $scope.items = [{'name':'learn Sortable',
                      'id':'use gn-sortable',
                     'dance':'Enjoy'},
                       {'name':'holy hell',
                      'id':'use gn-sortable',
                     'dance':'Enjoy'},
                       {'name':'rabbit',
                      'id':'use gn-sortable',
                     'dance':'Enjoy'}];
    }]);



var sortApp = angular.module('sortableApp', ['ui.sortable']);

sortApp.controller('sortableController', function ($scope) {
  var tmpList = [$scope.cookBookdata];
  
 
  $scope.list = tmpList;
  
  
  $scope.sortingLog = [];
  
  $scope.sortableOptions = {
    update: function(e, ui) {
      var logEntry = tmpList.map(function(i){
        return i.value;
      }).join(', ');
      $scope.sortingLog.push('Update: ' + logEntry);
    },
    stop: function(e, ui) {
      // this callback has the changed model
      var logEntry = tmpList.map(function(i){
        return i.value;
      }).join(', ');
      $scope.sortingLog.push('Stop: ' + logEntry);
    }
  };
})


angular.module( "ngCookbook", [ "ui.sortable" ] )

	.controller('sortableController',function($scope) {
			$scope.recipeItems = $scope.cookBookdata;
	})

*/