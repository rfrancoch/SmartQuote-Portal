(function() {
  'use strict';

  angular
    .module('smartquote.requisitions')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('requisition-offer', {
        url: '/requisition/:id/offers',
        templateUrl: 'app/requisitions/requisitions.html',
        controller: 'RequisitionsController'
      });
  }
})();