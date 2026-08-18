require("dotenv").config();
const dns = require("dns");
// Fix DNS resolution issues for MongoDB Atlas SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/velox";

// ==========================================
// DATABASE CONNECTION
// ==========================================
async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => console.log("Connected to MongoDB Atlas successfully."))
    .catch((err) => console.error("MongoDB Connection Error:", err));

// Models
const Product = require("./model/product");
const Cart = require("./model/Cart");

// Routers
const authRoutes = require("./routes/auth");
const cartRouter = require("./routes/cart");
const groceryCartRouter = require("./routes/groceryCart");
const travelCartRouter = require("./routes/travelCart");
const bookShowCartRouter = require("./routes/BookShowCart");

const wishlistShoppingRouter = require("./routes/wishlistShopping");
const wishlistGroceryRouter = require("./routes/wishlistGrocery");
const wishlistTravelRouter = require("./routes/wishlistTravel"); 
const wishlistBookShowRouter = require("./routes/wishlistBookShow");

const bookmyshowRoutes = require("./routes/bookmyshow");
const travelRoutes = require("./routes/travel");
const searchRoutes = require("./routes/search");
const groceryRoutes = require("./routes/Grocery");

// ==========================================
// APP CONFIGURATION
// ==========================================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ==========================================
// MIDDLEWARE
// ==========================================
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ==========================================
// SESSION CONFIGURATION
// ==========================================
app.use(
    session({
        secret: process.env.SESSION_SECRET || "velox-secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);

// ==========================================
// GLOBAL USER & CACHE MIDDLEWARE
// ==========================================
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    next();
});

// Auth Guard Middleware
const isLoggedIn = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect("/auth/login"); 
    }
    next();
};

// ==========================================
// ROUTE MOUNTS
// ==========================================
app.use("/auth", authRoutes);
app.use("/cart", cartRouter);
app.use("/groceryCart", groceryCartRouter);
app.use("/travel/veloxTravel/travelCart", travelCartRouter);
app.use("/bookmyshow/veloxBookShow/BookShowCart", bookShowCartRouter);

app.use("/wishlistShopping", wishlistShoppingRouter);
app.use("/wishlist", wishlistGroceryRouter);
app.use("/wishlist/travel", wishlistTravelRouter);
app.use("/wishlist/entertainment", wishlistBookShowRouter);

app.use("/bookmyshow", bookmyshowRoutes);
app.use("/travel", travelRoutes);
app.use("/grocery", groceryRoutes);

// ==========================================
// SHOPPING HOME PAGE
// ==========================================
app.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        console.log(`[DEBUG Home Route] Total products loaded: ${products.length}`);
        
        res.render("shopping/veloxShopping/header", {
            title: "Velox Shopping - Home",
            products: products || []
        });
    } catch (error) {
        console.error("Shopping Home Error Details:", error);
        res.status(500).send("Unable to load shopping page");
    }
});

// ==========================================
// SHOPPING CATEGORY ROUTES
// ==========================================
const shoppingCategories = [
    { path: "/electronics", category: "Electronics", view: "electronics" },
    { path: "/beauty", category: "Beauty", view: "beauty" },
    { path: "/fashion", category: "Fashion", view: "Fashion" },
    { path: "/mobile", category: "Mobiles", view: "mobile" },
    { path: "/laptops", category: "Laptops", view: "Laptops" },
    { path: "/tvs", category: "TVs", view: "tvs" },
    { path: "/Home&Appliances", category: "Home Appliances", view: "Home&Appliances" },
    { path: "/sport", category: "Sports", view: "sport" },
    { path: "/books", category: "Books", view: "books" },
    { path: "/toys", category: "Toys", view: "toys" }
];

shoppingCategories.forEach(({ path, category, view }) => {
    app.get(path, async (req, res) => {
        try {
            const products = await Product.find({ 
                category: { $regex: category, $options: "i" } 
            });

            console.log(`[DEBUG Category] Route: ${path} | Searching: "${category}" | Found: ${products.length} products`);

            res.render(`shopping/productspage/${view}`, {
                title: `Velox ${category}`,
                products: products || []
            });
        } catch (error) {
            console.error(`Category ${category} Error:`, error);
            res.status(500).send(`Unable to load ${category} page`);
        }
    });
});

