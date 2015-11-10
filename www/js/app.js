(function(){
    var app = angular.module('starter', ['ionic'])

    app.angularRoutingApp.config(function($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl : 'www/index.html',
            controller  : 'mainController'
        })
    });

    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
      
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })
}());