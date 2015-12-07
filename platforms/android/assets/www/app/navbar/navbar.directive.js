(function() {
  'use strict';

  angular
    .module('smartquote')
    .directive('smartquoteNavbar', smartquoteNavbar);

  smartquoteNavbar.$inject = [];

  /* @ngInject */
  function smartquoteNavbar () {
    var directive = {
      controller: 'NavbarController',
      restrict: 'E',
      templateUrl: 'app/navbar/navbar.html',
      scope: {
        activeTab: '=activeTab'
      }
    };
    return directive;
  }
})();