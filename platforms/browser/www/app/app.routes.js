(function() {
  'use strict';

  angular
    .module('smartquote')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }
})();