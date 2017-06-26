(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowDownController', NarrowDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItems);
  function FoundItems() {
    var list = { templateUrl: 'items.thtml', scope: {  items: '<',   onRemove: '&'  }
    };
    return list;
  }

  NarrowDownController.$inject = ['MenuSearchService'];
  function NarrowDownController(MenuSearchService) {
    var menu = this;
    menu.found = [];
    menu.getMatchedMenuItems = function () {
      menu.found = []
      if (menu.searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
        promise.then(function (data) {
          menu.found = data;
        })
        .catch(function (error) {
          console.log("Error occured in promise!");
        });
      }
    };
    menu.removeItem = function (index) {
      menu.found.splice(index, 1);
      if (menu.found.length == 0) {
        menu.error = "Nothing found";
      }
    }
  };
  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
      }).then(function (result) {
        var items = result.data.menu_items;
        var foundItems = []
        for (var index = 0; index < items.length; index++) {
          if (items[index].description.indexOf(searchTerm) != -1) {
            foundItems.push(items[index]);
          }
        }
        return foundItems;
      });
    };
  };
})();
