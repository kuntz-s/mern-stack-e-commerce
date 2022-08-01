import express from "express";
import { getAllOrders, addOrder } from "../controllers/orderController";
import {protect} from "../middleware/authMiddleware"

const router = express.Router();

router.route("/").get(getAllOrders).post(protect,addOrder);

export default router;
