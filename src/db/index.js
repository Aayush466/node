import mongoose from 'mongoose'

export const connectDB = async()=>{
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/node`)
    }catch(error){
        console.log(`mongoDB connection Problem `,error)
        process.exit(1)
    }
}