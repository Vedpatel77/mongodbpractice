const mongoose = require('mongoose');

const fifthSchema = new mongoose.Schema({
    four_id:{
        type:String,
        ref:'fourth'
    },
    sport_like:[
    ]
})

const fifth = new mongoose.model('fifth',fifthSchema);

module.exports = fifth;