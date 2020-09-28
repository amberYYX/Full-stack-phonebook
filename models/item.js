const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('returnOriginal', false)

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    number:{
        type: String,
        required: true
    },
    likeNumber:{
        type: Number,
        required: true
    }
})

ItemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
  

module.exports = mongoose.model('Item', ItemSchema)
