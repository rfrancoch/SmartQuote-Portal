(function() {
  'use strict';

  angular
    .module('smartquote.payment')
    .controller('PaymentController', ['$scope', function($scope) {

      console.log("inicializado payment");
      var vm = $scope;
      vm.years = [];
      vm.payment = {};

      vm.months =[]

      activate();

      function activate() {
        vm.payment.card_year = new Date().getFullYear();
        for (var i=0; i<11; i++){
          vm.years.push({
            value: i + vm.payment.card_year,
            text: i + vm.payment.card_year
          });
        }
      }

      
    }]);
})();