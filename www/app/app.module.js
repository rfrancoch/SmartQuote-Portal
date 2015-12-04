(function() {
  'use strict';

  // Smart Quote App

  angular.module('smartquote', [
      'ionic',
      'ui.router',
      'ngResource',
      'smartquote.home',
      'smartquote.login',
      'smartquote.requisitions',
      'smartquote.subscriptions',
      'smartquote.categories',
      'smartquote.providers',
      'smartquote.clients'
    ]);

})();