app.get("/deals", async (req, res) => {
    try {
        const products = await Product.find({});
        res.render("shopping/productspage/deals", {
            title: "Velox Deals",
            products: products || []
        });
    } catch (error) {
        console.error("Deals Page Error:", error);
        res.status(500).send("Unable to load deals page");
    }
});

// ==========================================
// BOOKMYSHOW SECTION
// ==========================================
const bmsCategories = [
    "Movies", "Events", "Plays", "Sports", 
    "Concerts", "Comedy Shows", "Kids", "Activities"
];

const bookmyshowViewMap = {
    "Movies": "Movies",
    "Activities": "Activities",
    "Comedy Shows": "ComedyShows",
    "Concerts": "Concerts",
    "Events": "Events",
    "Kids": "Kids",
    "Plays": "Plays",
    "Sports": "Sports"
};

app.get("/bookmyshow", async (req, res) => {
    try {
        const products = await Product.find({ category: { $in: bmsCategories } });
        res.render("bookmyshow/veloxBookShow/header", {
            title: "Velox BookMyShow",
            products: products || []
        });
    } catch (error) {
        console.error("BookMyShow Home Error:", error);
        res.status(500).send("Unable to load BookMyShow page");
    }
});

app.get("/bookmyshow/category/:categoryName", async (req, res) => {
    try {
        const { categoryName } = req.params;
        const products = await Product.find({ category: categoryName });
        const viewFile = bookmyshowViewMap[categoryName] || "Activities";

        res.render(`bookmyshow/productpage/${viewFile}`, {
            title: `Velox BookMyShow - ${categoryName}`,
            activities: products,
            products,
            categoryName
        });
    } catch (error) {
        console.error("BookMyShow Category Fetch Error:", error);
        res.status(500).send("Unable to load BookMyShow category page");
    }
});

app.get("/bookmyshow/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Show/Event not found");

        res.render("bookmyshow/veloxBookShow/showDetails", {
            title: product.title,
            product
        });
    } catch (error) {
        console.error("BookMyShow Product Error:", error);
        res.status(500).send("Something went wrong loading show details");
    }
});

app.get("/bookmyshow/checkout/:id", isLoggedIn, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Item not found");

        res.render("bookmyshow/veloxBookShow/bookmyshowcheckout", {
            title: "BookMyShow Checkout",
            product
        });
    } catch (error) {
        console.error("BookMyShow Checkout Error:", error);
        res.status(500).send("Something went wrong");
    }
});

// ==========================================
// TRAVEL SECTION
// ==========================================
const travelCategories = [
    "Flights", "Hotels", "Trains", "Buses",
    "Holiday Packages", "Beach Destinations", 
    "Mountain Destinations", "International Trips",
    "Hill Stations"
];

const travelViewMap = {
    "Beach Destinations": "Beach",
    "Mountain Destinations": "Mountains",
    "Holiday Packages": "Holiday",
    "Flights": "flights",
    "Hotels": "hotels",
    "International Trips": "International",
    "Trains": "Trains",
    "Buses": "buses"
};

app.get("/travel", async (req, res) => {
    try {
        const products = await Product.find({ category: { $in: travelCategories } });
        res.render("travel/veloxTravel/header", {
            title: "Velox Travel",
            products: products || []
        });
    } catch (error) {
        console.error("Travel Home Error:", error);
        res.status(500).send("Unable to load travel page");
    }
});

app.get("/travel/category/:categoryName", async (req, res) => {
    try {
        const { categoryName } = req.params;
        const products = await Product.find({ category: categoryName });
        const viewFile = travelViewMap[categoryName] || "Beach";

        res.render(`travel/productpage/${viewFile}`, {
            title: `Velox Travel - ${categoryName}`,
            beaches: products,
            products,
            categoryName
        });
    } catch (error) {
        console.error("Travel Category Fetch Error:", error);
        res.status(500).send("Unable to load travel category page");
    }
});

app.get("/travel/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Travel package/trip not found");

        res.render("travel/veloxTravel/travelDetails", {
            title: product.title,
            product
        });
    } catch (error) {
        console.error("Travel Product Details Error:", error);
        res.status(500).send("Server Error");
    }
});

