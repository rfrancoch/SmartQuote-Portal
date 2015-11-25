(function() {
  'use strict';

  angular
    .module('smartquote.categories')
    .factory('ApiCategories', function ($resource) {
        return $resource('/talend/api/category/:id', { id: '@id' }, 
          { 
            query:  {method:'GET', isArray:false}, 
            update: { method: 'PUT' } 
          });
    });

})();