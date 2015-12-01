(function() {
  'use strict';

  angular
    .module('smartquote.categories')
    .controller('CategoriesController', ['$scope', '$ionicPopup','ApiCategories', 'ApiSubscription',function($scope, $ionicPopup, apiResource, apiSubscription){
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

      ctrlScope.showConfirmSubscribe = function() {
        var confirmPopup = $ionicPopup.confirm({
          title: 'SmartQuote App',
          template: '¿Desea subscribirse a la Categoria?'
        });
        confirmPopup.then(function(res) {
          if(res) {
            apiSubscription.save({ subscription: { id_user: 1, id_category: ctrlScope.selectedCategory.id } });
          } else { 
            }
        });
      };

      ctrlScope.subscribe = function(user){
        apiResource.save({id_user: user.id, id_category: ctrlScope.selectedCategory.id });
      };

    }]);

})();