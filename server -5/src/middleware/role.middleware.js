const checkrole = (role)=>{
    return (req,res,next)=>{
        if(req.user.role !== role){
            console.log(req.user.role)
            return res.send("not a admin")
        }
    }
}

export default checkrole;
// green commit test
