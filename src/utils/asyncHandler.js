export const asyncHandler = (fn)=>(req,res,next)=>{
    try{

    }catch(error){
        res.statusCode(error.code || 400)
        .json({
            message : error.message,
            success:false
        })
    }
}