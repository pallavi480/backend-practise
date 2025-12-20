const checkrole = (role)=>{
    return (req,res,next)=>{
        if(req.user.role !== role){
            return res.send("not a admin")
        }
    }
}

export default checkrole;