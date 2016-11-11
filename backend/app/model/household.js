var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var householdSchema = new Schema({
    name: String,
    users: [{user_id : ObjectId}],
    purchases : [{
      title:  String,
      date: { type: Date, default: Date.now },
      users: [{user_id : ObjectId}]
    }]
});

module.exports = mongoose.model('Household', householdSchema);

