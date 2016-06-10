// call the packages we need
var express = require('express'); // call express
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();  // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 // defining app using express

app.use(cors());

// ROUTES FOR OUR API
var router =  require('./routes/routes.js')(app);

app.use(function(req, res, next) {
  res.status(404).send('[404] Say whaaaaaaat???');
});

// START THE SERVER
var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
  console.log("[INFO] Magic happening on port: %s", port)
})
