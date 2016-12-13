angular.module('instaSearc').controller('SearchController', function($scope, List){
  $scope.total = 0;
  $scope.lists = [];
  $scope.mensagem = {texto: ''};

  function searcItem(){
    List.query(function(lists){
      $scope.lists = lists;
      $scope.mensagem = {};
    }, function(erro){
      $scope.mensagem = {
        texto: "Não foi possivel obter a lista"
      };
      console.log(erro);
    })
  }

  searcItem();

  $scope.remove = function(data){
    //console.log(data);
    List.delete({id: data._id}, searcItem, function(erro){
      $scope.mensagem = {
        texto: 'Não foi possivel excluir dado'
      };
      console.log(erro);
    });
  };

  $scope.save = function(){
    $scope.List.$save()
      .then(function(){
        $scope.mensagem = {texto: "Salvo com sucesso"};
        $scope.List = new List();
      })
      .catch(function(erro){
        $scope.mensagem = {texto: "Não foi possivel salvar"};
      });
  };
  /*$scope.list = [
      {"_id": 1,
        "nome": "Margaret_Judi",
        "imagem": "http://farm9.staticflickr.com/8440/7990247090_26e89bd641_k.jpg",
        "like": 3},
      {"_id": 2,
        "nome": "Marcos_Roberto",
        "imagem": "https://yt3.ggpht.com/-r-NV4YMr0Gc/AAAAAAAAAAI/AAAAAAAAAAA/sCZE_m9wXoU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
        "like": 5}
    ];*/

});
