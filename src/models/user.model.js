import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
  },
  fullName: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
  },
  password: {
    type: true,
    required: true,
  },
  refreshToken: {
    type: true,
    required: true,
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return  await bcrypt.compare(password,this.password)
}

user.Schema.methods.AccessToken()=function(){
    jwt.sign({
        _id:this._id,
        userName:this.userName,
        fullName:this.fullName,
        email:this.email
    }),
    process.env.AccessTokenSecret,
    {
        expireIn:process.env.AccessTokenExpire
    }
}
user.Schema.methods.RefreshToken()=function(){
    jwt.sign({
        _id:this._id
    }),
    process.env.RefreshTokenSecret,
    {
        expireIn:process.env.RefreshTokenExpire
    }
}
export const User = mongoose.model(User, "userSchema");
