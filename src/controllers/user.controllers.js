import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import {User} from '../models/user.model.js'

const generateAccessTokenAndRefreshToken = async (userId)=>{
    try{
        const user = await User.findById(userId)
        if(!user){
            throw new ApiError("user not found ")
        }
        refreshToken = user.GenerateRefreshToken()
        accessToken = user.GenerateAccessToken ()
        user.RefreshToken = refreshToken
        user.save({})

    }catch(error){
        console.log("error generating AccessToken and refreshToken ",error)
    }
}

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
export const login = asyncHandler ((req,res,next)=>{
    const {username , email , password } = req.body
    if(!username || !email){
        throw new ApiError(201,"email or password is required to login ")
    } 
    const user = User.findOne({
        $or:[{email},{userName}]
    })
    if(!user){
        throw new ApiError(201,"user not found on database ")
    }
    const validatePassword = user.isPasswordCorrect(password)
    if(!validatePassword){
        throw new ApiError(201,"you have entered wrong password ")
    }

    const {refreshToken ,AccessToken } = generateAccessTokenAndRefreshToken(user.id)
    const option = {
        httpOnly : true,
        secure:true
    }

    res.
    statusCode(201)
    .cookie("refreshToken",refreshToken , options)

    .json(
        new ApiResponse(
            201,
            {
                user:AccessToken , RefreshToken , option 
            },
            "user has been loginSuccessFully"
        )
    )
})

