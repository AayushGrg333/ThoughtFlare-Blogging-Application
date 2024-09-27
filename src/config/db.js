require('dotenv').config();
const mongoose = require("mongoose");

const url = process.env.mongourl;


async function mongoConnect() {
    try{
        await mongoose.connect(url);
        console.log("MongoDB has been connected");
    }catch(error){
        console.error("Cannot connect to MongoDB", error);
    }
}

module.exports = mongoConnect;