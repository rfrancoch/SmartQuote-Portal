(function() {
  'use strict';

  // Smart Quote App

  angular.module('smartquote', [
      'ionic',
      'ui.router',
      'smartquote.home',
      'smartquote.login',
      'smartquote.requisitions',
      'smartquote.categories'
    ]);

})();