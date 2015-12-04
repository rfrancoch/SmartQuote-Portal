(function() {
  'use strict';

  angular
    .module('smartquote.categories')
    .controller('CategoriesController', ['$scope', '$ionicPopup','ApiCategories', 'ApiSubscriptions',function($scope, $ionicPopup, apiResource, apiSubscription){
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

        var confirmPopup = $ionicPopup.confirm({
          title: 'SmartQuote App',
          template: '¿Desea subscribirse a la Categoria?'
        });
          confirmPopup.then(function(dataResponse) {
            if(dataResponse) {
              apiSubscription.save({ subscription: { id_user: 1, id_category: ctrlScope.selectedCategory.id } });
            } else { 
              }
          });
      };
    }]);
})();