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

});
