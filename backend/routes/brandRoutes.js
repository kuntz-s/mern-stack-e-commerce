import express from 'express';
import { getAllBrands, addBrand  } from '../controllers/brandController.js';
import {protect, verifyAdmin} from "../middleware/authMiddleware.js";


const router = express.Router();


router.route('/')
    .get(getAllBrands)
    .post( protect, verifyAdmin, addBrand)


export default router;