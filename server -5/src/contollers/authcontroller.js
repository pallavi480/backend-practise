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

     const token = jwt.sign({id:user._id}, process.env.secretkey)
     
     res.json({message:"login",token})
}

export  {register, login};