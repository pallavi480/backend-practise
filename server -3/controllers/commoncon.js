import { json } from "express";

const cart = (req,res)=>{
let a =  req.body;
res.send(a)
}

const payment = (req, res) => {
  res.send("payment page");
};

export {cart,payment}