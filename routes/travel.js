// const express = require("express");
// const router = express.Router();

// const User = require("../model/User");
// const Product = require("../model/product");

// // Escape special characters safely for MongoDB regex queries
// function escapeRegex(text) {
//     return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
// }

// // ==========================================
// // TRAVEL SEARCH ROUTE (FIXED)
// // ==========================================
// router.get("/search", async (req, res) => {
//     try {
//         const { q, category } = req.query;
//         let queryFilter = {};

//         // 1. Search Query Handling (Safe Regex Match)
//         if (q && q.trim() !== "") {
//             const safeQ = escapeRegex(q.trim());
//             queryFilter.$or = [
//                 { title: { $regex: safeQ, $options: "i" } },
//                 { description: { $regex: safeQ, $options: "i" } },
//                 { category: { $regex: safeQ, $options: "i" } }
//             ];
//         }

//         // 2. Category Handling (Safe Regex Match)
//         if (category && category.trim() !== "" && category !== "All" && category.toLowerCase() !== "all") {
//             const cleanedCategory = category.trim().replace(/\+/g, " ");
//             const safeCategory = escapeRegex(cleanedCategory);
//             const categoryRegex = new RegExp(safeCategory, "i");
            
//             if (queryFilter.$or) {
//                 queryFilter = {
//                     $and: [
//                         { category: categoryRegex },
//                         { $or: queryFilter.$or }
//                     ]
//                 };
//             } else {
//                 queryFilter.category = categoryRegex;
//             }
//         }

//         // 3. Database Query Execution
//         const products = await Product.find(queryFilter);

//         // 4. Dynamically prepare page titles
//         let searchTitle = "Search Results";
//         let searchDescription = "Here are the best travel options matching your search.";

//         if (q && category && category !== "All" && category.toLowerCase() !== "all") {
//             searchTitle = `${q} in ${category}`;
//         } else if (q) {
//             searchTitle = `Search Results for "${q}"`;
//         } else if (category && category !== "All" && category.toLowerCase() !== "all") {
//             searchTitle = category;
//         }

//         // 5. Render Response
//         res.render("travel/veloxTravel/travelDetails", {
//             title: `Velox Travel - ${searchTitle}`,
//             products: products,
//             product: products.length > 0 ? products[0] : null, // Fix: ensures single product availability in template
//             pageTitle: searchTitle,
//             pageDescription: searchDescription,
//             categoryName: searchTitle,
//             searchQuery: q || ""
//         });

//     } catch (error) {
//         console.error("Travel Search Error:", error);
//         res.status(500).send("Error performing travel search");
//     }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

const User = require("../model/User");
const Product = require("../model/product");

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// ==========================================
// TRAVEL SEARCH ROUTE (SMART & FLEXIBLE)
// ==========================================
router.get("/search", async (req, res) => {
    try {
        const { q, category } = req.query;
        let queryFilter = {};

        const cleanQ = q ? q.trim() : "";
        const cleanCategory = (category && category !== "all" && category !== "All") 
            ? category.trim().replace(/\+/g, " ") 
            : "";

        let orConditions = [];

        // 1. Search Query Regex
        if (cleanQ !== "") {
            const safeQ = escapeRegex(cleanQ);
            orConditions.push(
                { title: { $regex: safeQ, $options: "i" } },
                { description: { $regex: safeQ, $options: "i" } },
                { location: { $regex: safeQ, $options: "i" } },
                { destination: { $regex: safeQ, $options: "i" } },
                { category: { $regex: safeQ, $options: "i" } }
            );
        }

        // 2. Query filter apply karein
        if (orConditions.length > 0) {
            queryFilter.$or = orConditions;
        }

        // 3. Category match try karein agar user ne specificity maangi ho
        if (cleanCategory !== "") {
            const safeCat = escapeRegex(cleanCategory);
            // Pehle strictly dono match karne ki koshish karein
            if (queryFilter.$or) {
                queryFilter = {
                    $and: [
                        { category: { $regex: safeCat, $options: "i" } },
                        { $or: queryFilter.$or }
                    ]
                };
            } else {
                queryFilter.category = { $regex: safeCat, $options: "i" };
            }
        }

        // Database me search run karein
        let products = await Product.find(queryFilter);

        // FALLBACK: Agar Strict Category + Query se 0 results mile, 
        // toh bas Search Text (q) ke basis par query execute karein
        if (products.length === 0 && cleanQ !== "") {
            const safeQ = escapeRegex(cleanQ);
            products = await Product.find({
                $or: [
                    { title: { $regex: safeQ, $options: "i" } },
                    { description: { $regex: safeQ, $options: "i" } },
                    { location: { $regex: safeQ, $options: "i" } },
                    { destination: { $regex: safeQ, $options: "i" } }
                ]
            });
        }

        // Page titles setup
        let searchTitle = cleanQ || cleanCategory || "Search Results";

        // Render travelDetails view with both `product` and `products`
        res.render("travel/veloxTravel/travelDetails", {
            title: `Velox Travel - ${searchTitle}`,
            products: products,
            product: products.length > 0 ? products[0] : null, // Ensures single item details load properly
            pageTitle: searchTitle,
            pageDescription: `Results for ${searchTitle}`,
            categoryName: searchTitle,
            searchQuery: cleanQ
        });

    } catch (error) {
        console.error("Travel Search Error:", error);
        res.status(500).send("Error performing travel search");
    }
});

module.exports = router;