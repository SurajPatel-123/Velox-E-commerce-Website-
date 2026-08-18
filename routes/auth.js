const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User"); // Ensure path matches your project structure

// =====================================
// SIGNUP ROUTES
// =====================================

// Render Signup Page
router.get("/signup", (req, res) => {
    res.render("auth/signup", { 
        title: "Create Account", 
        error: null 
    });
});

// Handle Signup Request
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render("auth/signup", { 
                title: "Create Account", 
                error: "Email is already registered. Please login." 
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone
        });

        await newUser.save();

        // Save user in session
        req.session.user = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        };

        res.redirect("/");
    } catch (err) {
        console.error("Signup Error:", err);
        res.render("auth/signup", { 
            title: "Create Account", 
            error: "Something went wrong. Please try again." 
        });
    }
});

// =====================================
// LOGIN ROUTES
// =====================================

// Render Login Page
router.get("/login", (req, res) => {
    res.render("auth/login", { 
        title: "Login", 
        error: null 
    });
});

// Handle Login Request
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.render("auth/login", { 
                title: "Login", 
                error: "Invalid email or password." 
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render("auth/login", { 
                title: "Login", 
                error: "Invalid email or password." 
            });
        }

        // Set session
        req.session.user = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };

        res.redirect("/");
    } catch (err) {
        console.error("Login Error:", err);
        res.render("auth/login", { 
            title: "Login", 
            error: "Something went wrong. Please try again." 
        });
    }
});

// =====================================
// LOGOUT ROUTE
// =====================================
// GET /auth/logout
router.get("/logout", (req, res) => {
    // 1. Session destroy karein
    req.session.destroy((err) => {
        if (err) {
            console.log("Logout Error:", err);
            return res.redirect("/");
        }

        // 2. Cookie ko clear karein (Express default session cookie key: 'connect.sid')
        res.clearCookie("connect.sid");

        // 3. Home page ya Login page par redirect karein
        res.redirect("/");
    });
});
module.exports = router;