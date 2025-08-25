const { mongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class CourseController {

    //GET /courses/:slug
    async show(req, resp, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            resp.render("courses/show", { course: mongooseToObject(course) });
        } catch (err) {
            next(err);
        }
    }

    //[GET] /courses/create
    create(req, resp) {
        resp.render("courses/create");
    }
}

module.exports = new CourseController;