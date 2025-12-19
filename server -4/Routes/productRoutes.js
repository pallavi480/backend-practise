import express from "express";
import {
  createProduct,
  GetData,
  updateProduct,
  deleteProduct
} from "../controller/productcontoller.js";

import authMiddlewere from '../middleware/authmiddleware.js';


const ProductRouter = express.Router();

ProductRouter.post("/create", createProduct);
ProductRouter.get("/", authMiddlewere, GetData);
ProductRouter.put("/update:id", updateProduct);
ProductRouter.delete("/delete:id", deleteProduct);

export default ProductRouter;