(function() {
  'use strict';

  angular
    .module('smartquote.login')
    .controller('LoginController',  ['$scope', '$ionicPopup', '$location', '$http', 'TalendEndPoint', function($scope, $ionicPopup, $location, $http, TalendEndPoint){
      var vm = $scope;

      if (window.localStorage.getItem("user")) {
        var user = JSON.parse(window.localStorage.getItem("user"));
        if (user.id > 0) {
          if (user.isprovider) {
            $location.path("/provider");            
          } else {
            $location.path("/client");                        
          }
        }
      }

      vm.createAccount = function() {
        $ionicPopup.alert({
           title: 'SmartQuote',
           template: 'No disponible en este Prototipo'
         }).then(function(res) {
           console.log('Se mostró la advertencia de prototipo');
         });
      };

      vm.login = function() {
        console.log("login submit : " + vm.email);
        $http.post(TalendEndPoint.url + '/api/user/login',
          { 
            credentials: {
              email: vm.email,
              password: vm.password
            }
          })
          .then(function(response) {
            console.log('Success', response.statusText + "(" + response.status + ")");
            if (angular.isDefined(response.data) && 
              angular.isDefined(response.data.user) &&
              response.data.user.id > 0
              )
            {
              window.localStorage.setItem("user", JSON.stringify(response.data.user));
              $location.path("/provider");
            }
          }, function(response) {
            console.log('Error', response.statusText + "(" + response.status + ")");
            $ionicPopup.alert({
               title: 'SmartQuote',
               template: 'Credenciales incorrectas (' + response.statusText + ')'
            })
          });
      };

    }])
    .controller('LogoutController',  ['$scope', '$ionicPopup', '$location', '$http', function($scope, $ionicPopup, $location, $http){
      window.localStorage.removeItem("user");
      $location.path("/");                        
    }]);

})();