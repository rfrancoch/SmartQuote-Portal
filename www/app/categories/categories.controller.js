(function() {
  'use strict';

  angular
    .module('smartquote.categories')
    .controller('CategoriesController', ['$scope', 'ApiCategories', function($scope, apiResource){
      var ctrlScope = $scope;
      
      ctrlScope.categories = [];
      ctrlScope.selectedCategory = {};

      apiResource.query(
        {}, 
        function(data){
          if (angular.isUndefined(data) || angular.isUndefined(data.categories)){
            ctrlScope.categories = [];            
          } else if (angular.isArray(data.categories)) {
            ctrlScope.categories = data.categories;
          } else {
            ctrlScope.categories = [];
            ctrlScope.categories.push(data.categories);
          }
        }, 
        function(response){
          console.log(response);
        });

      ctrlScope.isSelected = function(category){
        return ctrlScope.selectedCategory == category;
      };

      ctrlScope.selectCategory = function(category){
        ctrlScope.selectedCategory = category;
      };

    }]);

})();