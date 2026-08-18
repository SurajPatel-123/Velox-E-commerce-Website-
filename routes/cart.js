// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();

// const Product = require("../model/product");

// // 1. ADD TO CART
// // router.post("/add", async (req, res) => {
// //     try {
// //         const { productId, quantity = 1 } = req.body;

// //         if (!productId) {
// //             return res.status(400).json({ success: false, message: "Product ID is required" });
// //         }

// //         if (!mongoose.Types.ObjectId.isValid(productId)) {
// //             return res.status(400).json({ success: false, message: "Invalid Product ID" });
// //         }

// //         const product = await Product.findById(productId);
// //         if (!product) {
// //             return res.status(404).json({ success: false, message: "Product not found" });
// //         }

// //         if (!req.session.cart) req.session.cart = [];

// //         // String comparison secure karne ke liye String() convert kiya gaya hai
// //         const existingItem = req.session.cart.find(item => String(item.productId) === String(productId));

// //         if (existingItem) {
// //             existingItem.quantity += Number(quantity);
// //         } else {
// //             req.session.cart.push({ productId: String(productId), quantity: Number(quantity) });
// //         }

// //         req.session.save(err => {
// //             if (err) {
// //                 console.error("Session Save Error:", err);
// //                 return res.status(500).json({ success: false, message: "Session save failed" });
// //             }

// //             const cartCount = req.session.cart.reduce((sum, item) => sum + item.quantity, 0);
// //             res.json({ success: true, message: "Product added to cart", cartCount });
// //         });

// //     } catch (err) {
// //         console.error("Add Cart Error:", err);
// //         res.status(500).json({ success: false, message: "Internal Server Error" });
// //     }
// // });
// router.post("/add", async (req, res) => {
//     try {
//         const { productId, quantity } = req.body;
        
//         // 1. Session se User check karein
//         const user = req.session.user;
//         const userId = user ? (user._id || user.id) : null;

//         if (!userId) {
//             return res.status(401).json({ 
//                 success: false, 
//                 message: "Please login to add products to cart." 
//             });
//         }

//         const qty = Number(quantity) || 1;

//         // 2. Database me Cart Find / Create karein
//         let cart = await Cart.findOne({ userId: userId });

//         if (!cart) {
//             cart = new Cart({
//                 userId: userId,
//                 items: [{ product: productId, quantity: qty }]
//             });
//         } else {
//             const itemIndex = cart.items.findIndex(
//                 item => item.product.toString() === productId
//             );

//             if (itemIndex > -1) {
//                 cart.items[itemIndex].quantity += qty;
//             } else {
//                 cart.items.push({ product: productId, quantity: qty });
//             }
//         }

//         // 3. Save to MongoDB
//         await cart.save();
//         console.log("✅ Cart item saved to database!");

//         // AJAX Request ke liye JSON Response
//         return res.status(200).json({ 
//             success: true, 
//             message: "Product added to cart successfully!" 
//         });

//     } catch (error) {
//         console.error("Add to Cart Error:", error);
//         return res.status(500).json({ 
//             success: false, 
//             message: "Server Error: Unable to add product to cart." 
//         });
//     }
// });
// // 2. CART COUNT
// router.get("/count", (req, res) => {
//     const cart = req.session.cart || [];
//     const count = cart.reduce((sum, item) => sum + item.quantity, 0);
//     res.json({ success: true, count });
// });

// // 3. SHOW CART PAGE
// router.get("/", async (req, res) => {
//     try {
//         const sessionCart = req.session.cart || [];
//         const ids = sessionCart.map(item => item.productId);

//         const products = await Product.find({ _id: { $in: ids } });

//         const cart = [];
//         sessionCart.forEach(item => {
//             const product = products.find(p => p._id.toString() === String(item.productId));
//             if (product) {
//                 cart.push({ product, quantity: item.quantity });
//             }
//         });

//         let subtotal = 0;
//         let totalItems = 0;

//         cart.forEach(item => {
//             subtotal += item.product.price * item.quantity;
//             totalItems += item.quantity;
//         });

//         const deliveryFee = subtotal === 0 ? 0 : subtotal >= 499 ? 0 : 40;
//         const total = subtotal + deliveryFee;

//         res.render("shopping/cart", {
//             title: "Shopping Cart",
//             cart,
//             subtotal,
//             deliveryFee,
//             total,
//             totalItems
//         });
//     } catch (err) {
//         console.error("Show Cart Error:", err);
//         res.status(500).send("Unable to load cart");
//     }
// });

// // 4. UPDATE QUANTITY (Supports both 'action': 'increase'/'decrease' AND direct 'quantity')
// router.post("/update", (req, res) => {
//     const { productId, action, quantity } = req.body;
//     let cart = req.session.cart || [];

//     const item = cart.find(i => String(i.productId) === String(productId));

//     if (!item) {
//         return res.status(404).json({ success: false, message: "Item not found in cart" });
//     }

//     // Dynamic Handling: action base par ya exact quantity base par
//     if (action) {
//         if (action === "increase") {
//             item.quantity++;
//         } else if (action === "decrease") {
//             item.quantity--;
//         }
//     } else if (quantity !== undefined) {
//         item.quantity = Number(quantity);
//     }

