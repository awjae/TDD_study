const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    price : {
        type: Number
    }
})

const Products = mongoose.model("Product", productSchema);

module.exports = Products;