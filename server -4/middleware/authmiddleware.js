import jwt from "jsonwebtoken";


const  authMiddleware =(req,res,next)=>{
     let a = 123567
    
    const token = req.headers.authorization;

    if(!token) return res.status(401)("token not found")

      const decoded = jwt.verify(token, "security12")

    // console.log (decoded)

    req.userID = decoded.id
    next()
    // if(data == a){
    //     next()

    // }else{
    //     res.send("data not matched")
    // }
        
}

export default authMiddleware;
