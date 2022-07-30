 import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect =  asyncHandler(async (req, res , next) => {
    let token
    const auth = req.headers.authorization;
    if(auth && auth.startsWith('Bearer')) {
        try {
            /*auth is on the form *Bearer tokenInfo* so we need to split auth
             with the space to only recover the second part which is the token info*/
            token = auth.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);
            req.user = await User.findById(decoded.id).select('-password');
            next()
            
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('not authorized , token failed')
        }
    }

    if(!token){
        res.status(401);
        throw new Error('token not found')
    }
})

export {protect}