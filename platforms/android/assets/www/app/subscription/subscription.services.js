(function(){
  'use strict';
  	
  	angular
  	  .module('smartquote.subscriptions')
  	  .factory('ApiSubscriptions', function ($resource, TalendEndPoint){
  	  	return $resource(TalendEndPoint.url + '/api/subscription/:id_user/:id_category', { id_user: '@id_user' }, { id_category: '@id_category' },
  	  	{

  	  		update: { method:'PUT' }

  	  	});
  	  });
})();