(function() {
  'use strict';

  angular
    .module('smartquote.login')
    .controller('LoginController',  ['$scope', '$ionicPopup', '$location', '$http', function($scope, $ionicPopup, $location, $http){
      var ctrlScope = $scope;

      ctrlScope.createAccount = function() {
        $ionicPopup.alert({
                           title: 'SmartQuote',
                           template: 'No disponible en este Prototipo'
                         }).then(function(res) {
             console.log('Se mostró la advertencia de prototipo');
           });
      };

      ctrlScope.login = function() {
        console.log("login submit : " + ctrlScope.email);
        $http.post('/talend/api/user/login',
          { 
            credentials: {
              email: ctrlScope.email,
              password: ctrlScope.password
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

      ctrlScope.logout = function() {
        window.localStorage.setItem("user", null);
      };


    }]);

})();