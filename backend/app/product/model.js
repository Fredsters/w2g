var mongoose = require('mongoose');
var schema = mongoose.Schema;

var productSchema = new Schema ({
    title: {type: String, index: true},
    quantity: Number,
    category: {type: String, index: true},,
    price: Number,
    purchaseId: ObjectId
});

var product = mongoose.model('Product', productSchema);