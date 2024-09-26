const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/ThoughtFlare";


async function mongoConnect() {
    try{
        await mongoose.connect(url);
        console.log("MongoDB has been connected");
    }catch(error){
        console.error("Cannot connect to MongoDB", error);
    }
}

module.exports = mongoConnect;