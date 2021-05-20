const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],//array de números
        required: true,
    },

}); 
module.exports = PointSchema