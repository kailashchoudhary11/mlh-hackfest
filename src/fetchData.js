const { Hackathon,GHW,Fellowship } = require( "./schema");
const currDate = require('./getCurrDate')

console.log("CurrentDate: ",currDate)

const getUpcomingHackathons=async()=>{
    console.log("CurrentDate from function: ",currDate)
    try {
        // const getHackathon = await Hackathon.find({endDate: {"$gte": currDate}});
        const getHackathon = await Hackathon.find({isOnline: true})
        const formattedList = getHackathon.map((hackathon)=>({
            name: hackathon.name,
            startDate: hackathon.startDate,
            endDate: hackathon.endDate,
            isOnline: hackathon.isOnline ? "yes" : "no"
        }))
        console.log("Console log Hackathon:");
        console.log(formattedList)
        return JSON.stringify(formattedList);
    } catch (error) {
        console.log("Caught an error:", error);
    }
}

const getUpcomingGHWs=async()=>{
    try {
        // const getGHW = await GHW.find({endDate: {"$gte": currDate}});
        const getGHW = await GHW.find({isOnline: true})
        const formattedList = getGHW.map((ghw)=>({
            name: ghw.name,
            startDate: ghw.startDate,
            // endDate:  new Date(ghw.endDate).toLocaleDateString('en-US'),
            endDate:ghw.endDate,
            isOnline: ghw.isOnline ? "yes" : "no"
        }))
    console.log("Console log GHW:");
    return JSON.stringify(formattedList);
    } catch (error) {
        console.log("Caught an error:", error);
    }
}

const getUpcomingFellowships=async()=>{
    try {
    // const getFellowship = await Fellowship.find({endDate: {"$gte": currDate}});
    const getFellowship = await Fellowship.find({isOnline: true})
    const formattedList = getFellowship.map((fellowship)=>({
        name: fellowship.name,
        startDate: fellowship.startDate,
        // endDate: new Date(fellowship.endDate).toLocaleDateString('en-US'),
        endDate:fellowship.endDate,
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
    } catch (error) {
        console.log("Caught an error:", error);
    }
}

module.exports = {getUpcomingHackathons,getUpcomingGHWs,getUpcomingFellowships}