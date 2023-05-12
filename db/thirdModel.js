const mongoose = require('mongoose');

const thirdSchema = new mongoose.Schema({
    second_id: {
        type: String,
        ref:'first'
    },

    favouriteMovies: [

    ]
})

const third = new mongoose.model('third', thirdSchema);

module.exports = third;