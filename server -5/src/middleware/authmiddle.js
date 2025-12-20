import jwt from "jsonwebtoken";

const verify = (req, res, next)=>{
    const token = req.headers.authorization;

    if(!token) return res.status(401).json({message:"login required"})

   try {
    const decoded = jwt.verify(token,process.env.secretkey)

    req.user = decoded;

    next()

   }catch (error){
    res.status(500).json({message:"invalid token"})

    }
   }

   export default verify;


