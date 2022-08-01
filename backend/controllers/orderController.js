import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

/**
 * @desc get all orders
 * @routes GET api/orders
 * @acces private
 */
const getAllOrders = asyncHandler(async (req, res ) => {
    const orders =await Order.find({});
    res.json(orders)
})

/**
 * @desc add a new order to the database
 * @routes POST api/orders
 * @acces private
 */
const addOrder = asyncHandler(async (req, res) => {
    const {orderItems, shippingAdress, paymentMethod, itemsPrice, taxPrice,shippingPrice, totalPrice} = req.body

    if(orderItems && orderItems.lenght() === 0){
        res.status(400);
        throw new Error('no ordered items');
    }else {
        const order = new Order({
            orderItems,
            user:req.user._id, 
            shippingAdress, 
            paymentMethod, 
            itemsPrice, 
            taxPrice,
            shippingPrice, 
            totalPrice
        })

        const createdOrder = await order.save();
        res.status(201).json(createdOrder)
    }
})

export {getAllOrders, addOrder};