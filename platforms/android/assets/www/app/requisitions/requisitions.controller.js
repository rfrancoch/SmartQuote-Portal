(function() {
  'use strict';

  angular
    .module('smartquote.requisitions')
    .controller('RequisitionsController', RequisitionsController);

  RequisitionsController.$inject = ['$scope', '$stateParams','$ionicPopup', 'ApiRequisition', 'ApiCategories', 'ApiProviders'];

  /* @ngInject */
  function RequisitionsController($scope, $stateParams, $ionicPopup, apiResource, apiCategories, apiProviders) {
    var vm = $scope;

    vm.user = JSON.parse(window.localStorage.getItem("user"));
    vm.requisition = {};
    vm.offers = [];
    vm.delivery_types = [];

    vm.payOffer = function(offer) {

      vm.payment = {
        id_offer : offer.id,
        card_number : '',
        card_month : 1,
        card_year : 0,
        card_account_name : vm.user.name,
        amount : offer.amount,
        authorization  : '123456',
        transaction_id : '654321'
      }

      vm.payment.card_year = new Date().getFullYear();
      vm.years = [];
      for (var i=0; i<11; i++){
        vm.years.push({
          value: i + vm.payment.card_year,
          text: i + vm.payment.card_year
        });
      }
      vm.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: 
        'Tarjeta: <input type="number" ng-model="payment.card_number" required>{{payment.card_number_error}}<br/>'+
        'Mes: <select ng-model="payment.card_month" ng-options="(months.indexOf(m)+1) as m for m in months"></select> '+
        'A&ntilde;o: <select ng-model="payment.card_year" ng-options="y.value as y.text for y in years"></select>',
        title: 'Oferta ' + offer.id + ' ₡' + offer.amount,
        subTitle: 'Digite los datos para el pago',
        scope: $scope,
        buttons: [
          { text: 'Volver' },
          {
            text: '<b>Pagar</b>',
            type: 'button-positive',
            onTap: function(e) {
              console.log(vm.payment.card_number.toString().length);
              if (!vm.payment.card_number || vm.payment.card_number.toString().length < 15 || vm.payment.card_number.toString().length > 16) {
                vm.payment.card_number_error = "Número incorrecto, verifique."
                e.preventDefault();
              } else {
                vm.payment.card_number_error = ""
                console.log(vm.payment);
              }
            }
          }
        ]
      });
      /*
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      */
    };


    activate();

    //Initilization
    function activate() {
      apiProviders.getDeliveryTypes(function(data) {
        vm.delivery_types = data;
      });

      apiResource.getRequisition($stateParams.id, function(data){
        vm.requisition = data;
        apiCategories.get(
          {
            id: vm.requisition.id_category
          }, 
          function(data){
            if (angular.isDefined(data) && angular.isDefined(data.categories)){
              if (angular.isArray(data.categories)) {
                vm.requisition.category_title = data.categories[0].title;
              } else {
                vm.requisition.category_title = data.categories.title;
              }
            }
          }, 
          function(response){
            console.log(response);
          });
      });

      apiResource.getRequisitionOffers($stateParams.id, function(data){
        vm.offers = data;
        angular.forEach(vm.offers, function(value, key){
            value.priority = (vm.requisition.base_amount * value.amount / 100) * value.delivery_in_days;
        })
      });
    }
  }
})();