(function(){
    var app = angular.module('starter', ['ionic'])
	
	  app.controller('smartLogo', function($scope){
      $scope.frontendlogo = "smart_quote_logo.png";
    });

    app.controller('backgroundInitial', function($scope){
      $scope.frontendbackground = "background.png";
    });

    app.controller('button', function($scope, $routeParams, $location){
      $scope.buttonname = "Create Account";
      $scope.go = function(){
        $window.location.href = ' / ';
      }
    });
 
}());