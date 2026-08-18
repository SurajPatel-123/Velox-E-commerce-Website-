const express = require("express");
const router = express.Router();
const Product = require("../model/product");

// Travel Cart Page
router.get("/", async (req, res) => {
    try {
        let cart = req.session.travelCart || [];

        let finalCart = [];
        let subtotal = 0;
        let totalItems = 0;

        for (let item of cart) {
            const product = await Product.findById(item.productId);

            if (product) {
                finalCart.push({
                    product,
                    quantity: item.quantity
                });

                subtotal += product.price * item.quantity;
                totalItems += item.quantity;
            }
        }

        const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 40;
        const total = subtotal + deliveryFee;

        res.render("travel/veloxTravel/travelCart", {
            title: "My Travel Cart",
            cart: finalCart,
            subtotal,
            totalItems,
            deliveryFee,
            total
        });
    } catch (error) {
        console.error("Error loading travel cart:", error);
        res.status(500).render("error", { message: "Failed to load cart." });
    }
});

// Add Item to Cart
router.post("/add", (req, res) => {
    const { productId } = req.body;

    if (!productId) {
        return res.status(400).json({ success: false, message: "Product ID is required." });
    }

    if (!req.session.travelCart) {
        req.session.travelCart = [];
    }

    const index = req.session.travelCart.findIndex(
        item => String(item.productId) === String(productId)
    );

    if (index > -1) {
        req.session.travelCart[index].quantity++;
    } else {
        req.session.travelCart.push({
            productId,
            quantity: 1
        });
    }

    res.json({ success: true });
});

// Get Cart Item Count
router.get("/count", (req, res) => {
    let count = 0;

    if (req.session.travelCart) {
        req.session.travelCart.forEach(item => {
            count += item.quantity;
        });
    }

    res.json({ count });
});

// Update Cart Quantity Route
router.post("/update", (req, res) => {
    const { productId, action, quantity } = req.body;

    if (!req.session.travelCart) {
        return res.status(400).json({ success: false, message: "Cart is empty." });
    }

    const itemIndex = req.session.travelCart.findIndex(
        i => String(i.productId) === String(productId)
    );

    if (itemIndex === -1) {
        return res.status(404).json({ success: false, message: "Item not found in cart." });
    }

    if (action) {
        if (action === "increase") {
            req.session.travelCart[itemIndex].quantity += 1;
        } else if (action === "decrease") {
            req.session.travelCart[itemIndex].quantity -= 1;

            if (req.session.travelCart[itemIndex].quantity <= 0) {
                req.session.travelCart.splice(itemIndex, 1);
            }
        }
    } else if (quantity !== undefined) {
        const numQty = Number(quantity);
        if (numQty <= 0) {
            req.session.travelCart.splice(itemIndex, 1);
        } else {
            req.session.travelCart[itemIndex].quantity = numQty;
        }
    }

    res.json({ success: true });
});

// Remove Single Item Route
router.post("/remove", (req, res) => {
    const { productId } = req.body;

    req.session.travelCart = (req.session.travelCart || []).filter(
        item => String(item.productId) !== String(productId)
    );

    res.json({ success: true });
});

// Clear Entire Cart Route
router.post("/clear", (req, res) => {
    req.session.travelCart = [];

    res.json({ success: true });
});

module.exports = router;