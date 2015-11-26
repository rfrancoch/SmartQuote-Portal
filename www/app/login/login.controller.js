(function() {
  'use strict';

  angular
    .module('smartquote.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope'];

  /* @ngInject */
  function LoginController($scope) {
    var vm = $scope;

    vm.email  = {
        text: 'me@example.com'
      };

    activate();

    ////////////////

    function activate() {
    }
  }
})();