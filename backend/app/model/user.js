var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log("im UserSchema");

var UserSchema = new Schema({
    email: {type: String, default : "123@gmx.de"},
    name: {type: String, default : "John Doe"},
    password: {type: String},
    phone: {type: String}
});

module.exports = mongoose.model('User', UserSchema);

