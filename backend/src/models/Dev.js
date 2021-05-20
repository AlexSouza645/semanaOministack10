const mongoose = require('mongoose')
//importar a localização
const PointSchema = require('./utils/PointSchema')
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    //criar localização 
    location: {
        type: PointSchema,
        //indice dentro da geolocalização
        index: '2dsphere'
    }

});
module.exports = mongoose.model('Dev', DevSchema)