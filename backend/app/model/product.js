var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var productSchema = new Schema ({
    title: {type: String, index: true},
    quantity: Number,
    category: {type: String, index: true},
    price: Number,
    purchaseId: ObjectId
});

module.exports = mongoose.model('Product', productSchema);