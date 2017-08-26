// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Adds console.log flair for easier reading on reporting
const chalk = require('chalk');

// Require Article Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();

app.set( 'port', process.env.PORT || 3000 );

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration, connection and success/error handler
mongoose.connect("mongodb://127.0.0.1/NYT-React-data");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log(chalk.bold.gray("Mongoose connection error: "), chalk.redBright(err));
});

db.once("open", function() {
  console.log(chalk.bold.bgYellowBright(" ** Mongoose connection successful ** "));
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body.location);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Article.create({
    location: req.body.location,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

// -------------------------------------------------

// Listener
app.listen(app.get('port'), function(err) {
  if (err) {
    console.error(chalk.bold.gray("No connection made "), chalk.redBright(err));
  }
  (chalk.bgYellow('Hello, running on port: ') + app.get('port'));
});
