/**
Teste para verificar se a função esta recebendo o json produzido.
*/
var list = [
  {_id: 1, nome: 'Margaret_Judi', imagem: 'http://farm9.staticflickr.com/8440/7990247090_26e89bd641_k.jpg', like: 3},
  {_id: 2, nome: 'Marcos_Roberto', imagem: 'https://yt3.ggpht.com/-r-NV4YMr0Gc/AAAAAAAAAAI/AAAAAAAAAAA/sCZE_m9wXoU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', like: 10}
];
module.exports = function(app){
  var Result = app.models.result;

  var controller = {};//objeto que sera copulado pelas funções abaixo.

  controller.listResults = function(req, res){
    Result.find().exec()
      .then(function(list){
        res.json(list);
      }, function(erro){
        console.log(erro);
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

  controller.removeResult = function(req, res){};

  return controller
};
