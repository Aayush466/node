import mongoose from 'mongoose '
import aggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new mongoose.Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    owner:{
        type:mongoose.Schema.Types.objectId,
        ref:'User'
    }

})

videoSchema.plugin(aggregatePaginate)
export const Video = mongoose.model('Video',videoSchema)