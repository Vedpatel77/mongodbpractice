const mongoose = require('mongoose');

const secondSchema = new mongoose.Schema({
    first_id:{
        type:String,
        ref:'first'
    },
    hobbies:[
    ]
    
})

const second = new mongoose.model('second',secondSchema);

module.exports = second;