import express from "express";
import dotenv from "dotenv"
// import  { login,singup } from "./controllers/user_controller.js";
import userRoute from "./routes/userroutes.js"
import common_router from "./routes/commonroutes.js";
import middleware from "./middlewares/myMiddleware.js";

dotenv.config()

const app = express()
app.use(express.json())



app.get("/",middleware,(req,res)=>{
    res.send("Hello")
})

// user router
// app.get("/login", login);
// app.get("/signup",singup)

app.use("/user", userRoute)
app.use("/common", common_router)

let PORT = process.env.PORT || 8085;
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})


// mongodb+srv://sachinpathe123b1_db_user:EUd3AgaBrDmJQwLq@backend.1eoghra.mongodb.net/?appName=backend

// mongodb://localhost:27017/

// mongodb+srv://sachin12:<db_password>@data.clrw3.mongodb.net/?appName=data