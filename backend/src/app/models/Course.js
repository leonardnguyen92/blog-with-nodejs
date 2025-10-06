const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

const Schema = mongoose.Schema;

const Course = new Schema({
    title: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    price: { type: Number, required: true },
    lecturer: { type: String, match: /^[A-Za-zÀ-ỹ0-9\s]+$/, minLength: 10, maxLength: 255, required: true, trim: true },
    isPublic: {
        type: Boolean, default: false
        // true = course is published and publicly visible
        // false = course is not published (admin only)
    },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    tags: { type: [String] },
    image: { type: String, maxLength: 255 },
    slug: { type: String, maxLength: 255, minLength: 6, slug: "title", unique: true, trim: true },
    videoId: { type: String },
    level: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { strict: true, timestamps: true });

// Enable mongoose-slug-updater plugin
mongoose.plugin(slug);

module.exports = mongoose.model("Course", Course);