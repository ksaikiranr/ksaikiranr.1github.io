(function() {
  'use strict';

  angular.module('checker', [])

  .controller('checkController', function($scope){

    $scope.list = "";
    $scope.message = "";

    $scope.checkList = function() {
      var array = $scope.list.split(',');
      if($scope.list == "")
        $scope.message = "Please enter data first";
      else if(array.length <= 3)
        $scope.message = "Enjoy!";
      else
        $scope.message = "Too much!";
    }

  });
}

)();
