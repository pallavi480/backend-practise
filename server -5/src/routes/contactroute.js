import express from "express";
import sendMail from "../utities/mailer.js";

const router = express.Router();

router.post("/contact",async(req,res)=>{
    try{
        const {name, email, message} = req.body
        
        await sendMail({
            to: email,
            subject:"reqest to contact",
            html: `<h1>${name}</h1>
                 <h1>${message}</h1>`
        })

     res.json ({message:"mail sent"})
    }catch (error){
        res.send(error)
    }
})

export default router