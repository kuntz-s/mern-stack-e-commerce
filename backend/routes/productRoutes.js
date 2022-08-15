import express from "express";
import {
  getProductById,
  getAllProducts,
  addProduct
} from "../controllers/productController.js";
import {protect, verifyAdmin} from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(getAllProducts)
  .post(protect, verifyAdmin, addProduct)
;

router.route("/:id").get(getProductById);

export default router;
