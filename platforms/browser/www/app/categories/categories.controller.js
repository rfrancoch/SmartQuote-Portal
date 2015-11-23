(function() {
  'use strict';

  angular
    .module('smartquote.categories')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['$scope'];

  /* @ngInject */
  function CategoriesController($scope) {
    var vm = $scope;

    vm.categories = [
      {'id' : 1, 'name' : 'Artículos para Oficina'},
      {'id' : 2, 'name' : 'Alimentos'},
      {'id' : 3, 'name' : 'Hogar'},
      {'id' : 4, 'name' : 'Otros'},
      {'id' : 5, 'name' : 'Relleno'}
    ];
    vm.selectedCategory = 3;

    vm.selectCategory = selectCategory;


    activate();

    ////////////////

    function activate() {
    }

    function selectCategory(category) {
      vm.selectedCategory = category.id;
    }
  }
})();