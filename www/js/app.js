(function(){
    var app = angular.module('starter', ['ionic'])

    app.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')

      $stateProvider.state('home', {
        url: '/home',
        views: {
          home: {
          templateUrl: 'www/index.html'
          controller: 'mainController'
          }
        }
      })
    })
}());