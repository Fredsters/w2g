//Lets require/import the HTTP module
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var express = require("express");
var bodyParser = require('body-parser')
app = express();
app.set('port', 3000);
//var server = require('http').createServer(app);
require('./app/model/user');
require('./app/model/household');
require('./app/model/product');
var route = require('./app/routes/index')
var config = require('./config/config');
var userModel = require('mongoose').model('User')

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;


mongoose.connect('mongodb://localhost:27017/w2g', { config: { autoIndex: true } });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected");

  putSomeExampleData();
});



function putSomeExampleData () {
    console.log("putSomeExampleData");
}

app.get('/', function (req, res) {
  res.send('hello world')
})
/*
app.post('/users', function (req, res) {
  res.send('POST request to the homepage')
}) */
app.use(bodyParser.json());
app.use("/jojo", route);

app.listen(3000);
/*

app.post('/users', function(req, res, next) {
    console.log("in users");
  var user = new User(req.body);

  user.save(function(err, user){
    if(err){ return next(err); }

    console.log("Balalalalalalaalal Post")
    res.json(user);
  });
});
*/




/*
//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}


//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
}); */