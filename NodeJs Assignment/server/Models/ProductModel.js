const mongoose = require("mongoose");
//This is our Products Schema
const productSchema = mongoose.Schema({
  category: {
    type: String,
  },
  product_name: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  units_in_stock: {
    type: Number,
  },
  available: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
//NOw lets export this model
module.exports = mongoose.model("items", productSchema);
