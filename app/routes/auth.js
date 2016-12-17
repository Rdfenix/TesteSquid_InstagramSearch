var passport          =  require('passport');

module.exports = function(app){
  app.get('/auth/instagram', passport.authenticate('instagram'));
  app.get('/auth/instagram/callback', passport.authenticate('instagram', {successRedirect: '/'}));
};
