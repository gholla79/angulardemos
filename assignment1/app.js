(function (){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope','$filter'];
  function LunchCheckController($scope, $filter){
    $scope.foodStr="";
    $scope.message= "";
    $scope.footNote ="";
    $scope.checkFoodItems = function () {
      $scope.footNote ="";
      var foodCount = $scope.foodStr.split(',').filter(word => word.trim().length > 0).length;
      //$scope.message = "Your are eating " + foodCount + " food items. ";
      if (foodCount <=3 ) {
        if(foodCount==0)
          $scope.message = "Please enter data first.";
          else
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        };

        if(foodCount < $scope.foodStr.split(',').length){
          $scope.footNote = " Note: empty items like ,, or , , are not counted.";
        }
    };
  }

})()
