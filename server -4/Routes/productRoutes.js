import express from "express";
import {
  createProduct,
  GetData,
  updateProduct,
  deleteProduct
} from "../controller/productcontoller.js";

const ProductRouter = express.Router();

ProductRouter.post("/create", createProduct);
ProductRouter.get("/get", GetData);
ProductRouter.put("/update:id", updateProduct);
ProductRouter.delete("/delete:id", deleteProduct);

export default ProductRouter;