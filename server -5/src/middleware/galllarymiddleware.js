import mongoose from "mongoose";
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, path.join(process.cwd(), "src","gallary") )
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const gallary = multer({storage});

export default gallary;
