var passport          =  require('passport');

module.exports = function(app){
  app.get('/auth/instagram', passport.authenticate('instagram'));
  app.get('/auth/instagram/callback', passport.authenticate('instagram', {successRedirect: '/'}));
  app.get('/logout', function(req, res){
    req.logOut();
    res.redirect('/');
  });
};
