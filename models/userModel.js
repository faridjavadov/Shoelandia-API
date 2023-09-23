import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    cart:Array,
    favorite:Array,
    code:String,
    isConfirm:{type:Boolean,default:false}
})

export const User = mongoose.model('User',userSchema); 