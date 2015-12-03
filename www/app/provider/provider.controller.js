(function() {
  'use strict';

  angular
    .module('smartquote.provider')
    .controller('ProviderController', ['$scope', '$ionicPopup','ApiProvider', 'ApiSubscription',function($scope, $ionicPopup, apiResource, apiSubscription){
      var ctrlScope = $scope;
      
      ctrlScope.providers = [];
      ctrlScope.selectedCategory = {};

      apiResource.query(
        {}, 
        function(data){
          if (angular.isUndefined(data) || angular.isUndefined(data.providers)){
            ctrlScope.providers = [];            
          } else if (angular.isArray(data.providers)) {
            ctrlScope.providers = data.providers;
          } else {
            ctrlScope.providers = [];
            ctrlScope.providers.push(data.providers);
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