import fs from "fs"

// async
// fs.readFile("data.txt", "utf-8", (err,data)=>{
//     if(err) console.log(err)
//     else console.log(data)
// })


// sync

let a =  fs.readFileSync("data.txt", "utf-8")
// console.log(a)



// fs.writeFile("note.txt", "Bye-Bye", (err)=>{
//     if(err) console.log(err)
//     else console.log("file created")
// })

const x =fs.writeFileSync("data1.txt", "hello")