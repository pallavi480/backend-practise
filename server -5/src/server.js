import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productrouter from "./routes/productroutes.js";
import userrouter from "./routes/userroutes.js";
dotenv.config();

connectDB()  

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server is running ")
})

app.use("/api/product",productrouter)
app.use("/api/user",userrouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

