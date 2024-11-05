
export const asyncHandler = (fn)=>async (req,res,next)=>{
    try{
        await fn (req,res,next)
    }catch(error){
        res.
        statusCode(error.statusCode)
        json({
            message:error.message,
            success:false
        })
    }
}