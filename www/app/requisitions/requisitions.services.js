(function() {
  'use strict';

  angular
    .module('smartquote.requisitions')
    .service('ApiRequisition', function ($http, TalendEndPoint) {
        this.setRequisition = function(requisition, succeedCallback, failedCallback){
          var day = requisition.limit_date.getDate();
          var month = requisition.limit_date.getMonth() + 1;
          var year = requisition.limit_date.getFullYear();
          var data = { requisition:{} };
          angular.copy(requisition, data.requisition);
          data.requisition.limit_date = year + (month < 10 ? "-0" : "-") + month + (day < 10 ? "-0" : "-") + day;
          $http.post(TalendEndPoint.url + '/api/requisition/', data)
            .then(
              succeedCallback, 
              failedCallback
            );
        };
        this.getRequisition =  function(id_requisition, callback) {
          if (id_requisition > 0) {
            var requisition = null;
            $http.get(TalendEndPoint.url + '/api/requisition/'+id_requisition)
              .then(function(response) {
                console.log('Success', response.statusText + "(" + response.status + ")");
                if (angular.isDefined(response.data) && angular.isDefined(response.data.requisitions)){
                  if (angular.isArray(response.data.requisitions)) {
                    requisition = response.data.requisitions[0];
                  } else {
                    requisition = response.data.requisitions;
                  }
                }
                if (angular.isFunction(callback))
                  callback(requisition);
              }, function(response) {
                console.log('Error', response.statusText + "(" + response.status + ")");
              });
          }
        };
        this.getRequisitionOffers =  function(id_requisition, callback) {
          var offers = [];
          $http.get(TalendEndPoint.url + '/api/requisition/'+id_requisition+'/offers')
            .then(function(response) {
              console.log('Success', response.statusText + "(" + response.status + ")");
              if (angular.isDefined(response.data) && angular.isDefined(response.data.offers)){
                if (angular.isArray(response.data.offers)) {
                  offers = response.data.offers;
                } else {
                  offers = offers.push(response.data.offers);
                }
              }
              if (angular.isFunction(callback))
                callback(offers);
            }, function(response) {
              console.log('Error', response.statusText + "(" + response.status + ")");
            });
        };
        return this;
    });

})();