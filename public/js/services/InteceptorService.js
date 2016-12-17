angular.module('instaSearc').factory('myInteceptor', function($location, $q){
  var inteceptor = {
    responseError: function(resposta){
      if(resposta.status == 401){
        $location.path('/auth');
      }
      return $q.reject(resposta);
    }
  }
  return inteceptor;
});
