import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


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
            token: generateToken(user._id)
        })
   }else {
        res.status(401);
        throw new Error('invalid password or email');
   }
}))

/**
 * @desc get user profile info
 * @routes GET api/users/profile
 * @acces private
 */
const getUserProfile = (asyncHandler (async (req, res) => {
     console.log("req.user is", req.user)
     const user = await User.findById(req.user._id);
     if(user){
          res.json({
               _id: user._id,
               name: user.name,
               surname: user.surname,
               email: user.email,
               isAdmin: user.isAdmin,
               })
     }else {
          res.status(404);
          throw new Error("user not found")
     }
}))


export {authUser, getUserProfile}