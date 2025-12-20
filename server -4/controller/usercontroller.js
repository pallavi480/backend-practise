import UserModel from "../models/usermodels.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken"
// CREATE USER
// const createUser = async (req, res) => {
//   try {
//     const { name, age, email, password, mobile } = req.body;

//     const user = await UserModel.create({
//       name,
//       age,
//       email,
//       password,
//       mobile,
//     });

//     res.status(201).json({
//       message: "User added successfully",
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const login = async(req,res)=>{
      try {
const {email,password} = req.body;
    

    const user = await UserModel.findOne({email})
    if(!user) return res.status(400).json({msg:"user not found"})

//         const user = await UserModel.create(req.body);
//             res.status(201).send({message:"user created", user});
      
        const match = await bcrypt.compare(password,user.password)
        if (!match) return res.status(400).json({msg:"invalid creadentials"})
         
          const token = jwt.sign({id:user._id}, "secretkey12", {expiresIn:"1h"})

        res.json({msg:"login successful", user})

      }catch (error){
         console.log(error)
        // req.status(500).json({error:error.message})

      }
}



const Signup = async(req,res)=>{
  try{
    const {name,email, age,password,mobile} = req.body;


    const exitemail = await UserModel.findOne({email})
    if(exitemail) return res.status(400).json({msg:"email is already register"})

      const hashpassword = await bcrypt.hash(password, 10)
    const user = await UserModel.create({name,email, age,hashpassword,mobile} )
    res.status(201).send({message:"user created", user})
  }catch (error){
    req.status(500).json({error:error.message})
  }
}
















// GET ALL USERS
const GetData = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Deleted successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { Signup, login, GetData, updateUser, deleteUser };