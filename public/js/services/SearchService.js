angular.module('instaSearc').factory('List', function($resource){
  return $resource('/results/:id');
});

//angular.module('instaSearc').factory();
