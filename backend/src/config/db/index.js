const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://mongo:27017/MyCourses");
        console.log("[MyCourses] connect successfully!!!")
    } catch (error) {
        console.error("MongoDB connection error: ", error);
    }
}

module.exports = { connectDB };