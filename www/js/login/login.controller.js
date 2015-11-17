(function(){
    var mainCtl = angular.module('smartquote', ['ionic'])
	
	  mainCtl.controller('smartLogo', function($scope){
      $scope.frontendlogo = "smart_quote_logo.png";
    });

    mainCtl.controller('backgroundInitial', function($scope){
      $scope.frontendbackground = "background.png";
    });

    mainCtl.controller('button', function($scope, $routeParams, $location){
      $scope.buttonname = "Create Account";
      $scope.go = function(){
        $window.location.href = ' / ';
      }
    });
 
}());