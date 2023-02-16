(function (){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope','$filter'];
  function LunchCheckController($scope, $filter){
    $scope.foodStr="";
    $scope.message= "Waiting to see what all you ate..";
    $scope.checkFoodItems = function () {
      var foodCount = $scope.foodStr.split(',').filter(word => word.length > 0).length;
      $scope.message = "Your are eating " + foodCount + " food items. ";
      if (foodCount <=3 ) {
        if(foodCount==0)
          $scope.message += "Please eat something.";
          else
          $scope.message += "Good!";
        } else {
          $scope.message += "Too much!";
        }
    };
  }

})()
