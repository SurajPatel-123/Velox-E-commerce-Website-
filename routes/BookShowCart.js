
const express = require("express");
const router = express.Router();
const Product = require("../model/product");

// -----------------------------------------------------------------------------
// GET: Render Cart Page
// -----------------------------------------------------------------------------
router.get("/", async (req, res) => {
    try {
        const cart = req.session.BookShowCart || [];
        let finalCart = [];
        let subtotal = 0;
        let totalItems = 0;

        if (cart.length > 0) {
            const productIds = cart.map(item => item.productId);
            const products = await Product.find({ _id: { $in: productIds } });

            const productMap = new Map(
                products.map(prod => [prod._id.toString(), prod])
            );

            for (let item of cart) {
                const product = productMap.get(item.productId.toString());
                if (product) {
                    finalCart.push({
                        product,
                        quantity: item.quantity
                    });
                    subtotal += product.price * item.quantity;
                    totalItems += item.quantity;
                }
            }
        }

        const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 40;
        const total = subtotal + deliveryFee;

        res.render("bookmyshow/veloxBookShow/BookShowCart", {
            title: "My BookMyShow Cart",
            cart: finalCart,
            subtotal,
            totalItems,
            deliveryFee,
            total
        });
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).render("error", { message: "Failed to load cart." });
    }
});

// -----------------------------------------------------------------------------
// POST: Add Item to Cart
// -----------------------------------------------------------------------------
router.post("/add", (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, message: "Product ID is required." });
        }

        if (!req.session.BookShowCart) {
            req.session.BookShowCart = [];
        }

        const index = req.session.BookShowCart.findIndex(
            item => item.productId.toString() === productId.toString()
        );

        if (index > -1) {
            req.session.BookShowCart[index].quantity += 1;
        } else {
            req.session.BookShowCart.push({
                productId,
                quantity: 1
            });
        }

        req.session.save(err => {
            if (err) {
                console.error("Session save error:", err);
                return res.status(500).json({ success: false });
            }
            res.json({ success: true });
        });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
});

// -----------------------------------------------------------------------------
// GET: Get Total Cart Item Count
// -----------------------------------------------------------------------------
router.get("/count", (req, res) => {
    const cart = req.session.BookShowCart || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);

    res.json({ count });
});

// -----------------------------------------------------------------------------
// POST: Update Quantity (Handles increase, decrease, & raw quantity)
// -----------------------------------------------------------------------------
router.post("/update", (req, res) => {
    try {
        const { productId, action, quantity } = req.body;
        let cart = req.session.BookShowCart || [];

        const index = cart.findIndex(i => i.productId.toString() === productId.toString());

        if (index === -1) {
            return res.status(404).json({ success: false, message: "Item not found in cart." });
        }

        // Action-based quantity update logic
        if (action === "increase") {
            cart[index].quantity += 1;
        } else if (action === "decrease") {
            cart[index].quantity -= 1;
            if (cart[index].quantity <= 0) {
                cart = cart.filter(i => i.productId.toString() !== productId.toString());
            }
        } else if (quantity !== undefined) {
            const parsedQuantity = Number(quantity);
            if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
                cart = cart.filter(i => i.productId.toString() !== productId.toString());
            } else {
                cart[index].quantity = parsedQuantity;
            }
        }

        req.session.BookShowCart = cart;

        req.session.save(err => {
            if (err) return res.status(500).json({ success: false });
            res.json({ success: true });
        });
    } catch (error) {
        console.error("Error updating cart:", error);
        res.status(500).json({ success: false });
    }
});

// -----------------------------------------------------------------------------
// POST: Remove Item
// -----------------------------------------------------------------------------
router.post("/remove", (req, res) => {
    try {
        const { productId } = req.body;

        req.session.BookShowCart = (req.session.BookShowCart || []).filter(
            item => item.productId.toString() !== productId.toString()
        );

        req.session.save(err => {
            if (err) return res.status(500).json({ success: false });
            res.json({ success: true });
        });
    } catch (error) {
        console.error("Error removing item:", error);
        res.status(500).json({ success: false });
    }
});

// -----------------------------------------------------------------------------
// POST: Clear Entire Cart
// -----------------------------------------------------------------------------
router.post("/clear", (req, res) => {
    req.session.BookShowCart = [];

    req.session.save(err => {
        if (err) return res.status(500).json({ success: false });
        res.json({ success: true });
    });
});

module.exports = router;