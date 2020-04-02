const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    tags: {
        type: Array
    }
})

module.exports = mongoose.model('Contact', ContactSchema);