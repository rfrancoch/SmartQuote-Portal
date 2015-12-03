(function() {
  'use strict';

  angular
    .module('smartquote.provider')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('provider', {
        url: '/provider',
        templateUrl: 'app/provider/provider.options.html',
        controller: 'ProviderController'
      });
  }
})();