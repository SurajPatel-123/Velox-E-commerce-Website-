const express = require("express");
const router = express.Router();
const User = require("../model/User"); // Aapka User Model Path Check Karein

// ==========================================
// 1. GET: Render Grocery Wishlist Page
// Route: GET /wishlist
// ==========================================
router.get("/", async (req, res) => {
    try {
        const sessionUser = req.session.user;

        if (!sessionUser) {
            return res.redirect("/auth/login");
        }

        const userId = sessionUser.id || sessionUser._id;

        // User profile fetch karein & wishlist Array ko populate karein
        const user = await User.findById(userId).populate("wishlist");

        if (!user) {
            return res.redirect("/auth/login");
        }

        // FIXED: EJS File 'products' Variable Expect karti hai (wishlistItems nahi)
        res.render("grocery/wishlistGrocery", { 
            title: "Velox Grocery - Wishlist",
            products: user.wishlist || [], 
            user: sessionUser
        });

    } catch (error) {
        console.error("Fetch Grocery Wishlist Error:", error);
        res.status(500).send("Unable to load Wishlist page: " + error.message);
    }
});

// ==========================================
// 2. POST: Add/Toggle Product to Wishlist
// Route: POST /wishlist/add
// ==========================================
const handleAddToWishlist = async (req, res) => {
    try {
        const sessionUser = req.session.user;

        // Auth Check
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

        // Check if already in Wishlist
        const isExist = user.wishlist.some(id => id.toString() === productId.toString());
        let action = "";

        if (isExist) {
            // Remove from wishlist
            await User.findByIdAndUpdate(userId, {
                $pull: { wishlist: productId }
            });
            action = "removed";
        } else {
            // Add to wishlist
            await User.findByIdAndUpdate(userId, {
                $addToSet: { wishlist: productId }
            });
            action = "added";
        }

        return res.status(200).json({ 
            success: true, 
            action: action,
            message: action === "added" ? "Item added to Wishlist!" : "Item removed from Wishlist!" 
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
// 3. POST: Dedicated Remove Route
// Route: POST /wishlist/remove
// ==========================================
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

// Route Aliases
router.post("/add", handleAddToWishlist);
router.post("/grocery/add", handleAddToWishlist);

module.exports = router;