const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hackathon-bot').then(()=>{
    console.log('Connected to database');
})
.catch(()=>{
    console.log('Error');
})

const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    startDate: {
        type : String,
        required: false,
    },
    endDate: {
        type : Number,
        required: false,
    },
    isOnline: {
        type: Boolean,
        required: false
    },
    url: {
        type: String,
        required: false
    }
})

// Create collection
const Hackathon = mongoose.model('Hackathon', newSchema)

const GHW = mongoose.model('GHW',newSchema)

const Fellowship = mongoose.model('Fellowship',newSchema)

module.exports = {Hackathon,Fellowship,GHW};