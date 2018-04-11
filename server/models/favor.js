const mongoose = require('mongoose');

const FavorSchema = new mongoose.Schema({
    favorLevel: {
        type: String,
        default: ""
    },
    environment: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    timePeriod: {
        type: String,
        default: ""
    },
    merit: {
        type:String,
        default: 0
    }, 
    assignetTo: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Favor', FavorSchema);
