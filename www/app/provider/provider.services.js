(function() {
  'use strict';

  angular
    .module('smartquote.provider')
    .factory('ApiProvider', function ($resource) {
        return $resource('/talend/api/user/:id', { id: '@id' }, 
          { 
            query:  {method:'GET', isArray:false}, 
            update: { method: 'PUT' } 
          });
    });

})();