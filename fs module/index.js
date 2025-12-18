import fs from "fs";


// async

fs.readFile("data.txt","utf-8",(err,data)=>{
   if(err){
    console.log(err)
   }else{
    console.log(data)
   }
} )


// sync
fs.readFileSync("data.txt", "utf-8")


fs.writeFile("note.txt","Hello Rahul", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created")
    }
})

fs.appendFile("note.txt","\nHow are you",(err)=>{
    if(err) console.log(err)
        else console.log("data created")
   
})

// fs.rename("note.txt","new.txt",(err)=>{
//     if(err)console.log(err)
//         else console.log("new name created")
// })


fs.unlink("note.txt",(err)=>{
    if(err)console.log(err)
    else console.log("file deleted")
})

fs.mkdir("myfolder",(err)=>{
    if (err) console.log(err);
    else console.log("Folder created")
})