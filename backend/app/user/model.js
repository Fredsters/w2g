var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    name: String,
    password: String,
    phone: String
});

var user = mongoose.model('User', userSchema);