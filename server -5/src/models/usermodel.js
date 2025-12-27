import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name:String,
//     email:{type: String, unique: true},
//     password:String,
//     role:{
//         type:String,
//         enum:["user", "admin"],
//         default:"user"
//     },
//     profile:{
//         type: String,
//         default:""
//     }
// })

const userSchema = new mongoose.Schema({

    name:String,
    email:{type:String, unique:true},
    password:String,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    profile:{
        type:String,
        default:""
    }
})
const userModel = mongoose.model("user", userSchema)

export default userModel;
// green commit test

