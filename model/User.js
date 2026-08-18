// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "Name is required"],
//             trim: true
//         },
//         email: {
//             type: String,
//             required: [true, "Email is required"],
//             unique: true,
//             lowercase: true,
//             trim: true
//         },
//         password: {
//             type: String,
//             required: [true, "Password is required"],
//             minlength: 6
//         },
//         phone: {
//             type: Number,
//             trim: true,
//             default: ""
//         },
//         role: {
//             type: String,
//             enum: ["user", "admin"],
//             default: "user"
//         },
//         address: {
//             street: { type: String, default: "" },
//             city: { type: String, default: "" },
//             state: { type: String, default: "" },
//             pincode: { type: String, default: "" }
//         }
//     },
//     wishlist: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Product" // Aapke Product model ka exact name yahan hona chahiye
//         }
//     ],
//     { 
//         timestamps: true // Automatically adds createdAt and updatedAt fields
//     },
// );

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6
        },
        phone: {
            type: Number,
            trim: true,
            default: ""
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        address: {
            street: { type: String, default: "" },
            city: { type: String, default: "" },
            state: { type: String, default: "" },
            pincode: { type: String, default: "" }
        },
        // FIX: Wishlist ko fields ke object ke ANDAR rakha hai
        wishlist: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product" // Verify karein Product model name
            }
        ]
    },
    { 
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);

module.exports = mongoose.model("User", userSchema);