const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    how: {
        type: String,
        required: true
    }
})

module.exports = ContactSchema;