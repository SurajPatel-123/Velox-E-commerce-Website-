const mongoose = require("mongoose");

// const cartItemSchema = new mongoose.Schema({
//     product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//         required: true
//     },
//     quantity: {
//         type: Number,
//         default: 1,
//         min: 1
//     }
// });
// models/cart.js
// const cartItemSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     items: [
//         {
//             product: { 
//                 type: mongoose.Schema.Types.ObjectId, 
//                 ref: 'Product' // 👈 Model ka naam exactly 'Product' hi hona chahiye!
//             },
//             quantity: { type: Number, default: 1 }
//         }
//     ]
// });
// const cartSchema = new mongoose.Schema({
//     items: {
//         type: [cartItemSchema],
//         default: []
//     }
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model("Cart", cartSchema);

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, default: 1 }
        }
    ]
}, { timestamps: true });
module.exports = mongoose.model("Cart", cartSchema);