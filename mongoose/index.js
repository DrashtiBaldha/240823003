const { iteratee } = require("lodash");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://drashtibaldha2003_db_user:Drashtuu&12@nodecluster.v4fkwyb.mongodb.net/?retryWrites=true&w=majority&appName=nodecluster",);
const studentschema = new mongoose.Schema({
    name:String,
    department:String,
    eno:Number,
});
const stud=mongoose.model("stud",studentschema);
console.log("Successfully Connected");

const student = new stud({
    name:"Drashti",
    department:"CS&IT",
    eno:240823003,
});
student
.save()
.then(()=>{
    console.log("student login successfully!!!");
})
.catch((error)=>{
    console.log("error saving student:",error);
});
