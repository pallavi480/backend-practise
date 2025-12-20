import express from "express";
import {getProduct,postProduct} from "../contollers/productcontoller.js";
import verify from "../middleware/authmiddle.js";
import checkrole from "../middleware/role.middleware.js";

const productrouter = express.Router()

productrouter.get("/getdata",verify,getProduct)
productrouter.post("/postdat",checkrole ("admin"),postProduct)
export default productrouter;