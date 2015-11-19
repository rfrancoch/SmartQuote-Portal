(function() {
  'use strict';

  angular
    .module('smartquote.requisitions')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('requisitions', {
        url: '/requisitions',
        templateUrl: 'app/requisitions/requisitions.html',
        controller: 'RequisitionsController',
        controllerAs: 'ctrl'
      });
  }
})();