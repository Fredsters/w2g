var mongoose = require('mongoose');
var schema = mongoose.Schema;

var householdSchema = new Schema({
    name: String,
    users: [{user_id : ObjectId}],
    purchases : [{
      title:  String,
      date: { type: Date, default: Date.now },
      users: [{user_id : ObjectId}]
    }]
});

var household = mongoose.model('Household', householdSchema);