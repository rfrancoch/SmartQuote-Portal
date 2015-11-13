angular
  .module('smartquote')
  .config(config);


function config($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('inicio', {
          url: "/inicio",
          templateUrl: '../app/login/login.html',
          controller: 'login.controller'
        })
        .state('inicio.seleccionarcategoria',{
          url: "/seleccionarcategoria",
              templateUrl: '../app/home/home.html',
              controller: 'HomeController'
          })
    })();