import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:String,
    mobile:{
        type:String,
        required: true,
        unique:true,
    }
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;