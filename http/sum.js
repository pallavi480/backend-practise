/ const add = require("./add.js")
// const multi = require("./multi.js")
import {add} from "./add.js";
import multi from "./multi.js";

let a = add(1,2)
let m = multi(5,2)
// let s = sub(8,2)

// console.log(s)

function sum(a,m){
    console.log(a+m)
}


sum(a,m)