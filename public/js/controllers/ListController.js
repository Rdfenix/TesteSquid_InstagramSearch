angular.module('instaSearc').controller('ListController', function($scope, $routeParams, $http){
  console.log($routeParams.id);

  function searchAPI(tag, access_token){
    var InstaAPI = 'https://api.instagram.com/v1/tags/search?q=' + tag + '&access_token=' + access_token;
    var clientID = '2fd5122094aa4e09ac501cccb51d7f7b';
    var config = {
      params: {
        'client_id': clientID,
        'callback': 'JSON_CALLBACK',
        'count': 16
      }
    }

    $http.jsonp(InstaAPI, config).success(function(results){
      console.log(resultData);
      console.log(results);
      var dataLength = results.data;
      var resultData = results.data;

      if(dataLength){
        console.log(resultData);
        $scope.instaImages = resultData;
      }else {
        console.log("Sem Resultados");
      }
    }).error(function(){
      console.log("Nao encontrado");
    });
  }

  $scope.formData = {};

  $scope.submitForm = function(){
    console.log('submit');
    console.log($scope.formData.tagInput);
    var tag = $scope.formData.tagInput;
    var access_token = '1600226970.1677ed0.7dd441c865b2457980361f13be0eb04b';
    searchAPI(tag, access_token);
    console.log("pesquisando pela " + tag);
  };

});
