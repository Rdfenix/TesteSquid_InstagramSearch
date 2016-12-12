/**
Teste para verificar se a função esta recebendo o json produzido.
*/
var list = [
  {_id: 1, nome: 'Margaret_Judi', imagem: 'http://farm9.staticflickr.com/8440/7990247090_26e89bd641_k.jpg'},
  {_id: 2, nome: 'Marcos_Roberto', imagem: 'https://yt3.ggpht.com/-r-NV4YMr0Gc/AAAAAAAAAAI/AAAAAAAAAAA/sCZE_m9wXoU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}
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
  return controller
};
