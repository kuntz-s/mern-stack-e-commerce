import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
import expressAsyncHandler from 'express-async-handler';

const router = express.Router();

/**
 * @desc fetch all products from the database
 * @routes GET api/products
 * @access Public
*/ 
router.get('/',asyncHandler(async (req,res) => {
    const products = await Product.find({});
    res.json(products)
}))

/**
 * @desc fetch a specify product from the database
 * @routes GET api/products/:id
 * @access Public
*/ 
router.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    console.log("req params is", req.params.id)

    if(product) {
        res.json(product);
    }else {
        res.status(404).json({message: 'Product not found'})
    }

}))



export default router;
