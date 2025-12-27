import express from "express";
import {register,login,getAllUser} from "../contollers/authcontroller.js";
import verify from "../middleware/authmiddle.js";
import checkrole from "../middleware/role.middleware.js";
import upload from "../middleware/uploadmiddleware.js";
import products from "../middleware/productsmiddleware.js"
import gallary from "../middleware/galllarymiddleware.js";


const userrouter = express.Router();


// userrouter.post("/register",upload.single("profile"), register);
// userrouter.post("/register",products.single("profile"), register);
userrouter.post("/register",gallary.single("profile"), register);
userrouter.post("/login", login);


userrouter.get("/all", verify, checkrole("admin"), getAllUser);

export default userrouter;

// green commit test
