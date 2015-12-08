(function() {
  'use strict';

  angular
    .module('smartquote.providers')
    .controller('ProviderOptionsController', ['$scope', '$ionicPopup','ApiProviders',function($scope, $ionicPopup, apiResource){
      var vm = $scope;
     
      vm.user = JSON.parse(window.localStorage.getItem("user"));

    }])
    .controller('ProviderOfferController', ['$scope','$location','$ionicPopup','ApiProviders',function($scope, $location, $ionicPopup, apiResource){
      var vm = $scope;
     
      vm.user = JSON.parse(window.localStorage.getItem("user"));
      vm.requisitions = [];
      vm.delivery_types = [];
      vm.offer = {
        id_user: vm.user.id
      };

      apiResource.getDeliveryTypes(function(data) {
        vm.delivery_types = data;
      });

      apiResource.getRequisitions(vm.user.id, function(data) {
        vm.requisitions = data;
      });

      vm.selectedRequisition = function(){
       var element = {};
        angular.forEach(vm.requisitions, function(value, key) {
            if (value != null && value['id'] == vm.offer.id_requisition) {
              element = value;
            }
        });
        return element;
      };

      vm.save = function (){
        apiResource.setOffer(vm.offer,
          function(response){
            $ionicPopup.alert({
                title: 'SmartQuote',
                template: 'Nueva oferta enviada'
              }).then(function() {
                console.log(response);
                vm.offer = {
                  id_user: vm.user.id
                };               
                $location.path("/provider");
              });
          },
          function(response){
            $ionicPopup.alert({
                title: 'SmartQuote',
                template: 'No se pudo guardar la oferta'
              }).then(function(res) {
                console.log(response);
              });
          })
      };

    }])
    .controller('ProviderSubscriptionsController', ['$scope', '$ionicPopup','ApiProviders', 'ApiCategories', 'ApiSubscriptions',function($scope, $ionicPopup, apiResource, apiCategories, apiSubscription){
      var vm = $scope;
      
      vm.user = JSON.parse(window.localStorage.getItem("user"));
      vm.categories = [];
      vm.subscriptions = [];

      apiResource.getSubscriptions(vm.user.id, function(data) {
        vm.subscriptions = data;
      });

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

      vm.isSelected = function(category){
        var element = null;
        angular.forEach(vm.subscriptions, function(value, key) {
            if (value != null && value['id'] == category.id) {
              element = value;
            }
        });
        return (element != null);
      };

      vm.subscribe = function(category) {
        $ionicPopup.confirm({
          title: 'SmartQuote',
          template: '¿Desea desuscribirse a '+category.title+'?'
        })
        .then(function(dataResponse) {
          if(dataResponse) {
            apiSubscription.delete({ 
                id_user: vm.user.id, 
                id_category: category.id 
              }, 
              function(data) {
                apiResource.getSubscriptions(vm.user.id, function(data) {
                  vm.subscriptions = data;
                });                 
              });
          }
        });        
      }

      vm.unsubscribe = function(category) {
        $ionicPopup.confirm({
          title: 'SmartQuote',
          template: '¿Desea suscribirse a '+category.title+'?'
        })
        .then(function(dataResponse) {
          if(dataResponse) {
            apiSubscription.save({
               subscription: { 
                  id_user: vm.user.id, 
                  id_category: category.id 
                }
              }, 
              function(data) {
                apiResource.getSubscriptions(vm.user.id, function(data) {
                  vm.subscriptions = data;
                });                 
              });
          }
        });        
      }

      vm.selectCategory = function(category){
        if (vm.isSelected(category)) {
          vm.subscribe(category);
        } else {
          vm.unsubscribe(category);
        }
      };
    }]);
})();