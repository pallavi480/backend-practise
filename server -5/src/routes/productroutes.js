import express from "express";
import {getProduct,postProduct,updateProduct,deleteProduct} from "../contollers/productcontoller.js";
import verify from "../middleware/authmiddle.js";
import checkRole from "../middleware/role.middleware.js";

const productrouter = express.Router();

productrouter.get("/getdata", verify, getProduct);

productrouter.post("/postdata", verify, checkRole("admin"), postProduct);

productrouter.put("/update/:id", verify, checkRole("admin"), updateProduct);

productrouter.delete("/delete/:id", verify, checkRole("admin"), deleteProduct);

export default productrouter;

// green commit test
