//import add from "./add.js";
// const add=require("./add.js");
// console.log(add(11,22));
// console.log(add(33,22));

//import path from "path";
// const path=require("path")
console.log(path.basename("myfile.txt"));
console.log("directory name:",__dirname);
console.log("full path:",path.resolve(__dirname,"myfile.txt"));

const moment=require("moment")
console.log("currrent date and time:",moment().format("dd-mm-yyyy hh:mm:ss"));

const { capitalize } = require("lodash")
const ls=require("lodash")
console.log("capitalize:",ls,capitalize("hello atmiya"));

const fs=require("fs")
fs.writeFile("myfile.txt",'hello MCA Z2 Class',(err)=>{
    if(err)throw err;
    console.log("file has been saved....");
})

const fs=require("fs")
fs.readFile("myfile.txt","utf8",(err,data)=>{
     if(err)throw err;
     console.log("file content",data);
    })

