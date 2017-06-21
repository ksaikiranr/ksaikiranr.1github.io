(function() {
  'use strict';

  var toBuyList = [
    {name: "cookies", quantity: 10},  {name: "eggs",quantity: 12},  {name: "bananas",quantity: 12}, {name: "pens",quantity: 20},  {name: "jars",quantity: 2}
  ];

  angular.module('checker', [])

  .controller('shopListController', function($scope){

    $scope.toBuyList = toBuyList;
    $scope.boughtList = [];
    $scope.message1 = "Everything is bought!";
    $scope.message2 = "Nothing bought yet"

    //console.log($scope.toBuyList);


    $scope.clicked = function(item){

      for(var i=0; i< $scope.toBuyList.length;i++)
        if($scope.toBuyList[i].name == item.name){
          console.log($scope.toBuyList[i]);
          $scope.toBuyList.splice(i,1);
          $scope.boughtList.push(item);
          break;
        }
    }
  })

})();
