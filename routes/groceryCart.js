const express = require("express");
const router = express.Router();
const Product = require("../model/product");

// 1. Grocery Cart Page (Render View)
router.get("/", async (req, res) => {
    try {
        const cart = req.session.groceryCart || [];

        let subtotal = 0;
        let totalItems = 0;

        // DB calls ko optimize karne ke liye Promise.all use kiya gaya hai
        const cartPromises = cart.map(async (item) => {
            const product = await Product.findById(item.productId);
            if (product) {
                return {
                    product,
                    quantity: item.quantity
                };
            }
            return null;
        });

        const resolvedCart = await Promise.all(cartPromises);
        
        // Null values filter karein (agar product DB se delete ho chuka ho)
        const finalCart = resolvedCart.filter(item => item !== null);

        // Subtotal aur Total Items calculate karein
        finalCart.forEach(item => {
            subtotal += item.product.price * item.quantity;
            totalItems += item.quantity;
        });

        const deliveryFee = subtotal > 500 || totalItems === 0 ? 0 : 40;
        const total = subtotal + deliveryFee;

        res.render("grocery/veloxGrocery/groceryCart", {
            title: "My Grocery Cart",
            cart: finalCart,
            subtotal,
            totalItems,
            deliveryFee,
            total
        });
    } catch (err) {
        console.error("Cart Fetch Error:", err);
        res.status(500).send("Server Error");
    }
});

// 2. Add Item to Cart
router.post("/add", (req, res) => {
    const { productId } = req.body;

    if (!req.session.groceryCart) {
        req.session.groceryCart = [];
    }

    const index = req.session.groceryCart.findIndex(
        item => item.productId == productId
    );

    if (index > -1) {
        req.session.groceryCart[index].quantity++;
    } else {
        req.session.groceryCart.push({
            productId,
            quantity: 1
        });
    }

    res.json({ success: true });
});

// 3. Get Cart Items Count
router.get("/count", (req, res) => {
    let count = 0;

    if (req.session.groceryCart) {
        req.session.groceryCart.forEach(item => {
            count += item.quantity;
        });
    }

    res.json({ count });
});

// 4. Update Quantity (Handles 'action': 'increase'/'decrease' AND direct 'quantity')
router.post("/update", (req, res) => {
    const { productId, action, quantity } = req.body;

    let cart = req.session.groceryCart || [];
    const item = cart.find(i => i.productId == productId);

    if (!item) {
        return res.json({ success: false, message: "Item not found in cart" });
    }

    // Agar frontend se action ('increase' / 'decrease') aa raha hai (Matching EJS JS)
    if (action) {
        if (action === "increase") {
            item.quantity++;
        } else if (action === "decrease") {
            item.quantity--;
        }
    } 
    // Agar frontend se direct exact quantity set karne ke liye aa raha hai
    else if (quantity !== undefined) {
        item.quantity = Number(quantity);
    }

    // Quantity 0 ya usase kam hone par item remove kar dein
    if (item.quantity <= 0) {
        req.session.groceryCart = cart.filter(i => i.productId != productId);
    } else {
        req.session.groceryCart = cart;
    }

    res.json({ success: true });
});

// 5. Remove Single Item
router.post("/remove", (req, res) => {
    const { productId } = req.body;

    req.session.groceryCart = (req.session.groceryCart || []).filter(
        item => item.productId != productId
    );

    res.json({ success: true });
});

// 6. Clear Entire Cart
router.post("/clear", (req, res) => {
    req.session.groceryCart = [];
    res.json({ success: true });
});

module.exports = router;