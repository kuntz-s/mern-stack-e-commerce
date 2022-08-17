import express from "express";
import {
  getProductById,
  getAllProducts,
  addProduct,
  getPopularProducts,
  getProductsByCategory,
  getNewestProducts,
  getProductsByBrand
} from "../controllers/productController.js";
import { protect, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/popular", getPopularProducts);

router.get("/new", getNewestProducts);

router.get("/category/:id", getProductsByCategory);

router.get("/brand/:id", getProductsByBrand);

router.route("/").get(getAllProducts).post(protect, verifyAdmin, addProduct);

router.route("/:id").get(getProductById);

export default router;
