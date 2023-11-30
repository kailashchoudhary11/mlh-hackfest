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
        required: true
    },
    startDate: {
        type : String,
        required: true,
    },
    endDate: {
        type : String,
        required: true,
    },
    isOnline: {
        type: Boolean,
        required: true
    }
})

// Create collection
const Hackathon = mongoose.model('Hackathon', newSchema)

const insertHackathons = async()=>{
    try{
        const result = await Hackathon.insertMany([
            {name: "Hackfest-November",startDate: "1st November 2023",endDate: "1st December 2023",isOnline: true},
            {name: "Turing HackX",startDate: "22nd December 2023",endDate: "23rd December 2023",isOnline: false},
            {name: "Web3 Apps",startDate: "29th December 2023",endDate: "29th December 2023",isOnline: true}
        ])
        console.log(result)
    }
    catch{
        console.log('Error');
    }
}

const GHW = mongoose.model('GHW',newSchema)
const insertGHW = async()=>{
    try {
        const result = await GHW.insertMany([
            {name: "Global Hack Week: Cloud",startDate: "4th December 2023",endDate: "11th December 2023",isOnline: true},
            {name: "Global Hack Week: Beginners",startDate: "5th January 2024",endDate: "11th January 2023",isOnline: true},
            {name: "Global Hack Week: AI/ML",startDate: "9th February 2023",endDate: "15th February 2023",isOnline: true},
        ])
        console.log(result)
    } catch (error) {
        console.log('Error');
    }
}

const Fellowship = mongoose.model('Fellowship',newSchema)
const insertFellowship = async()=>{
    try {
        const result = await Fellowship.insertMany([
            {name: "Spring 2024",startDate: "29th January 2024",endDate: "29th April 2024",isOnline: true},
        ])
        console.log(result)
    } catch (error) {
        console.log('Error');
    }
}

const getUpcomingHackathons=async()=>{
    const getHackathon = await Hackathon.find({isOnline: true});
    console.log("Console log Hackathon:");
    return getHackathon;
}

const getUpcomingGHWs=async()=>{
    const getGHW = await GHW.find({isOnline: true});
    console.log("Console log GHW:");
    return getGHW;
}

const getUpcomingFellowships=async()=>{
    const getFellowship = await Fellowship.find({isOnline: true});
    console.log("Console log Fellowship:");
    return getFellowship;
}

insertHackathons();
insertGHW();
insertFellowship();
getUpcomingHackathons();
getUpcomingGHWs();
getUpcomingFellowships();
module.exports = Hackathon,Fellowship,GHW;