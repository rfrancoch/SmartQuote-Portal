(function(){
    var homeCtl = angular.module('smartquote', ['ionic'])
	
	  homeCtl.controller('icons', function($scope){
      $scope.frontendicon1 = "need_buy_icon.png";
      $scope.frontendicon2 = "want_sell_icon.png";
    });

}());