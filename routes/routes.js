var fs = require("fs");

module.exports = function(app){

  var dirname = get_dirname(__dirname)

  //ROOT PATH
  app.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  //GET A LIST OF ALL GAMES
  app.get('/all', function (req, res) {
    res.end();
  });

  //CREATE A NEW GAME
  app.post('/game', function (req, res) {
    res.end();
  });

  //SHOW A GAME WITH GIVEN ID
  app.get('/game/:id', function (req, res) {
    res.end();
  });

  //UPDATE A GAME WITH GIVEN ID
  app.put('/game/:id', function (req, res) {
    res.end();
  });

  //DELETES A GAME WITH GIVEN ID
  app.delete('/game/:id', function (req, res) {
    res.end();
  });

};

//HelperMethod
function get_dirname(str) {
  var res = str.replace("routes", "db");
  return res
}
