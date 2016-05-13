// call the packages we need
var express = require('express'); // call express
var bodyParser = require('body-parser');
var app = express();  // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES FOR OUR API
var router =  require('./routes/routes.js')(app);

// START THE SERVER
var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
  console.log("[INFO] Magic happening on port: %s", port)
})
