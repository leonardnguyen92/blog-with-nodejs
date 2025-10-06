const { multipleMongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class MeController {

    //[GET] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            const course = await Course.find({});
            res.render("me/stored-courses", {
                tittle: "My Courses",
                course: multipleMongooseToObject(course),
            })
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new MeController;