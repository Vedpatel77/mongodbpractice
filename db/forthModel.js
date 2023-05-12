const mongoose = require('mongoose');

const fourthSchema = new mongoose.Schema({
    third_id:{
        type:String,
        ref:'third'
    },
    study:{
        type:String
    }
})

const fourth = new mongoose.model('fourth',fourthSchema);

module.exports = fourth;