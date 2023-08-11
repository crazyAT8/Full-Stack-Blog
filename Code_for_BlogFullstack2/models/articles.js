const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        //default: () => Date.now() we could pass the default through this function if we want but
        // we already have a date function constructed and availible
        default: Date.now
    }
})
//need to pass it all of the different option for all of the columns our article has
//in order to use this article Schema, we need to export it 

module.exports = mongoose.model('Article', articleSchema);