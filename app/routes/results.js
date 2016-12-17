function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não Autorizado');
    }
}

module.exports = function(app){
  var controller = app.controllers.results;

  //importa a função que lista os resultados para a url /results
  app.route('/results')
    .get(verificaAutenticacao, controller.listResults);

  app.route('/results/:id')
    .get(verificaAutenticacao, controller.getResult)
    .delete(verificaAutenticacao, controller.removeResult);
};
