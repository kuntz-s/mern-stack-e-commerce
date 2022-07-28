import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";


/**
 * @desc authenticate user and generate token
 * @routes POST api/users/login
 * @acces public
 */
const authUser = (asyncHandler (async (req, res) => {
   const {email, password} = req.body;
    
    res.send({
        email,
        password
    })
}))

export {authUser}