import userModel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashpass = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashpass,
      role: role || "user",
      // profile:req.file ?`uploads/${req.file.filename}` : ""
      profile:req.file ?`gallary/${req.file.filename}` : ""
      
      
    });

    res.status(201).json({
  message: "User created",
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    profile: user.profile  
  }
});


  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "4h" }
    );

    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json(error);
  }
};


const getAllUser = async (req, res) => {
  try {
    const allUsers = await userModel.find().select("-password");

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { register, login, getAllUser };
