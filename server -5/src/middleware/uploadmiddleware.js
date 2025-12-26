import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(process.cwd(),"src","uploads"))
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

// file type validation

const fileFilter = (req,file,cb)=>{
  if(
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"  ||
    file.mimetype === "image/jpg"    
  ){
  cb(null, true)
  }else{
    cb(new Error("only images allowed"), false)
  }
}

const upload = multer({
    storage,
    fileFilter
})

export default upload;


// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, path.join(process.cwd(),"src","products"))
//     },
//     filename: (req, file, cb) =>{
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// file type validation

// const fileFilter = (req,file,cb)=>{
//   if(
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png"  ||
//     file.mimetype === "image/jpg"    
//   ){
//   cb(null, true)
//   }else{
//     cb(new Error("only images allowed"), false)
//   }
// }

// const prodcuts = multer({
//     storage,
//     fileFilter
// })

// export default prodcuts;
