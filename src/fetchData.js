const { Hackathon,GHW,Fellowship } = require( "./schema");
const {currDate} = require('./getCurrDate')

const getUpcomingHackathons=async()=>{
    const getHackathon = await Hackathon.find({endDate: {"$gte": currDate}});
    const formattedList = getHackathon.map((hackathon)=>({
        name: hackathon.name,
        startDate: hackathon.startDate,
        endDate: new Date(hackathon.endDate).toLocaleDateString('en-US'),
        isOnline: hackathon.isOnline ? "yes" : "no"
    }))
    console.log("Console log Hackathon:");
    console.log(formattedList)
    return JSON.stringify(formattedList);
}

const getUpcomingGHWs=async()=>{
    const getGHW = await GHW.find({endDate: {"$gte": currDate}});
    const formattedList = getGHW.map((ghw)=>({
        name: ghw.name,
        startDate: ghw.startDate,
        endDate: ghw.endDate,
        isOnline: ghw.isOnline ? "yes" : "no"
    }))
    console.log("Console log GHW:");
    return JSON.stringify(formattedList);
}

const getUpcomingFellowships=async()=>{
    const getFellowship = await Fellowship.find({endDate: {"$gte": currDate}});
    const formattedList = getFellowship.map((fellowship)=>({
        name: fellowship.name,
        startDate: fellowship.startDate,
        endDate: fellowship.endDate,
        isOnline: fellowship.isOnline ? "yes" : "no"
    }))
    const responseMessage = formattedList.map((item) => {
        return `
            Name: ${item.name}
            Start Date: ${item.startDate}
            End Date: ${item.endDate}
            Is Online: ${item.isOnline}
        `;
    });
    console.log("Console log Fellowship:");
    console.log(responseMessage)
    return JSON.stringify(responseMessage);
}

module.exports = {getUpcomingHackathons,getUpcomingGHWs,getUpcomingFellowships}