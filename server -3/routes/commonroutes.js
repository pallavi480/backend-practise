import express from "express";
import {cart,payment} from "../controllers/commoncon.js"

const common_router = express.Router();


common_router.post("/cart",cart)
common_router.get("/payment",payment)


export default common_router;