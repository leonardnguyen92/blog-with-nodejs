const { default: mongoose } = require("mongoose");

module.exports = {
    // Convert array of Mongoose documents to array of plain JS objects
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },

    // Convert single Mongoose document to plain JS object
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}