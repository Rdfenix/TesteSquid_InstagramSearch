module.exports = function(app){
  var controller = app.controllers.results;

  //importa a função que lista os resultados para a url /results
  app.get('/results', controller.listResults);
  app.get('/results/:id', controller.getResult);
};
