const Product = require("../models/productModel");

// create product

exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: "Route is working" });
};
