const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");
const { generateThumbnail, parseTags } = require("../../util/courseHelper");

class CourseController {

    //GET /courses/:slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render("courses/show", { course: mongooseToObject(course) });
        } catch (err) {
            next(err);
        }
    }

    //[GET] /courses/create
    create(req, res) {
        res.render("courses/create");
    }

    //[POST] /courses/store
    async store(req, res, next) {
        try {
            // resp.json(req.body);
            req.body.image = generateThumbnail(req.body.videoId);

            if (req.body.tags) {
                req.body.tags = req.body.tags
                    .split(",")
                    .map(t => t.trim())
                    .filter(t => t.length > 0); // loại bỏ phần tử rỗng
            } else {
                req.body.tags = [];
            }

            const course = new Course(req.body);
            await course.save();

            res.redirect("/");
        } catch (err) {
            console.error("[COURSE SAVE ERROR]", err);
            res.status(400).json({ message: "Validation failed", error: err.message });
        }
    }

    //[GET]  /courses/:id/edit
    async edit(req, res, next) {
        try {
            const course = await Course.findById(req.params.id);
            res.render("courses/edit", {
                title: "Edit Course",
                course: mongooseToObject(course),
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CourseController;