import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    Images:{
        type:[String], 
        default:[]
    }
    
});

const productModel = mongoose.model("product", productSchema)

export default productModel;
// green commit test
