var fs = require("fs");

var dirname = get_dirname(__dirname)

module.exports = function(app){

  //ROOT PATH
  app.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  //GET A LIST OF ALL GAMES
  app.get('/games', function (req, res) {
    fs.readFile( dirname + "/" + "games.json", 'utf8', function (err, data) {
      games = JSON.parse(data);
      res.json(games);
    });
  });

  //SHOW A GAME WITH GIVEN ID
  app.get('/game/:id', function (req, res) {
    fs.readFile( dirname + "/" + "games.json", 'utf8', function (err, data) {
      games = JSON.parse(data);
      var game = games["game" + req.params.id]
      res.json(game);
    });
  });

};

////////////////////////////////////////////////////////////////////////////////
//                  H e l p e r   M e t h o d s                               //
////////////////////////////////////////////////////////////////////////////////

function get_dirname(str) {
  var res = str.replace("routes", "db");
  return res
}