app.get("/travel/checkout/:id", isLoggedIn, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Item not found");

        res.render("travel/veloxTravel/travelCheckout", {
            title: "Travel Checkout",
            product
        });
    } catch (error) {
        console.error("Travel Checkout Error:", error);
        res.status(500).send("Something went wrong");
    }
});

// ==========================================
// GROCERY SECTION
// ==========================================
const groceryCategories = [
    "Fruits & Vegetables", "Dairy & Bakery", "Snacks",
    "Beverages", "Food Grains", "Cooking Essentials",
    "Personal Care", "Household"
];

app.get("/grocery", async (req, res) => {
    try {
        const products = await Product.find({ category: { $in: groceryCategories } });
        res.render("grocery/veloxGrocery/header", {
            title: "Velox Grocery",
            products: products || []
        });
    } catch (error) {
        console.error("Grocery Home Error:", error);
        res.status(500).send("Unable to load grocery page");
    }
});

const groceryViewMap = {
    "Fruits & Vegetables": "fruits&vegetables",
    "Dairy & Bakery": "Dairy",
    "Snacks": "Snacks",
    "Beverages": "Beverages",
    "Food Grains": "Grains",
    "Cooking Essentials": "CookingEssentials",
    "Personal Care": "PersonalCare",
    "Household": "Household"
};

app.get("/grocery/category/:categoryName", async (req, res) => {
    try {
        const { categoryName } = req.params;
        const products = await Product.find({ category: categoryName });
        const viewFile = groceryViewMap[categoryName] || "fruits&vegetables";

        res.render(`grocery/productpage/${viewFile}`, {
            title: `Velox Grocery - ${categoryName}`,
            products,
            categoryName
        });
    } catch (error) {
        console.error("Grocery Category Fetch Error:", error);
        res.status(500).send("Unable to load category page");
    }
});

app.get("/grocery/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Grocery item not found");

        res.render("grocery/product-details", {
            title: product.title,
            product
        });
    } catch (error) {
        console.error("Grocery Product Error:", error);
        res.status(500).send("Something went wrong");
    }
});

app.get("/grocery/checkout/:id", isLoggedIn, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Item not found");

        res.render("grocery/checkout", {
            title: "Grocery Checkout",
            product
        });
    } catch (error) {
        console.error("Grocery Checkout Error:", error);
        res.status(500).send("Something went wrong");
    }
});

// ==========================================
// SHOPPING PRODUCT & MAIN CHECKOUT ROUTES
// ==========================================
app.get("/shopping/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Product not found");

        res.render("shopping/product-details", {
            title: product.title,
            product
        });
    } catch (error) {
        console.error("Shopping Product Error:", error);
        res.status(500).send("Something went wrong");
    }
});

app.get("/checkout/:id", isLoggedIn, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Product not found");

        res.render("shopping/checkout", {
            title: "Checkout",
            product: product,
            cart: null
        });
    } catch (error) {
        console.error("Generic Checkout Error:", error);
        res.status(500).send("Something went wrong");
    }
});

// MAIN CHECKOUT ROUTE (Shopping)
app.get("/checkout", isLoggedIn, async (req, res) => {
    try {
        const { productId } = req.query;
        const user = req.session.user;
        const userId = user._id || user.id;

        if (productId) {
            const product = await Product.findById(productId);
            if (product) {
                return res.render("shopping/checkout", { 
                    title: "Checkout",
                    product: product, 
                    cart: null 
                });
            }
        }

        let userCart = await Cart.findOne({
            $or: [{ userId: userId }, { user: userId }]
        }).populate("items.product");

        let cartItems = [];

        if (userCart && userCart.items && userCart.items.length > 0) {
            cartItems = userCart.items;
        } else {
            const anyCart = await Cart.findOne({}).populate("items.product");
            if (anyCart && anyCart.items) {
                cartItems = anyCart.items;
            }
        }

        return res.render("shopping/checkout", { 
            title: "Cart Checkout",
            product: null, 
            cart: cartItems 
        });

    } catch (error) {
        console.error("Checkout Error:", error);
        res.status(500).send("Server Error in Checkout");
    }
});

