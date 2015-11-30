(function(){
  'use strict';
  	
  	angular
  	  .module('smartquote.subscription')
  	  .factory('ApiSubscription', function ($resource){
  	  	return $resource('/talend/api/subscription/:id_user/:id_category', { id_user: '@user' },{ id_category: '@category' },
  	  	{

  	  		update: { method:'PUT' }

  	  	});
  	  });
})();