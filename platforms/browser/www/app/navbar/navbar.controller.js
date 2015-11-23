(function() {
  'use strict';

  angular
    .module('smartquote')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope'];

  /* @ngInject */
  function NavbarController($scope) {
    var vm = $scope;

    activate();

    ////////////////

    function activate() {
    }
  }
})();