// GROCERY CHECKOUT ROUTE
app.get("/grocery/checkout", async (req, res) => {
    try {
        const { productId } = req.query;

        if (productId) {
            const product = await Product.findById(productId);
            if (product) {
                return res.render("grocery/checkout", { 
                    title: "Checkout",
                    product: product, 
                    cart: null 
                });
            }
        }

        const groceryCartSession = req.session.groceryCart || [];

        if (groceryCartSession.length === 0) {
            return res.redirect("/groceryCart");
        }

        const cartPromises = groceryCartSession.map(async (item) => {
            const product = await Product.findById(item.productId);
            if (product) {
                return {
                    product: product,
                    quantity: item.quantity
                };
            }
            return null;
        });

        const resolvedCart = await Promise.all(cartPromises);
        const groceryCart = resolvedCart.filter(item => item !== null);

        return res.render("grocery/checkout", { 
            title: "Grocery Checkout",
            product: null, 
            cart: groceryCart 
        });

    } catch (error) {
        console.error("Grocery Checkout Error:", error);
        res.status(500).send("Server Error in Grocery Checkout");
    }
});

// TRAVEL CHECKOUT ROUTE
app.get("/travel/checkout", async (req, res) => {
    try {
        const { productId } = req.query;

        if (productId) {
            const product = await Product.findById(productId);
            if (product) {
                return res.render("travel/veloxTravel/checkout", { 
                    title: "Travel Booking Checkout",
                    product: product, 
                    cart: null 
                });
            }
        }

        const travelCartSession = req.session.travelCart || [];

        if (travelCartSession.length === 0) {
            return res.redirect("/travel/veloxTravel/travelCart");
        }

        const cartPromises = travelCartSession.map(async (item) => {
            const product = await Product.findById(item.productId);
            if (product) {
                return {
                    product: product,
                    quantity: item.quantity
                };
            }
            return null;
        });

        const resolvedCart = await Promise.all(cartPromises);
        const travelCart = resolvedCart.filter(item => item !== null);

        return res.render("travel/veloxTravel/checkout", { 
            title: "Travel Booking Checkout",
            product: null, 
            cart: travelCart 
        });

    } catch (error) {
        console.error("Travel Checkout Error:", error);
        res.status(500).send("Server Error in Travel Checkout");
    }
});

// BOOKMYSHOW CHECKOUT ROUTE
app.get("/bookmyshow/checkout", async (req, res) => {
    try {
        const { productId } = req.query;
        let finalCart = [];
        let subtotal = 0;
        let totalItems = 0;

        if (productId) {
            const product = await Product.findById(productId);
            if (product) {
                finalCart.push({ product: product, quantity: 1 });
                subtotal = product.price || 0;
                totalItems = 1;
            }
        } else {
            const sessionCart = req.session.BookShowCart || [];

            if (sessionCart.length === 0) {
                return res.redirect("/bookmyshow/veloxBookShow/BookShowCart");
            }

            const productIds = sessionCart.map(item => item.productId);
            const products = await Product.find({ _id: { $in: productIds } });

            const productMap = new Map(
                products.map(prod => [prod._id.toString(), prod])
            );

            for (let item of sessionCart) {
                const product = productMap.get(item.productId.toString());
                if (product) {
                    finalCart.push({
                        product: product,
                        quantity: item.quantity
                    });
                    subtotal += (product.price || 0) * item.quantity;
                    totalItems += item.quantity;
                }
            }
        }

        if (finalCart.length === 0) {
            return res.redirect("/bookmyshow/veloxBookShow/BookShowCart");
        }

        const convenienceFee = Math.round(subtotal * 0.10);
        const grandTotal = subtotal + convenienceFee;

        return res.render("bookmyshow/veloxBookShow/checkout", { 
            title: "BookMyShow Booking Checkout",
            cart: finalCart,
            subtotal: subtotal,
            convenienceFee: convenienceFee,
            totalItems: totalItems,
            grandTotal: grandTotal
        });

    } catch (error) {
        console.error("BookMyShow Checkout Error:", error);
        res.status(500).send("Server Error in BookMyShow Checkout");
    }
});

// app.post('/place-order', async (req, res) => {
//     try {
//         const { checkoutType, productId, cartData, totalAmount: formTotalAmount } = req.body;
        
//         const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000); 
//         let totalAmount = 0;
//         let orderedItems = [];

//         if (checkoutType === 'single') {
//             const product = await Product.findById(productId);
//             if (product) {
//                 const price = Number(product.price) || 0;
//                 totalAmount = price;
//                 orderedItems.push({
//                     title: product.title,
//                     price: price,
//                     quantity: 1,
//                     image: product.image
//                 });
//             }
//         } 
//         else if (checkoutType === 'cart') {
//             let parsedCart = [];

