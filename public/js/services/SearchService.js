angular.module('instaSearc').factory('List', function($resource){
  return $resource('/results/:id');
});
