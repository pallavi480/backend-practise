import express from "express";
import {register, login }from "../contollers/authcontroller.js";

const userrouter = express.Router();

userrouter.post("/register",register)
userrouter.post("/login",login)

export default userrouter;