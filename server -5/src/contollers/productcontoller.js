import productModel from "../models/productmodel.js";

const getProduct = async (req,res)=>{
    try {
        const product = await productModel.find()
        res.status(200).send(product)
    }catch (error){
        res.status(500).send(error)

    }
}

const postProduct = async(req,res)=>{
    try{

        const product = await productModel.create(req.body)
        res.send(201).json({message:"product added",product})
    }catch (error){
        res.status(500).send(error);
    }
}

export  {getProduct,postProduct};