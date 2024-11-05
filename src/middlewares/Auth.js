import {asyncHandler } from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import jwt from 'jsonwebtoken'
import {User} from '../models/user.model.js'
export const jwtToken =asyncHandler((req,res,next)=>{
    try {
        const token  = req.cookies?.accessToken  || req.header("Authorization")?.replace("Bearer","")
        if(!token){
            throw new ApiError(201,"token not found ")
        }
        const decodedToken = jwt.verify(token,process.env.GenerateAccessToken)
        const user = User.findById(decodedToken.id)
        req.user = user 
        next()
    } catch (error) {
        console.log("error generating jwt token " ,error);
        
    }
})