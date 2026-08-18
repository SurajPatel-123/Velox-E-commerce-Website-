// routes/wishlist.js
const express = require("express");
const router = express.Router();
const User = require("../model/User"); // Path check kar lein (ya "../model/User")

// ==========================================
// 1. GET: Render Wishlist Page (URL: /wishlist)
// ==========================================
router.get("/", async (req, res) => {
    try {
        const sessionUser = req.session.user;

        if (!sessionUser) {
            return res.redirect("/auth/login");
        }

        const userId = sessionUser.id || sessionUser._id;

        // Populate wishlist
        const user = await User.findById(userId).populate("wishlist");

        if (!user) {
            return res.redirect("/auth/login");
        }

        res.render("shopping/wishlistShopping", { 
            products: user.wishlist || [] 
        });

    } catch (error) {
        console.error("Wishlist GET Error:", error);
        res.status(500).send("Error loading wishlist: " + error.message);
    }
});

// ==========================================
// 2. POST: Add Product to Wishlist (URL: /wishlist/add)
// ==========================================
const handleAddToWishlist = async (req, res) => {
    try {
        const sessionUser = req.session.user;
        if (!sessionUser) {
            return res.status(401).json({ success: false, message: "Please login first" });
        }

        const userId = sessionUser.id || sessionUser._id;
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        // Add to wishlist array
        await User.findByIdAndUpdate(userId, {
            $addToSet: { wishlist: productId }
        });

        return res.status(200).json({ 
            success: true, 
            message: "Item added to Wishlist successfully!" 
        });

    } catch (error) {
        console.error("Wishlist Add Error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Internal Server Error: " + error.message 
        });
    }
};
// routes/wishlist.js

// Remove product from wishlist
router.post("/remove", async (req, res) => {
    try {
        const sessionUser = req.session.user;
        if (!sessionUser) {
            return res.status(401).json({ success: false, message: "Please login first" });
        }

        const userId = sessionUser.id || sessionUser._id;
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        // $pull wishlist array se match hone wale productId ko hata deta hai
        await User.findByIdAndUpdate(userId, {
            $pull: { wishlist: productId }
        });

        return res.status(200).json({ 
            success: true, 
            message: "Item removed from Wishlist successfully!" 
        });

    } catch (error) {
        console.error("Wishlist Remove Error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Internal Server Error: " + error.message 
        });
    }
});
router.post("/", handleAddToWishlist);
router.post("/add", handleAddToWishlist);

module.exports = router;