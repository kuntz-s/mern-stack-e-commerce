import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

/**
 * @desc fetch all products from the database
 * @routes GET api/products
 * @access Public
 */
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/**
 * @desc fetch a specify product from the database
 * @routes GET api/products/:id
 * @access Public
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getAllProducts, getProductById };
