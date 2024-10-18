import {asyncHandler} from "../utils/asyncHandler.js"



const generateRefreshTokenAndAccessToken = (userID)=>{
        const user = User.findById(userID)
        const AccessToken = user.AccessToken()
        const RefreshToken = user.RefreshToken()

        user.RefreshToken = refreshToken
        user.save()
        return (AccessToken , refreshToken )
}
export const registerUser = asyncHandler(async (req,res,next)=>{
    const {userName,fullName,email,password} = req.body

    if([
        userName,fullName,email,password
    ].some((field)=>field?.trim()==="")){
        ApiError("all field are required ")
    }

    const exitedUser = User.findOne({
        $or:[{email},{userName}]
    })
    if(exitedUSer){
        throw new ApiError()
    }

    const localFileAvatar = req.files?.avatar?.path
    const localFileCoverImage = req.file?.coverImage?.path

    if(!localFileAvatar){
        throw new ApiError ()
    }

    const Avatar = uploadCloudinary(localFileAvatar)
    const coverImage = uploadCloudinary(localFileCoverImage)

    if(!avatar){
        throw new ApiError()
    }

    const user = await User.create({
        userName:tolowerCase(),
        fullName,
        email,
        password,
    })
 
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser) {
        throw new ApiError()
    }
    res.status(200)
    .json(
        new ApiResponse(400,"register is created ")
    )

})

export const loginUser = asyncHandler((req,res,next)=>{
    const {userName , email , password} = req.body

    if(!userName  || !email){
        throw new ApiError('any one required ')
    }
    const user = User.findOne({
        $or:[
            {email},{userName}
        ]
    })
    if(!user){
        throw new ApiError("user is not find in dataBase ")
    }

    if(!password){
        throw new ApiError("password required ")
    }

    const isPasswordCorrect = user.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        throw new ApiError("password is correct ")
    }

    const token = generateRefreshTokenAndAccessToken(user._id)
    if(!token){
        throw new ApiError("refreshToke is not generated ")
    }

})