//     // If quantity drop to 0 or below, remove item
//     if (item.quantity <= 0) {
//         req.session.cart = cart.filter(i => String(i.productId) !== String(productId));
//     } else {
//         req.session.cart = cart;
//     }

//     req.session.save(err => {
//         if (err) {
//             return res.status(500).json({ success: false, message: "Session save failed" });
//         }
//         res.json({ success: true });
//     });
// });

// // 5. REMOVE ITEM
// router.post("/remove", (req, res) => {
//     const { productId } = req.body;

//     req.session.cart = (req.session.cart || []).filter(
//         item => String(item.productId) !== String(productId)
//     );

//     req.session.save(err => {
//         if (err) {
//             return res.status(500).json({ success: false, message: "Session save failed" });
//         }
//         res.json({ success: true });
//     });
// });

// // 6. CLEAR CART
// router.post("/clear", (req, res) => {
//     req.session.cart = [];

//     req.session.save(err => {
//         if (err) {
//             return res.status(500).json({ success: false, message: "Session save failed" });
//         }
//         res.json({ success: true });
//     });
// });

// module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Product = require("../model/product");
const Cart = require("../model/Cart"); // 👈 FIX 1: Cart model import (Ye missing tha!)

// 1. ADD TO CART
router.post("/add", async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        
        // Session se User check karein
        const user = req.session.user;
        const userId = user ? (user._id || user.id) : null;

        if (!userId) {
            return res.status(401).json({ 
                success: false, 
                message: "Please login to add products to cart." 
            });
        }

        if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ success: false, message: "Invalid Product ID" });
        }

        const qty = Number(quantity) || 1;

        // Database me Cart Find / Create karein
        let cart = await Cart.findOne({ userId: userId });

        if (!cart) {
            cart = new Cart({
                userId: userId,
                items: [{ product: productId, quantity: qty }]
            });
        } else {
            const itemIndex = cart.items.findIndex(
                item => item.product && item.product.toString() === productId
            );

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += qty;
            } else {
                cart.items.push({ product: productId, quantity: qty });
            }
        }

        await cart.save();
        console.log("✅ Cart item saved to database successfully!");

        // Updated Total Count
        const totalCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

        return res.status(200).json({ 
            success: true, 
            message: "Product added to cart successfully!",
            cartCount: totalCount
        });

    } catch (error) {
        console.error("Add to Cart Error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Server Error: " + error.message 
        });
    }
});

// 2. CART COUNT
router.get("/count", async (req, res) => {
    try {
        const user = req.session.user;
        const userId = user ? (user._id || user.id) : null;

        if (!userId) return res.json({ success: true, count: 0 });

        const cart = await Cart.findOne({ userId: userId });
        const count = cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
        
        res.json({ success: true, count });
    } catch (err) {
        res.json({ success: true, count: 0 });
    }
});

// 3. SHOW CART PAGE
router.get("/", async (req, res) => {
    try {
        const user = req.session.user;
        const userId = user ? (user._id || user.id) : null;

        if (!userId) {
            return res.redirect("/login");
        }

        const userCart = await Cart.findOne({ userId: userId }).populate("items.product");

        const cart = userCart ? userCart.items : [];

        let subtotal = 0;
        let totalItems = 0;

        cart.forEach(item => {
            if (item.product) {
                subtotal += item.product.price * item.quantity;
                totalItems += item.quantity;
            }
        });

        const deliveryFee = subtotal === 0 ? 0 : subtotal >= 499 ? 0 : 40;
        const total = subtotal + deliveryFee;

        res.render("shopping/cart", {
            title: "Shopping Cart",
            cart,
            subtotal,
            deliveryFee,
            total,
            totalItems
        });
    } catch (err) {
        console.error("Show Cart Error:", err);
        res.status(500).send("Unable to load cart");
    }
});

// 4. UPDATE QUANTITY
router.post("/update", async (req, res) => {
    try {
        const { productId, action, quantity } = req.body;
        const userId = req.session.user ? (req.session.user._id || req.session.user.id) : null;

        if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

        let cart = await Cart.findOne({ userId: userId });
        if (!cart) return res.status(404).json({ success: false, message: "Cart not found" });

        const itemIndex = cart.items.findIndex(i => i.product.toString() === productId);
        if (itemIndex === -1) return res.status(404).json({ success: false, message: "Item not found" });

        if (action === "increase") {
            cart.items[itemIndex].quantity++;
        } else if (action === "decrease") {
            cart.items[itemIndex].quantity--;
        } else if (quantity !== undefined) {
            cart.items[itemIndex].quantity = Number(quantity);
        }

        if (cart.items[itemIndex].quantity <= 0) {
            cart.items.splice(itemIndex, 1);
        }

        await cart.save();
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 5. REMOVE ITEM
router.post("/remove", async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.session.user ? (req.session.user._id || req.session.user.id) : null;

        if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

        await Cart.updateOne(
            { userId: userId },
            { $pull: { items: { product: productId } } }
        );

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 6. CLEAR CART
router.post("/clear", async (req, res) => {
    try {
        const userId = req.session.user ? (req.session.user._id || req.session.user.id) : null;
        if (userId) {
            await Cart.deleteOne({ userId: userId });
        }
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;