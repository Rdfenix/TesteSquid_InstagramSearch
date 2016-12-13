/**
Teste para verificar se a função esta recebendo o json produzido.
*/
var list = [
  {_id: 1, nome: 'Margaret_Judi', imagem: 'http://farm9.staticflickr.com/8440/7990247090_26e89bd641_k.jpg', like: 3},
  {_id: 2, nome: 'Marcos_Roberto', imagem: 'https://yt3.ggpht.com/-r-NV4YMr0Gc/AAAAAAAAAAI/AAAAAAAAAAA/sCZE_m9wXoU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', like: 10}
];

var list2 = [
  {_id: 1, nome: 'Margaret_Judi', imagem: 'http://farm9.staticflickr.com/8440/7990247090_26e89bd641_k.jpg', like: 3},
  {_id: 2, nome: 'Marcos_Roberto', imagem: 'https://yt3.ggpht.com/-r-NV4YMr0Gc/AAAAAAAAAAI/AAAAAAAAAAA/sCZE_m9wXoU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', like: 10},
  {_id: 3, nome: 'Michele', imagem: 'https://yt3.ggpht.com/-r-NV4YMr0Gc/AAAAAAAAAAI/AAAAAAAAAAA/sCZE_m9wXoU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', like: 10}
];

module.exports = function(){
  var controller = {};//objeto que sera copulado pelas funções abaixo.
  controller.listResults = function(req, res){
    res.json(list);
  };

  //função abaixo recupera somente um resultado de acordo com a url passada.
  controller.getResult = function(req, res){
    var idResult = req.params.id;
    var result = list.filter(function(result){
      return result._id = idResult;
    })[0];
    result ? res.json(result) : res.status(404).send('Não encontrado');
  };

  controller.removeResult = function(req, res){
    var idResult = req.params.id;
    list = list.filter(function(listy){
      return listy._id != idResult;
    });
    res.status(204).end();
  };

  return controller
};
