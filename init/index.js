require("dotenv").config({ path: "../.env" });
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Add this line at top

const mongoose = require("mongoose");
const path = require("path");

const Product = require(path.join(__dirname, "../model/product"));
const products = require(path.join(__dirname, "./data"));

const MONGO_URL = process.env.MONGO_URL;

const initDB = async () => {
    try {
        console.log("Connecting to Database...");
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB Atlas successfully!");

        await Product.deleteMany({});
        console.log("Old products deleted.");

        await Product.insertMany(products);
        console.log(`✅ SUCCESS: ${products.length} products inserted into Database!`);

    } catch (err) {
        console.error("ERROR Seeding Database:", err);
    } finally {
        await mongoose.connection.close();
        console.log("Database Connection Closed.");
        process.exit();
    }
};

initDB();