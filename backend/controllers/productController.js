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

    if(newProduct){
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
      })
    } else {
      res.status(404);
      throw new Error('invalid data entries ');
    }
  }
});

export { getAllProducts, getProductById, addProduct };
