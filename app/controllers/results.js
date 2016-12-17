module.exports = function(app){
  var Result = app.models.result;

  var controller = {};//objeto que sera copulado pelas funções abaixo.

  //consulta no banco de dados atravez do model criado
  controller.listResults = function(req, res){
    Result.find().exec()
      .then(function(media){
        res.json(media);
      }, function(erro){
        console.error(erro);
        res.status(500).json(erro);
      });
  };

  //função abaixo recupera somente um resultado de acordo com a url passada.
  controller.getResult = function(req, res){
    var _id = req.params.id;
    Result.findById(_id).exec()
      .then(function(list){
        if(!list) throw new Error("Não encontrado");
        res.json(list);
      });
  };

  controller.removeResult = function(req, res){
    var _id = req.params.id;
    Result.remove({"_id": _id}).exec()
      .then(function(){
        res.status(204).end();
      }, function(erro){
        return console.log(erro);
      });
  };

  return controller
};
