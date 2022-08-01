import express from 'express';
import { getAllBrands, addBrand  } from '../controllers/brandController.js';


const router = express.Router();


router.route('/')
    .get(getAllBrands)
    .post(addBrand)


export default router;