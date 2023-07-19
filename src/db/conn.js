const mongoose = require("mongoose");

const db = 'mongodb+srv://car:car1234@cluster0.r2qjfgk.mongodb.net/cars?retryWrites=true&w=majority';

mongoose.connect(db).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log("No Connection")
})