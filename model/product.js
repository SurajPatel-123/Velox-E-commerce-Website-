// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     price: Number,
//     category: String,
//     image: String,
//     rating: Number
// });

// module.exports = mongoose.model("Product", productSchema);
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description:String,
    price: Number,
    category: String,
    image: String,
    rating:Number,
    // your schema fields...
});

// Explicitly pass "products" as 3rd parameter
module.exports = mongoose.model("Product", productSchema, "products");