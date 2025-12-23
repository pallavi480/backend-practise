import userModel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const register = async(req,res)=>{
    const {name,email,password,role} = req.body;
    const hashpass = await bcrypt.hash(password,10)

    const user = await userModel.create({
        name,
        email,
        password: hashpass,
        role
    });
    res.status(201).json({Message:"user created",user})

}

const login = async(req,res)=>{
    const {email, password}= req.body
    const user = await userModel.findOne({email})
    if(!user) return res.status(404).json({message:"user not found"})

        const IsMatch = await bcrypt.compare(password,user.password);
        if(!IsMatch)return res.status(401).json({message:"wrong password"})

     const token = jwt.sign({id:user._id, role:user.role}, process.env.SECRET_KEY,{expiresIn:"2h"})
     
     res.json({message:"login",token})
}

const getAllUser = async(req,res)=>{
    try{

    let AllUser = await userModel.find()

    res.status(200).send(AllUser)
}catch (error){
    res.send(error)
}
}

  export  {register, login, getAllUser};
  // green commit test
