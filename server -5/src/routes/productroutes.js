import express from "express";
import {getProduct,postProduct,updateProduct,deleteProduct} from "../contollers/productcontoller.js";
import verify from "../middleware/authmiddle.js";
import checkRole from "../middleware/role.middleware.js";
import upload from "../middleware/uploadmiddleware.js";
import products from "../middleware/productsmiddleware.js"
import gallary from "../middleware/galllarymiddleware.js";

const productrouter = express.Router();

// productrouter.get("/getdata", verify, getProduct);

productrouter.get("/getdata",  getProduct);

// productrouter.post("/postdata", upload.array("images", 5), postProduct);

// productrouter.post("/postdata", products.array("images", 5), postProduct);
productrouter.post("/postdata", gallary.array("images", 5), postProduct);

// productrouter.post(
//   "/postdata",
//   gallary.any(),
//   (req, res) => {
//     console.log(req.files);
//     res.send("OK");
//   }
// );

// productrouter.post("/postdata", verify, checkRole("admin"), postProduct);

// productrouter.put("/update/:id", verify, checkRole("admin"), updateProduct);

// productrouter.delete("/delete/:id", verify, checkRole("admin"), deleteProduct);

export default productrouter;

// green commit test
