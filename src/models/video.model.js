import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  views:{
    type: String,
    required: true,
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
});

videoSchema.plugin(aggregatePaginate)
export const Video = mongoose.model(Video, "videoSchema");
