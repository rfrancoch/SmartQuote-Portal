(function(){
    var app = angular.module('smartquote', ['ionic'])

    app.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('inicio', {
          url: "/inicio",
          abstract: true,
          templateUrl: 'index.html',
          controller: 'mainController'
        })
        .state('inicio.seleccionarcategoria',{
          url: "/seleccionarcategoria",
          views:{
            'seleccionarcategoria':{
              templateUrl: 'template/mainControllerHome/home.html',
              controller: 'mainControllerHome'
            }
        })
        .otherwise({ reditrectTo : "/inicio" });
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