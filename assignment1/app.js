(function (){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.foodStr="";
    $scope.message= "";
    $scope.footNote ="";
    $scope.foodCount= -1;
    $scope.checkFoodItems = function () {
      $scope.footNote ="";
      $scope.foodCount = $scope.foodStr.split(',').filter(word => word.trim().length > 0).length;
      $scope.status="success";

      if ($scope.foodCount <=3 ) {
        if($scope.foodCount==0) {
          $scope.message = "Please enter data first";
          $scope.status="danger";
        }
        else
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        };

        if($scope.foodCount < $scope.foodStr.split(',').length){
          $scope.footNote = " Note: empty items like ,, or , , are not counted.";
        }
    };
  }

})()
