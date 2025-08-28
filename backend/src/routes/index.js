const siteRoute = require("../app/controllers/SiteController");
const newsRouter = require("../routes/news");
const coursesRouter = require("../routes/courses");
const Course = require("../app/models/Course");

function route(app) {
    app.use('/courses', coursesRouter);
    app.get("/news", newsRouter);
    app.get("/", siteRoute.index);
}

module.exports = route;