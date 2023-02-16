(function () {
  'use strict';

  angular.module("myFirstApp",[])
  .controller("myFirstController",function($scope){
    $scope.name="Name?";
    $scope.sayName = function(){
      return $scope.name
    };

    $scope.length= function () {
      //return 2;
      return $scope.name.length;
    };

  })
})()
