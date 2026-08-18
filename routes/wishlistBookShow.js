
const express = require("express");
const router = express.Router();
const User = require("../model/User"); // Path verify kar lein

// ==========================================
// 1. GET: Render Travel Wishlist Page
// ==========================================
router.get(["/", "/bookmyshow"], async (req, res) => {
    try {
        const sessionUser = req.session.user;

        if (!sessionUser) {
            return res.redirect("/auth/login");
        }

        const userId = sessionUser.id || sessionUser._id;

        // Fetch User and Populate Wishlist Array
        const user = await User.findById(userId).populate("wishlist");

        if (!user) {
            return res.redirect("/auth/login");
        }

        // Render travel wishlist EJS
        res.render("bookmyshow/veloxBookShow/wishlistBookShow", { 
            title: "Velox BookMyShow - Wishlist",
            products: user.wishlist || [], 
            user: sessionUser
        });

    } catch (error) {
        console.error("Fetch BookShow Wishlist Error:", error);
        res.status(500).send("Unable to load Wishlist page: " + error.message);
    }
});

// ==========================================
// 2. HANDLER: Add/Toggle Product in Wishlist
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

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!user.wishlist) {
            user.wishlist = [];
        }

        // Check if item exists in Wishlist
        const isExist = user.wishlist.some(id => id.toString() === productId.toString());
        let action = "";

        if (isExist) {
            await User.findByIdAndUpdate(userId, {
                $pull: { wishlist: productId }
            });
            action = "removed";
        } else {
            await User.findByIdAndUpdate(userId, {
                $addToSet: { wishlist: productId }
            });
            action = "added";
        }

        return res.status(200).json({ 
            success: true, 
            action: action,
            message: action === "added" ? "Destination added to Wishlist!" : "Destination removed from Wishlist!" 
        });

    } catch (error) {
        console.error("Wishlist Add/Toggle Error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Internal Server Error: " + error.message 
        });
    }
};

// ==========================================
// 3. HANDLER: Dedicated Remove Route
// ==========================================
const handleRemoveFromWishlist = async (req, res) => {
    try {
        const sessionUser = req.session.user;

        // 1. Check Session User
        if (!sessionUser) {
            return res.status(401).json({ success: false, message: "Please login first" });
        }

        const userId = sessionUser.id || sessionUser._id;
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        // 2. Remove Item from Wishlist Array Safely
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $pull: { wishlist: productId } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ 
            success: true, 
            message: "Item removed from Wishlist successfully!" 
        });

    } catch (error) {
        // Yeh Terminal / VS Code console me Asli Error print karega:
        console.error("🚨 EXACT WISHLIST REMOVE ERROR:", error);

        return res.status(500).json({ 
            success: false, 
            message: "Server Error: " + error.message 
        });
    }
};

// ==========================================
// ROUTE ALIASES & EXPORTS (FIXED)
// ==========================================

// Add Routes
router.post(["/add", "/bookmyshow/add", "/bookmyshow/veloxBookShow/add"], handleAddToWishlist);

// Remove Routes (Covers all variations like /remove, /travel/remove, /wishlist/remove)
router.post(["/remove", "/bookmyshow/remove", "/wishlist/remove", "/bookmyshow/wishlist/remove"], handleRemoveFromWishlist);

module.exports = router;