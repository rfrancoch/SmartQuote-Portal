(function() {
  'use strict';

  angular
    .module('smartquote.providers')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('provider', {
        url: '/provider',
        templateUrl: 'app/provider/provider.options.html',
        controller: 'ProviderOptionsController'
      })      
      .state('provider-offer', {
        url: '/provider/offer',
        templateUrl: 'app/provider/provider.offer.html',
        controller: 'ProviderOfferController'
      })
      .state('provider-subscriptions', {
        url: '/provider/subscriptions',
        templateUrl: 'app/provider/provider.subscriptions.html',
        controller: 'ProviderSubscriptionsController'
      });
  }
})();