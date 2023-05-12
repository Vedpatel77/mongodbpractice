const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/pract')
.then(()=>{
    console.log("connection with mongodb is successfuly");
}).catch((err)=>{
    console.log("error ocured",err);
})