const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // ... aapke baki fields (name, email, password)
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);