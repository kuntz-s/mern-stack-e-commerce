import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import asyncHandler from "express-async-handler";

/**
 * @desc fetch all products from the database
 * @routes GET api/products
 * @access Public
 */
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
    .populate("brand")
    .populate("category");
  res.json(products);
});

/**
 * @desc fetch a specify product from the database
 * @routes GET api/products/:id
 * @access Public
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate("brand")
    .populate("category");
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

/**
 * @desc fetch all products with > 4.5 rated stars
 * @routes GET api/products/popular
 * @access Public
 */

const getPopularProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ rating: { $gt: 4 } })
    .populate("brand")
    .populate("category");
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404);
    throw new Error("popular products not found");
  }
});

/**
 * @desc fetch recent products of each category
 * @routes GET api/products/new
 * @access Public
 */
const getNewestProducts = asyncHandler(async (req, res) => {
  //we first get all categories
  const categories = await Category.find({});
  if (categories) {
    let newProducts = [];
    for (let category of categories) {
      const product = await Product.find({ category: category._id })
        .limit(1)
        .sort({ $natural: -1 })
        .populate("brand")
        .populate("category");
      if (product) {
        if (product.length > 0) newProducts.push(product);
      } else {
        res.status(400);
        throw new Error("no products where found");
      }
    }
    res.status(201).json(newProducts);
  } else {
    res.status(404);
    throw new Error("categories not found");
  }
});

/**
 * @desc fetch all products for a specified category
 * @routes GET api/products/category/:id
 * @access Public
 */
const getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: req.params.id })
    .populate("brand")
    .populate("category");
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404);
    throw new Error(
      `no products where found for this category with id ${req.params.id}`
    );
  }
});

/**
 * @desc fetch all products for a specified brand
 * @routes GET api/products/brand/:id
 * @access Public
 */
const getProductsByBrand = asyncHandler(async (req, res) => {
  const products = await Product.find({ brad: req.params.id })
    .populate("brand")
    .populate("category");
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404);
    throw new Error(
      `no products where found for this brand with id ${req.params.id}`
    );
  }
});

/**don't forget to delete product**/

/**
 * @desc add a product to the database
 * @routes POST api/products
 * @access Private
 */
const addProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    description,
    brand,
    category,
    price,
    discount,
    countInStock,
  } = req.body;

  const product = await Product.findOne({ name: name });

  if (product) {
    res.status(400);
    throw new Error("product already exists");
  } else {
    const newProduct = await Product.create({
      user: req.user.id,
      name: name,
      image: image,
      description: description,
      brand: brand,
      category: category,
      price: price,
      discount: discount ? discount : 0,
      countInStock: countInStock,
    });

    if (newProduct) {
      res.status(201).json({
        id: newProduct._id,
        user: newProduct.user,
        name: newProduct.name,
        image: newProduct.image,
        description: newProduct.description,
        brand: newProduct.brand,
        category: newProduct.category,
        price: newProduct.price,
        discount: newProduct.discount,
        countInStock: newProduct.countInStock,
      });
    } else {
      res.status(404);
      throw new Error("invalid data entries ");
    }
  }
});

export {
  getAllProducts,
  getProductById,
  addProduct,
  getPopularProducts,
  getNewestProducts,
  getProductsByCategory,
  getProductsByBrand,
};
