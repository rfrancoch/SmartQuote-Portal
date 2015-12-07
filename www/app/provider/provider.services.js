(function() {
  'use strict';

  angular
    .module('smartquote.providers')
    .service('ApiProviders', function ($http, TalendEndPoint) {
        this.getDeliveryTypes = function(callback){
              if (angular.isFunction(callback))
                callback(['Entrega en sucursal', 'Entrega al Domiciio', 'Entrega en local']); 
        };
        this.setOffer = function(offer, succeedCallback, failedCallback){
          $http.post(TalendEndPoint.url + '/api/offer/',
            {
              offer: offer
            })
            .then(
              succeedCallback, 
              failedCallback
            );
        };
        this.getSubscriptions =  function(id_user, callback) {
          var categories = [];
          $http.get(TalendEndPoint.url + '/api/user/'+id_user+'/categories')
            .then(function(response) {
              console.log('Success', response.statusText + "(" + response.status + ")");
              if (angular.isDefined(response.data) && angular.isDefined(response.data.categories)){
                if (angular.isArray(response.data.categories)) {
                  categories = response.data.categories;
                } else {
                  categories.push(response.data.categories);
                }
              }
              if (angular.isFunction(callback))
                callback(categories);              
            }, function(response) {
              console.log('Error', response.statusText + "(" + response.status + ")");
            });
        };
        this.getRequisitions =  function(id_user, callback) {
          var requisitions = [];
          $http.get(TalendEndPoint.url + '/api/user/'+id_user+'/requisitions/foroffer')
            .then(function(response) {
              console.log('Success', response.statusText + "(" + response.status + ")");
              if (angular.isDefined(response.data) && angular.isDefined(response.data.requisitions)){
                if (angular.isArray(response.data.requisitions)) {
                  requisitions = response.data.requisitions;
                } else {
                  requisitions.push(response.data.requisitions);
                }
              }
              if (angular.isFunction(callback))
                callback(requisitions);              
            }, function(response) {
              console.log('Error', response.statusText + "(" + response.status + ")");
            });
        };
        return this;
    });

})();