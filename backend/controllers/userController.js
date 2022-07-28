import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";


/**
 * @desc authenticate user and generate token
 * @routes POST api/users/login
 * @acces public
 */
const authUser = (asyncHandler (async (req, res) => {
   const {email, password} = req.body;

   const user = await User.findOne({email: email});
   
   if(user && await(user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
   }else {
        res.status(401);
        throw new Error('invalid password or email');
   }
}))

export {authUser}