(function() {
  'use strict';

  angular
    .module('smartquote.payment')
    .controller('PaymentController', PaymentController);

  PaymentController.$inject = [];

  /* @ngInject */
  function PaymentController() {
    var vm = this;

    activate();

    ////////////////

    function activate() {
    }
  }
})();