(function() {
  'use strict';

  angular
    .module('smartquote',['smartquote.login','smartquote.categories','smartquote.subscription','smartquote.provider','smartquote.requisitions'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController'
        });      
      $urlRouterProvider.otherwise('/');      
    });

})();