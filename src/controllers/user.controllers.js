import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import {User} from '../models/user.model.js'

export const signUp = asyncHandler(async (req,res,next)=>{
    const {userName, fullName , email , password } = req.body
    if([userName,email,password,fullName].some((field)=>field?.trim==="")){
        throw new ApiError(201,"all field are required")
    }
    const exitedUser = User.findOne({
        $or:[{email},{userName}]
    })
    if(!user){
        throw new ApiError (201,"user not find in database ")
    }
    const user = User.Create({
        userName,
        password,
        email,
        fullName
    })
    const createdUser = findById(user.id).select("-password -refreshToken ")
    if(!createdUser){
        throw new ApiError(201,"user has been not created ")
    }
})
