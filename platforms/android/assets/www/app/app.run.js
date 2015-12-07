(function() {
  'use strict';

  angular
    .module('smartquote')
    .run(function($ionicPlatform, $rootScope, $state) {

      $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
        if (angular.isDefined(window.localStorage.getItem("user")) &&
          window.localStorage.getItem("user") != null) 
        {
          console.log("from: " + fromState + " to: " + next);
        } 
        else if (next.name !== 'login') {
            event.preventDefault();
            $state.go('login');
        }
      });

      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });

})();