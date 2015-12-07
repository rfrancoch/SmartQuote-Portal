(function() {
  'use strict';

  angular
    .module('smartquote')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController'
        })
        .state('logout', {
          url: '/logout',
          controller: 'LogoutController'
        });      
      $urlRouterProvider.otherwise('/');      
    });

})();