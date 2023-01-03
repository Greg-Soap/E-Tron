const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    cat: { type: String },
    current_price: { type: String },
    old_price: { type: String },
    badget: { type: String },
    img: { type: String, required: true },
    size: { type: Array },
    color: { type: Array },
    inStock: { type: Boolean, default: true },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
