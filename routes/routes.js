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

  //CREATE A NEW GAME
  app.post('/game', function (req, res) {
    fs.readFile( dirname + "/" + "games.json", 'utf8', function (err, data) {
        var games = JSON.parse(data);
        var count = Object.keys(games).length
        console.log(count)
        var id = count + 1
        var game =  req.body
        game.id = id

        games["game" + id ] = game
        save(games)
        res.json(game);
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

  //UPDATE A GAME WITH GIVEN ID
  app.put('/game/:id', function (req, res) {
    fs.readFile( dirname + "/" + "games.json", 'utf8', function (err, data) {
      games = JSON.parse(data);
      var id = req.params.id
      var name = req.body.name
      var game = games["game" + req.params.id]

      game.name = name

      save(games);
      res.json(game);
    });
  });

  //DELETES A GAME WITH GIVEN ID
  app.delete('/game/:id', function (req, res) {
    fs.readFile( dirname + "/" + "games.json", 'utf8', function (err, data) {
        var games = JSON.parse(data);
        var id = req.params.id;
        games["game" + req.params.id] = {}

        save(games)
        res.json(games);
    });
  });

};

//HelperMethod
function get_dirname(str) {
  var res = str.replace("routes", "db");
  return res
}

function save(games) {
  fs.writeFileSync(dirname + "/" + "games.json", JSON.stringify(games));
}
