var mongoose = require('mongoose');
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router


var User = mongoose.model('User');

router.get('/users', function(req, res, next) {
console.log("Get Users");
  User.find(function(err, users){
    if(err){ return next(err); }

    res.json(users);
  });
});

router.post('/users', function(req, res, next) {
console.log(req.body);

  var user = new User(req.body);

  user.save(function(err, user){
    if(err){ return next(err); }

    res.json(user);
  });
});