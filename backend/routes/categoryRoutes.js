import express from 'express';
import { getAllCategories, addCategory } from '../controllers/categoryController.js';
import {protect, verifyAdmin} from "../middleware/authMiddleware.js";


const router = express.Router();


router.route('/')
    .get(getAllCategories)
    .post(protect, verifyAdmin, addCategory)


export default router;