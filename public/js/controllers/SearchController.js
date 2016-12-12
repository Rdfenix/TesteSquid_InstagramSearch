angular.module('instaSearc').controller('SearchController', function($scope){
  $scope.total = 0;
  var vm = this;

  $scope.list = [
      {"_id": 1,
        "nome": "Margaret_Judi",
        "imagem": "http://farm9.staticflickr.com/8440/7990247090_26e89bd641_k.jpg",
        "like": 3},
      {"_id": 2,
        "nome": "Marcos_Roberto",
        "imagem": "https://yt3.ggpht.com/-r-NV4YMr0Gc/AAAAAAAAAAI/AAAAAAAAAAA/sCZE_m9wXoU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
        "like": 5}
    ];

});
