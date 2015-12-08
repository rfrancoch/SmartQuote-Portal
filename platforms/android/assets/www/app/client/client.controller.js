(function() {
  'use strict';

  angular
    .module('smartquote.clients')
    .controller('ClientsOptionsController', ['$scope', '$ionicPopup','ApiClients', function($scope, $ionicPopup, apiResource){
      var vm = $scope;

      vm.user = JSON.parse(window.localStorage.getItem("user"));
    }])
    .controller('ClientsRequisitionsController', ['$scope', '$ionicPopup','ApiClients', function($scope, $ionicPopup, apiResource){
      var vm = $scope;

      vm.user = JSON.parse(window.localStorage.getItem("user"));
      vm.requisitions = [];

      apiResource.getRequisitions(vm.user.id, function(data) {
        vm.requisitions = data;
      });

    }])
    .controller('ClientsNewRequisitionController', ['$scope','$location','$ionicPopup','ApiClients', 'ApiCategories', function($scope, $location, $ionicPopup, apiResource, apiCategories){
      var vm = $scope;

      vm.user = JSON.parse(window.localStorage.getItem("user"));
      vm.categories = [];
      vm.requisition = {
        id_user: vm.user.id
      };

      apiCategories.query(
        {}, 
        function(data){
          if (angular.isDefined(data) && angular.isDefined(data.categories)){
            if (angular.isArray(data.categories)) {
              vm.categories = data.categories;
            } else {
              vm.categories.push(data.categories);
            }
          }
        }, 
        function(response){
          console.log(response);
        });

      vm.save = function (){
        apiResource.setRequisition(vm.requisition,
          function(response){
            $ionicPopup.alert({
                title: 'SmartQuote',
                template: 'Nueva solicitud de compra enviada'
              })
              .then(function() {
                console.log(response);
                vm.requisition = {
                  id_user: vm.user.id
                };              
                $location.path("/client");
              });
          },
          function(response){
            $ionicPopup.alert({
                title: 'SmartQuote',
                template: 'No se pudo guardar la solicitud'
              })
              .then(function(res) {
                console.log(response);
              });
          })
      };

    }]);

})();