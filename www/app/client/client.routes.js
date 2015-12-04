(function() {
  'use strict';

  angular
    .module('smartquote.clients')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('client', {
        url: '/client',
        templateUrl: 'app/client/client.options.html',
        controller: 'ClientsOptionsController'
      })
      .state('client-requisitions', {
        url: '/client/requisitions',
        templateUrl: 'app/client/client.requisitions.html',
        controller: 'ClientsRequisitionsController'
      })
      .state('client-new-requisition', {
        url: '/client/requisitions/new',
        templateUrl: 'app/client/client.requisition.new.html',
        controller: 'ClientsNewRequisitionController'
      });
  }
})();