import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productrouter from "./routes/productroutes.js";
import userrouter from "./routes/userroutes.js";
import Contact from "./routes/contactroute.js"
dotenv.config();

connectDB()  

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server is running ")
})

app.use("/api/product",productrouter)
app.use("/api/user",userrouter)
app.use ("/api",Contact)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

