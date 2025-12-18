import express from "express"
import { login, singup } from "../controllers/user_controller.js";
let router = express.Router()


router.get("/logout",(req,res)=>{
    res.send("logout")
})

router.get("/login",login)
router.get("/singup",singup)


export default router;