const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    category: { type: Array },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    size: { type: Array },
    color: { type: Array },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.export = mongoose.model("Product", ProductSchema);