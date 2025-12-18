import express from "express"

const app = express()

let port = 4000

app.listen(port, ()=>{
    console.log("server is running on port 4000 ")
})