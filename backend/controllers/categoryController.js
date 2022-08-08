import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js"

/**
 * @desc get all categories
 * @routes GET api/categories
 * @acces public
 */
const getAllCategories = asyncHandler(async (req, res ) => {
    const categories =await  Category.find({});
    res.json(categories)
})

/**
 * @desc add a new category
 * @routes POST api/categories
 * @acces private
 */
const addCategory = asyncHandler(async (req, res) => {
    const {name, url} = req.body;

    const verify = await Category.findOne({name:name}); // returns null if category not found and array if found
    if(verify){
        res.status(400);
        throw new Error(`${name} already exists in the database`);
    }
    else{
        const newCategory = await Category.create({
            name:name,
            url:url
        })

        if(newCategory){
            res.status(201).json({
                id:newCategory._id,
                name:newCategory.name,
                url:newCategory.url
            })
        }else {
            res.status(404);
            throw new Error('invalid category data')
        }

    }
})

export {getAllCategories, addCategory};