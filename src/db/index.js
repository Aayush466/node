import mongoose from 'mongoose '

export const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect('')
        console.log(`mongodb is connected ${connectionInstance}`)
    }catch(error){
        console.log("mongodb connection error",error)
        process.exit(1)
    }
}