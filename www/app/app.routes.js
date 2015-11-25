(function() {
  'use strict';

  angular
    .module('smartquote')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }
})();