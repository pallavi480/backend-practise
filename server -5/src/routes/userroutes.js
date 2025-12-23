import express from "express";
import {register, login, getAllUser }from "../contollers/authcontroller.js";
import verify from "../middleware/authmiddle.js";
import checkrole from "../middleware/role.middleware.js";

const userrouter = express.Router();

userrouter.post("/register",register)
userrouter.post("/login",login)
userrouter.post("/getall", verify, checkrole("admin"), getAllUser)

export default userrouter;