const insertHackathons = async (Hackathon,data) => {
    console.log(data);
    try {
        const count = await Hackathon.countDocuments();
        if (count === 0) {
            const result = await Hackathon.insertMany(data);
            console.log(result);
        } else {
            console.log('Hackathon data already exists.');
        }
    } catch (error) {
        console.log('Error', error);
    }
};

const insertGHW = async(GHW,data)=>{
    console.log(data);
    try {
        const count = await GHW.countDocuments();
        if(count==0)
        {
            const result = await GHW.insertMany(data)
            console.log(result)
        }
        else {
            console.log('GHW data already exists.');
        }
    } catch (error) {
        console.log('Error');
    }
}

const insertFellowship = async(Fellowship,data)=>{
    console.log(data);
    try {
        const count = await Fellowship.countDocuments()
        if(count==0){
            const result = await Fellowship.insertMany(data)
            console.log(result)
        }
        else
        {
            console.log('Fellowship data already exists.');
        }
    } catch (error) {
        console.log('Error');
    }
}

async function insertAllData(Hackathon,GHW,Fellowship,HackathonData,FellowshipData,GHWData){
    await insertHackathons(Hackathon,HackathonData)
    await insertGHW(GHW,GHWData)
    await insertFellowship(Fellowship, FellowshipData)
}

module.exports = {insertAllData}