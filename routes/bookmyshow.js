const express = require("express");
const router = express.Router();

// 1. Models Import (Verify model paths and names)
const Product = require("../model/product"); 
const User = require("../model/User");
// Special characters safely escape karne ke liye function
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
// 2. Search Route Handler
// Agar app.js me app.use('/bookmyshow', router) hai, toh yahan sirf '/search' aayega.
// Agar app.js me app.use('/', router) hai, toh yahan '/bookmyshow/search' rakhein.
router.get('/search', async (req, res) => {
//     try {
//         const { query, category } = req.query;

//         let searchFilter = {};

//         // Case-insensitive Regex Search (Title ya Name match karne ke liye)
//         if (query && query.trim() !== '') {
//             const searchRegex = new RegExp(query.trim(), 'i');
            
//             // Product title ya name kisi me bhi search ke liye $or execute karein
//             searchFilter.$or = [
//                 { title: searchRegex },
//                 { name: searchRegex }
//             ];
//         }

//         // Category Filter
//         if (category && category !== 'all') {
//             searchFilter.category = { $regex: `^${category.trim()}$`, $options: 'i' };
//         }

//         // 3. Database Query (FIXED: Show.find() ki jagah Product.find() use kiya hai)
//         const results = await Product.find(searchFilter);

//         // 4. Render Search Results View
//         res.render('bookmyshow/veloxBookShow/showDetails', { 
//             results, 
//             query: query || '', 
//             category: category || 'all'
//         });

//     } catch (error) {
//         console.error("Search Handler Error:", error);
//         res.status(500).send("Server Error while searching");
//     }
// });
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
    res.render("bookmyshow/veloxBookShow/showDetails", {
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