(function() {
  'use strict';

  angular
    .module('smartquote.clients')
    .service('ApiClients', function ($http, TalendEndPoint) {
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
        this.getRequisitions =  function(id_user, callback) {
          var requisitions = [];
          $http.get(TalendEndPoint.url + '/api/user/'+id_user+'/requisitions')
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