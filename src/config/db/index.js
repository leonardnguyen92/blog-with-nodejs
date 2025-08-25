const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
        console.log("[f8_education_dev] connect successfully!!!")
    } catch (error) {
        console.error("MongoDB connection error: ", error);
    }
}

module.exports = { connectDB };