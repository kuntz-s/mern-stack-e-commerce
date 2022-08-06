import express from "express";
import { getAllOrders, addOrder } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllOrders).post(protect, addOrder);

export default router;
