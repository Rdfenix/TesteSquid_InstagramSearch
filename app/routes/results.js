module.exports = function(app){
  var controller = app.controllers.results;

  //importa a função que lista os resultados para a url /results
  app.route('/results')
    .get(controller.listResults);

  app.route('/results/:id')
    .get(controller.getResult)
    .delete(controller.removeResult);
};
