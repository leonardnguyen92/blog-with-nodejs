const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
    // [GET] /
    async index(req, resp, next) {
        // res.render("home", { tittle: "Trang chủ" });
        try {
            const courses = await Course.find({});
            resp.render("home", {
                title: "Trang chủ",
                courses: multipleMongooseToObject(courses)
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /search
    search(req, resp) {
        resp.render("search");
    }
}




module.exports = new SiteController;