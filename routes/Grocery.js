const express = require("express");
const router = express.Router();
const Product = require("../model/product");

// Utility: Regex characters escape karne ke liye
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// ==========================================
// GROCERY SPECIFIC SEARCH ROUTE (/grocery/search)
// ==========================================
router.get("/search", async (req, res) => {
    try {
        const { q, category } = req.query;

        const cleanQ = q ? q.trim() : "";
        const cleanCat = (category && category !== "all" && category !== "All") 
            ? category.trim().replace(/\+/g, " ") 
            : "";

        let queryFilter = {};
        let orConditions = [];

        // 1. Text Search (Query) Filter
        if (cleanQ !== "") {
            const safeQ = escapeRegex(cleanQ);
            orConditions.push(
                { title: { $regex: safeQ, $options: "i" } },
                { description: { $regex: safeQ, $options: "i" } }
            );
        }

        if (orConditions.length > 0) {
            queryFilter.$or = orConditions;
        }

        // 2. Category Filter
        if (cleanCat !== "") {
            const safeCat = escapeRegex(cleanCat);
            const categoryRegex = new RegExp(safeCat, "i");

            if (queryFilter.$or) {
                queryFilter = {
                    $and: [
                        { category: categoryRegex },
                        { $or: queryFilter.$or }
                    ]
                };
            } else {
                queryFilter.category = categoryRegex;
            }
        }

        // Database Query Execute karein
        let products = await Product.find(queryFilter);

        // FALLBACK: Agar query + category dono milkar 0 result dein, toh bas name (q) se search karein
        if (products.length === 0 && cleanQ !== "") {
            const safeQ = escapeRegex(cleanQ);
            products = await Product.find({
                $or: [
                    { title: { $regex: safeQ, $options: "i" } },
                    { description: { $regex: safeQ, $options: "i" } }
                ]
            });
        }

        let searchTitle = cleanQ || cleanCat || "Grocery Search Results";

        // View Render
        res.render("grocery/product-details", {
            title: `Velox Grocery - ${searchTitle}`,
            products: products,
            product: products.length > 0 ? products[0] : null, // Target single item safely
            pageTitle: searchTitle,
            categoryName: cleanCat || searchTitle,
            searchQuery: cleanQ
        });

    } catch (error) {
        console.error("Grocery Search Error:", error);
        res.status(500).send("Error performing grocery search");
    }
});

module.exports = router;