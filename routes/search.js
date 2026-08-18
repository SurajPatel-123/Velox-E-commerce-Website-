const express = require("express");
const router = express.Router();
const Product = require("../model/product");

// Special characters safely escape karne ke liye function
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

router.get("/search", async (req, res) => {
  try {
    const query = (req.query.q || "").trim();
    const category = (req.query.category || "all").trim();

    let searchFilter = {};

    // 1. Text Search Filter (Matches name, title, description, brand, category)
    if (query !== "") {
      const safeQuery = escapeRegex(query);
      searchFilter.$or = [
        { name: { $regex: safeQuery, $options: "i" } },
        { title: { $regex: safeQuery, $options: "i" } },
        { description: { $regex: safeQuery, $options: "i" } },
        { brand: { $regex: safeQuery, $options: "i" } },
        { category: { $regex: safeQuery, $options: "i" } }
      ];
    }

    // 2. Category Filter (Matches exact or case-insensitive category)
    if (category.toLowerCase() !== "all" && category !== "") {
      const safeCategory = escapeRegex(category);
      
      // If query filter already exists, use $and so both conditions apply
      if (searchFilter.$or) {
        searchFilter = {
          $and: [
            { category: { $regex: `^${safeCategory}$`, $options: "i" } },
            { $or: searchFilter.$or }
          ]
        };
      } else {
        searchFilter.category = { $regex: `^${safeCategory}$`, $options: "i" };
      }
    }

    // Fetch matching products from MongoDB
    const products = await Product.find(searchFilter).sort({ createdAt: -1 });

    // Debug log to check fetched products in Terminal
    console.log(`Found ${products.length} products for Query: "${query}" & Category: "${category}"`);

    // Render product-details safely
    res.render("shopping/product-details", {
      products: products,
      product: products.length > 0 ? products[0] : null, // Safely pass first product
      query: query,
      category: category
    });

  } catch (error) {
    console.error("Search Error Details:", error);
    res.status(500).send(`Server Error: ${error.message}`);
  }
});

module.exports = router;