const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
    // [GET] /
    async index(req, res, next) {
        // res.render("home", { tittle: "Trang chủ" });
        try {
            const courses = await Course.find({});
            res.render("home", {
                title: "Trang chủ",
                courses: multipleMongooseToObject(courses)
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}




module.exports = new SiteController;