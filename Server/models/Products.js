const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    category: { type: Array },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    size: { type: String },
    color: { type: String },
  },
  { timestamps: true }
);
modules.export = mongoose.model("Product", ProductSchema);
