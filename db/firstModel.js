const mongoose = require('mongoose');

const firstSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const first = new mongoose.model('first',firstSchema);

module.exports = first;