//             if (cartData) {
//                 try {
//                     parsedCart = typeof cartData === 'string' ? JSON.parse(cartData) : cartData;
//                 } catch (e) {
//                     console.log("JSON Parse Error:", e.message);
//                 }
//             } 
            
//             if (parsedCart.length === 0 && req.session && req.session.cart) {
//                 parsedCart = req.session.cart;
//             }

//             parsedCart.forEach(item => {
//                 const prod = item.product || item;
//                 const price = Number(prod.price) || 0;
//                 const qty = Number(item.quantity) || 1;

//                 totalAmount += (price * qty);

//                 orderedItems.push({
//                     title: prod.title || "Product",
//                     price: price,
//                     quantity: qty,
//                     image: prod.image || ""
//                 });
//             });

//             if (totalAmount === 0 && formTotalAmount) {
//                 totalAmount = Number(formTotalAmount) || 0;
//             }

//             if (req.session) {
//                 req.session.cart = [];
//             }
//         }

//         res.render('order-success', {
//             orderId: orderId,
//             items: orderedItems,
//             totalAmount: totalAmount,
//             orderDate: new Date().toLocaleDateString('en-IN', {
//                 day: 'numeric',
//                 month: 'long',
//                 year: 'numeric'
//             })
//         });

//     } catch (error) {
//         console.error("Order error:", error);
//         res.status(500).send("Error placing order");
//     }
// });
app.post('/place-order', async (req, res) => {
    try {
        const { checkoutType, productId, cartData, totalAmount: formTotalAmount } = req.body;
        
        const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000); 
        let totalAmount = 0;
        let orderedItems = [];

        // 1. ALL CART TYPES (Grocery / Travel / Shopping Cart)
        if (checkoutType === 'grocery' || checkoutType === 'travel' || checkoutType === 'cart' || cartData) {
            let parsedCart = [];
            
            if (cartData) {
                try {
                    parsedCart = typeof cartData === 'string' ? JSON.parse(cartData) : cartData;
                } catch (e) {
                    console.error("JSON parsing error:", e);
                }
            } 
            
            // Session fallback agar form data missing ho
            if (parsedCart.length === 0 && req.session) {
                if (checkoutType === 'travel') parsedCart = req.session.travelCart || [];
                else if (checkoutType === 'grocery') parsedCart = req.session.groceryCart || [];
                else parsedCart = req.session.cart || [];
            }

            parsedCart.forEach(item => {
                const prod = item.product || item;
                const price = Number(prod.price || item.price) || 0;
                const qty = Number(item.quantity || item.tickets) || 1;

                totalAmount += (price * qty);

                orderedItems.push({
                    title: prod.title || prod.name || item.destination || "Booking Item",
                    price: price,
                    quantity: qty,
                    image: prod.image || item.image || ""
                });
            });

            // Clear session carts after successful booking
            if (req.session) {
                if (checkoutType === 'travel') req.session.travelCart = [];
                else if (checkoutType === 'grocery') req.session.groceryCart = [];
                else req.session.cart = [];
            }
        } 
        // 2. SINGLE PRODUCT CHECKOUT
        else if (checkoutType === 'single' && productId) {
            const product = await Product.findById(productId);
            if (product) {
                const price = Number(product.price) || 0;
                totalAmount = price;
                orderedItems.push({
                    title: product.title,
                    price: price,
                    quantity: 1,
                    image: product.image
                });
            }
        }

        // Final total validation check
        if (totalAmount === 0 && formTotalAmount) {
            totalAmount = Number(formTotalAmount) || 0;
        }

        res.render('order-success', {
            orderId: orderId,
            items: orderedItems,
            totalAmount: totalAmount,
            orderDate: new Date().toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
        });

    } catch (error) {
        console.error("Order process error:", error);
        res.status(500).send("Error placing order");
    }
});
// ==========================================
// CATCH-ALL SEARCH ROUTE (MOUNTED LAST)
// ==========================================
app.use("/", searchRoutes);

// ==========================================
// 404 CATCH-ALL & SERVER INITIALIZATION
// ==========================================
app.use((req, res) => {
    res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});