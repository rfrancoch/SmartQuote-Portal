(function() {
  'use strict';

  angular
    .module('smartquote.categories')
    .factory('ApiCategories', function ($resource, TalendEndPoint) {
        return $resource(TalendEndPoint.url + '/api/category/:id', { id: '@id' }, 
          { 
            query:  {method:'GET', isArray:false}, 
            update: { method: 'PUT' } 
          });
    });

})();