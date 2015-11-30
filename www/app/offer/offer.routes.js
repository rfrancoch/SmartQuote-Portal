(function() {
  'use strict';

  angular
    .module('smartquote.offer')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('offer', {
        url: '/offer',
        templateUrl: 'app/offer/offer.html',
        controller: 'OfferController',
        controllerAs: 'ctrl'
      });
  }
})();