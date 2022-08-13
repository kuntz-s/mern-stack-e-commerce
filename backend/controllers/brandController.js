import asyncHandler from "express-async-handler";
import Brand from "../models/brandModel.js"

/**
 * @desc get all brands
 * @routes GET api/brands
 * @acces public
 */
const getAllBrands = asyncHandler(async (req, res ) => {
    const brands =await  Brand.find({});
    res.json(brands)
})

/**
 * @desc add a new brand
 * @routes POST api/brand
 * @acces private
 */
const addBrand = asyncHandler(async (req, res) => {
    const {name, url} = req.body;

    const verify = await Brand.findOne({name:name}); // returns null if brand not found and array if found
    if(verify){
        res.status(400);
        throw new Error(`${name} already exists in the database`);
    }
    else{
        const newBrand = await Brand.create({
            name:name,
            url:url
        })

        if(newBrand){
            res.status(201).json({
                id:newBrand._id,
                name:newBrand.name,
                url:newBrand.url
            })
        }else {
            res.status(404);
            throw new Error('invalid brand data')
        }

    }
})

export {getAllBrands, addBrand};